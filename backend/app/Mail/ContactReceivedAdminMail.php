<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactReceivedAdminMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Contact $contact)
    {
    }

    public function build(): self
    {
        return $this
            ->subject('【お問い合わせ通知】新しいお問い合わせがありました')
            ->view('emails.contacts.admin');
    }
}