<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>ロゴ設定</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body { font-family: Arial, sans-serif; background:#f8fafc; padding:32px; }
        .card { max-width:900px; margin:0 auto; background:#fff; border-radius:16px; padding:24px; box-shadow:0 8px 30px rgba(0,0,0,.08); }
        input, button { padding:12px; border-radius:10px; border:1px solid #cbd5e1; width:100%; box-sizing:border-box; }
        button { background:#0f172a; color:#fff; border:none; cursor:pointer; width:auto; padding:12px 20px; }
        .success { background:#dcfce7; padding:12px; border-radius:10px; margin-bottom:16px; }
        img { max-height:100px; margin-bottom:16px; }
    </style>
</head>
<body>
<div class="card">
    <h1>ロゴ設定</h1>

    @if(session('success'))
        <div class="success">{{ session('success') }}</div>
    @endif

    @if($logoPath)
        <p>現在のロゴ</p>
        <img src="{{ asset('storage/' . $logoPath) }}" alt="{{ $logoAlt }}">
    @endif

    <form method="POST" action="{{ route('admin.site-settings.logo.update') }}" enctype="multipart/form-data">
        @csrf

        <div style="margin-bottom:16px;">
            <label>ロゴ画像</label>
            <input type="file" name="logo" accept="image/*">
        </div>

        <div style="margin-bottom:16px;">
            <label>altテキスト</label>
            <input type="text" name="logo_alt" value="{{ old('logo_alt', $logoAlt) }}">
        </div>

        <button type="submit">更新する</button>
    </form>
</div>
</body>
</html>