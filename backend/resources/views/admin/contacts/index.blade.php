<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>お問い合わせ一覧</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f8fafc;
            color: #0f172a;
            margin: 0;
            padding: 32px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .card {
            background: #fff;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
        }
        h1 {
            margin: 0 0 20px;
        }
        .topbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        .topbar-left {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
        }
        .topbar-right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
        }
        .nav-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 14px;
            border-radius: 10px;
            background: #e2e8f0;
            color: #0f172a;
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
        }
        .nav-link:hover {
            background: #cbd5e1;
        }
        form.filter {
            display: grid;
            grid-template-columns: 1fr 180px 120px;
            gap: 12px;
            margin-bottom: 20px;
        }
        input, select, button {
            padding: 12px 14px;
            border-radius: 10px;
            border: 1px solid #cbd5e1;
            font-size: 14px;
        }
        button {
            background: #0f172a;
            color: #fff;
            cursor: pointer;
            border: none;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        th, td {
            text-align: left;
            padding: 14px 12px;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: top;
        }
        th {
            background: #f8fafc;
            font-weight: 700;
        }
        .badge {
            display: inline-block;
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 700;
        }
        .badge-new { background: #dbeafe; color: #1d4ed8; }
        .badge-progress { background: #fef3c7; color: #b45309; }
        .badge-done { background: #dcfce7; color: #15803d; }
        a.link {
            color: #2563eb;
            text-decoration: none;
            font-weight: 700;
        }
        .pagination {
            margin-top: 20px;
        }
        .logout-form {
            margin: 0;
        }
        @media (max-width: 900px) {
            form.filter {
                grid-template-columns: 1fr;
            }
            table {
                display: block;
                overflow-x: auto;
                white-space: nowrap;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="card">
        <div class="topbar">
            <div class="topbar-left">
                <h1>お問い合わせ一覧</h1>
            </div>

            <div class="topbar-right">
                <a href="{{ route('admin.site-settings.logo.edit') }}" class="nav-link">
                    ロゴ設定
                </a>

                <a href="{{ route('admin.faqs.index') }}" class="nav-link">
                    FAQ管理
                </a>

                <form method="POST" action="{{ route('logout') }}" class="logout-form">
                    @csrf
                    <button type="submit">ログアウト</button>
                </form>
            </div>
        </div>

        <form method="GET" action="{{ route('admin.contacts.index') }}" class="filter">
            <input
                type="text"
                name="keyword"
                value="{{ request('keyword') }}"
                placeholder="名前・会社名・メール・本文で検索"
            >

            <select name="status">
                <option value="">すべてのステータス</option>
                <option value="new" {{ request('status') === 'new' ? 'selected' : '' }}>未対応</option>
                <option value="in_progress" {{ request('status') === 'in_progress' ? 'selected' : '' }}>対応中</option>
                <option value="done" {{ request('status') === 'done' ? 'selected' : '' }}>完了</option>
            </select>

            <button type="submit">検索</button>
        </form>

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>受信日時</th>
                <th>名前</th>
                <th>会社名</th>
                <th>メール</th>
                <th>種別</th>
                <th>ステータス</th>
                <th>詳細</th>
            </tr>
            </thead>
            <tbody>
            @forelse ($contacts as $contact)
                <tr>
                    <td>{{ $contact->id }}</td>
                    <td>{{ $contact->created_at }}</td>
                    <td>{{ $contact->name }}</td>
                    <td>{{ $contact->company }}</td>
                    <td>{{ $contact->email }}</td>
                    <td>{{ $contact->inquiry_type }}</td>
                    <td>
                        @if ($contact->status === 'new')
                            <span class="badge badge-new">未対応</span>
                        @elseif ($contact->status === 'in_progress')
                            <span class="badge badge-progress">対応中</span>
                        @else
                            <span class="badge badge-done">完了</span>
                        @endif
                    </td>
                    <td>
                        <a class="link" href="{{ route('admin.contacts.show', $contact) }}">見る</a>
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="9">お問い合わせはまだありません。</td>
                </tr>
            @endforelse
            </tbody>
        </table>

        <div class="pagination">
            {{ $contacts->links() }}
        </div>
    </div>
</div>
</body>
</html>