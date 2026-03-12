<p>新しいお問い合わせがありました。</p>

<p><strong>お名前:</strong> {{ $contact->name }}</p>
<p><strong>会社名:</strong> {{ $contact->company ?? '—' }}</p>
<p><strong>メール:</strong> {{ $contact->email }}</p>
<p><strong>電話番号:</strong> {{ $contact->phone ?? '—' }}</p>
<p><strong>種別:</strong> {{ $contact->inquiry_type ?? '—' }}</p>

<p><strong>内容:</strong></p>
<p>{!! nl2br(e($contact->message)) !!}</p>