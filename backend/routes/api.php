<?php

use App\Http\Controllers\Api\ContactController;
use Illuminate\Support\Facades\Route;

Route::post('/contacts', [ContactController::class, 'store']);
Route::get('/admin/contacts', [ContactController::class, 'index']);
Route::get('/admin/contacts/{contact}', [ContactController::class, 'show']);
Route::patch('/admin/contacts/{contact}/status', [ContactController::class, 'updateStatus']);