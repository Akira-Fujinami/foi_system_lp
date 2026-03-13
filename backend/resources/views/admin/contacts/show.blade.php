<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>お問い合わせ詳細</title>
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
            max-width: 960px;
            margin: 0 auto;
        }
        .card {
            background: #fff;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }
        .back {
            text-decoration: none;
            color: #2563eb;
            font-weight: 700;
        }
        .grid {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 12px 20px;
            margin-top: 20px;
        }
        .label {
            font-weight: 700;
            color: #475569;
        }
        .message {
            white-space: pre-wrap;
            line-height: 1.8;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 16px;
        }
        select, button {
            padding: 10px 12px;
            border-radius: 10px;
            border: 1px solid #cbd5e1;
            font-size: 14px;
        }
        button {
            background: #0f172a;
            color: white;
            border: none;
            cursor: pointer;
        }
        .success {
            background: #dcfce7;
            color: #166534;
            border-radius: 12px;
            padding: 12px 14px;
            margin-bottom: 16px;
        }
        @media (max-width: 700px) {
            .grid {
                grid-template-columns: 1fr;
            }
            .header {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="card">
        <div class="header">
            <a class="back" href="{{ route('admin.contacts.index') }}">← 一覧へ戻る</a>
            <h1>お問い合わせ詳細 #{{ $contact->id }}</h1>
        </div>

        @if (session('success'))
            <div class="success">{{ session('success') }}</div>
        @endif

        <form method="POST" action="{{ route('admin.contacts.updateStatus', $contact) }}">
            @csrf
            @method('PATCH')

            <div style="display:flex; gap:12px; align-items:center; margin-bottom:24px; flex-wrap:wrap;">
                <strong>ステータス</strong>
                <select name="status">
                    <option value="new" {{ $contact->status === 'new' ? 'selected' : '' }}>未対応</option>
                    <option value="in_progress" {{ $contact->status === 'in_progress' ? 'selected' : '' }}>対応中</option>
                    <option value="done" {{ $contact->status === 'done' ? 'selected' : '' }}>完了</option>
                </select>
                <button type="submit">更新する</button>
            </div>
        </form>

        <div class="grid">
            <div class="label">受信日時</div>
            <div>{{ $contact->created_at }}</div>

            <div class="label">お名前</div>
            <div>{{ $contact->name }}</div>

            <div class="label">会社名</div>
            <div>{{ $contact->company ?: '—' }}</div>

            <div class="label">メールアドレス</div>
            <div>{{ $contact->email }}</div>

            <div class="label">電話番号</div>
            <div>{{ $contact->phone ?: '—' }}</div>

            <div class="label">お問い合わせ種別</div>
            <div>{{ $contact->inquiry_type ?: '—' }}</div>

            <div class="label">ご相談内容</div>
            <div class="message">{{ $contact->message }}</div>
        </div>
    </div>
</div>
</body>
</html>