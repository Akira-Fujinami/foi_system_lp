<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactAdminController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::query()->latest();

        if ($request->filled('status')) {
            $query->where('status', $request->string('status'));
        }

        if ($request->filled('keyword')) {
            $keyword = $request->string('keyword');
            $query->where(function ($q) use ($keyword) {
                $q->where('name', 'like', "%{$keyword}%")
                  ->orWhere('company', 'like', "%{$keyword}%")
                  ->orWhere('email', 'like', "%{$keyword}%")
                  ->orWhere('subject', 'like', "%{$keyword}%")
                  ->orWhere('message', 'like', "%{$keyword}%");
            });
        }

        $contacts = $query->paginate(20)->withQueryString();

        return view('admin.contacts.index', compact('contacts'));
    }

    public function show(Contact $contact)
    {
        return view('admin.contacts.show', compact('contact'));
    }

    public function updateStatus(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'status' => ['required', 'in:new,in_progress,done'],
        ]);

        $contact->update([
            'status' => $validated['status'],
        ]);

        return redirect()
            ->route('admin.contacts.show', $contact)
            ->with('success', 'ステータスを更新しました。');
    }
}