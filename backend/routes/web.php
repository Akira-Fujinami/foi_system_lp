<?php

use App\Http\Controllers\Admin\ContactAdminController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

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
    });
});