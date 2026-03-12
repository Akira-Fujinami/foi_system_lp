<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactAutoReplyMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Contact $contact)
    {
    }

    public function build(): self
    {
        return $this
            ->subject('【Fuji of Innovation】お問い合わせありがとうございます')
            ->view('emails.contacts.auto_reply');
    }
}