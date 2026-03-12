<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use App\Models\SiteSetting;

class PublicSiteController extends Controller
{
    public function siteSettings()
    {
        $settings = SiteSetting::whereIn('key', [
            'site_logo_path',
            'site_logo_alt',
        ])->pluck('value', 'key');

        $logoPath = $settings->get('site_logo_path');
        $logoAlt = $settings->get('site_logo_alt', 'Fuji of Innovation ロゴ');

        return response()->json([
            'logo_url' => $logoPath ? asset('storage/' . $logoPath) : null,
            'logo_alt' => $logoAlt,
        ]);
    }

    public function faqs()
    {
        $faqs = Faq::where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get(['id', 'question', 'answer']);

        return response()->json($faqs);
    }
}