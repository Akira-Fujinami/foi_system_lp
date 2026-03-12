<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactAutoReplyMail;
use App\Mail\ContactReceivedAdminMail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'company' => ['nullable', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'inquiry_type' => ['nullable', 'string', 'max:100'],
            'message' => ['required', 'string'],
        ]);

        $contact = Contact::create($validated);

        Mail::to('akira.fujinami0302@gmail.com')
            ->send(new ContactReceivedAdminMail($contact));

        Mail::to($contact->email)
            ->send(new ContactAutoReplyMail($contact));

        return response()->json([
            'message' => 'お問い合わせを受け付けました。',
            'data' => $contact,
        ], 201);
    }

    public function index()
    {
        $contacts = Contact::latest()->paginate(20);

        return response()->json($contacts);
    }

    public function show(Contact $contact)
    {
        return response()->json($contact);
    }

    public function updateStatus(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'status' => ['required', 'in:new,in_progress,done'],
        ]);

        $contact->update([
            'status' => $validated['status'],
        ]);

        return response()->json([
            'message' => 'ステータスを更新しました。',
            'data' => $contact,
        ]);
    }
}