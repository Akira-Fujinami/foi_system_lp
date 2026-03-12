<p>{{ $contact->name }} 様</p>

<p>この度はお問い合わせいただき、ありがとうございます。</p>
<p>以下の内容で受け付けました。</p>

<p><strong>内容:</strong></p>
<p>{!! nl2br(e($contact->message)) !!}</p>

<p>内容を確認のうえ、担当よりご連絡いたします。</p>

<p>
Fuji of Innovation<br>
no-reply@fujiofinnovation.com
</p>