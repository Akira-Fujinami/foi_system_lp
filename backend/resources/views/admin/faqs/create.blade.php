<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>FAQ追加</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body { font-family: Arial, sans-serif; background:#f8fafc; padding:32px; }
        .card { max-width:900px; margin:0 auto; background:#fff; border-radius:16px; padding:24px; box-shadow:0 8px 30px rgba(0,0,0,.08); }
        input, textarea, button { width:100%; padding:12px; border-radius:10px; border:1px solid #cbd5e1; box-sizing:border-box; }
        button { background:#0f172a; color:#fff; border:none; cursor:pointer; }
    </style>
</head>
<body>
<div class="card">
    <h1>FAQ追加</h1>

    <form method="POST" action="{{ route('admin.faqs.store') }}">
        @csrf

        <div style="margin-bottom:16px;">
            <label>質問</label>
            <input type="text" name="question" value="{{ old('question') }}" required>
        </div>

        <div style="margin-bottom:16px;">
            <label>回答</label>
            <textarea name="answer" rows="6" required>{{ old('answer') }}</textarea>
        </div>

        <div style="margin-bottom:16px;">
            <label>並び順</label>
            <input type="number" name="sort_order" value="{{ old('sort_order', 0) }}">
        </div>

        <div style="margin-bottom:16px;">
            <label>
                <input type="checkbox" name="is_active" value="1" checked>
                公開する
            </label>
        </div>

        <button type="submit">保存する</button>
    </form>
</div>
</body>
</html>