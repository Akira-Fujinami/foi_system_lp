<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>FAQ一覧</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body { font-family: Arial, sans-serif; background:#f8fafc; padding:32px; }
        .card { max-width:1100px; margin:0 auto; background:#fff; border-radius:16px; padding:24px; box-shadow:0 8px 30px rgba(0,0,0,.08); }
        table { width:100%; border-collapse:collapse; }
        th, td { padding:12px; border-bottom:1px solid #e2e8f0; text-align:left; vertical-align:top; }
        a, button { font-size:14px; }
        .success { background:#dcfce7; padding:12px; border-radius:10px; margin-bottom:16px; }
        .topbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; }
    </style>
</head>
<body>
<div class="card">
    <div class="topbar">
        <h1>FAQ一覧</h1>
        <a href="{{ route('admin.faqs.create') }}">＋ FAQ追加</a>
    </div>

    @if(session('success'))
        <div class="success">{{ session('success') }}</div>
    @endif

    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>質問</th>
            <th>並び順</th>
            <th>公開</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        @forelse($faqs as $faq)
            <tr>
                <td>{{ $faq->id }}</td>
                <td>{{ $faq->question }}</td>
                <td>{{ $faq->sort_order }}</td>
                <td>{{ $faq->is_active ? '公開' : '非公開' }}</td>
                <td>
                    <a href="{{ route('admin.faqs.edit', $faq) }}">編集</a>
                    <form action="{{ route('admin.faqs.destroy', $faq) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" onclick="return confirm('削除しますか？')">削除</button>
                    </form>
                </td>
            </tr>
        @empty
            <tr>
                <td colspan="5">FAQはまだありません。</td>
            </tr>
        @endforelse
        </tbody>
    </table>
</div>
</body>
</html>