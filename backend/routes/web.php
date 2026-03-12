<?php

use App\Http\Controllers\Admin\ContactAdminController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\FaqAdminController;
use App\Http\Controllers\Admin\SiteSettingAdminController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store'])->name('login.store');
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/contacts', [ContactAdminController::class, 'index'])->name('contacts.index');
        Route::get('/contacts/{contact}', [ContactAdminController::class, 'show'])->name('contacts.show');
        Route::patch('/contacts/{contact}/status', [ContactAdminController::class, 'updateStatus'])->name('contacts.updateStatus');

        Route::get('/site-settings/logo', [SiteSettingAdminController::class, 'editLogo'])->name('site-settings.logo.edit');
        Route::post('/site-settings/logo', [SiteSettingAdminController::class, 'updateLogo'])->name('site-settings.logo.update');

        Route::get('/faqs', [FaqAdminController::class, 'index'])->name('faqs.index');
        Route::get('/faqs/create', [FaqAdminController::class, 'create'])->name('faqs.create');
        Route::post('/faqs', [FaqAdminController::class, 'store'])->name('faqs.store');
        Route::get('/faqs/{faq}/edit', [FaqAdminController::class, 'edit'])->name('faqs.edit');
        Route::put('/faqs/{faq}', [FaqAdminController::class, 'update'])->name('faqs.update');
        Route::delete('/faqs/{faq}', [FaqAdminController::class, 'destroy'])->name('faqs.destroy');
    });
});