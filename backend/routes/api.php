<?php

use App\Http\Controllers\Api\ContactController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PublicSiteController;

Route::post('/contacts', [ContactController::class, 'store']);
Route::get('/admin/contacts', [ContactController::class, 'index']);
Route::get('/admin/contacts/{contact}', [ContactController::class, 'show']);
Route::patch('/admin/contacts/{contact}/status', [ContactController::class, 'updateStatus']);

Route::get('/public/site-settings', [PublicSiteController::class, 'siteSettings']);
Route::get('/public/faqs', [PublicSiteController::class, 'faqs']);