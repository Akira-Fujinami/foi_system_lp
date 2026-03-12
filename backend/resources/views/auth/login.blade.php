<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>管理者ログイン</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            background: #f8fafc;
            font-family: Arial, sans-serif;
            color: #0f172a;
        }
        .card {
            width: 100%;
            max-width: 420px;
            background: #fff;
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
        }
        h1 {
            margin: 0 0 24px;
            font-size: 28px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 700;
            font-size: 14px;
        }
        input {
            width: 100%;
            box-sizing: border-box;
            padding: 12px 14px;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            margin-bottom: 16px;
        }
        button {
            width: 100%;
            padding: 12px 14px;
            border: none;
            border-radius: 10px;
            background: #0f172a;
            color: white;
            font-weight: 700;
            cursor: pointer;
        }
        .error {
            background: #fee2e2;
            color: #991b1b;
            padding: 12px;
            border-radius: 10px;
            margin-bottom: 16px;
            font-size: 14px;
        }
        .remember {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
            font-size: 14px;
        }
    </style>
</head>
<body>
<div class="card">
    <h1>管理者ログイン</h1>

    @if ($errors->any())
        <div class="error">{{ $errors->first() }}</div>
    @endif

    <form method="POST" action="{{ route('login.store') }}">
        @csrf

        <label for="email">メールアドレス</label>
        <input
            id="email"
            type="email"
            name="email"
            value="{{ old('email') }}"
            required
            autofocus
        >

        <label for="password">パスワード</label>
        <input
            id="password"
            type="password"
            name="password"
            required
        >

        <button type="submit">ログイン</button>
    </form>
</div>
</body>
</html>