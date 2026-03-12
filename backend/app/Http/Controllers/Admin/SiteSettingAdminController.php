<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SiteSettingAdminController extends Controller
{
    public function editLogo()
    {
        $logoPath = SiteSetting::where('key', 'site_logo_path')->value('value');
        $logoAlt = SiteSetting::where('key', 'site_logo_alt')->value('value');

        return view('admin.site_settings.logo', compact('logoPath', 'logoAlt'));
    }

    public function updateLogo(Request $request)
    {
        // $validated = $request->validate([
        //     'logo' => ['nullable', 'image', 'max:2048'],
        //     'logo_alt' => ['nullable', 'string', 'max:255'],
        // ]);

        if ($request->hasFile('logo')) {
            $oldPath = SiteSetting::where('key', 'site_logo_path')->value('value');

            $path = $request->file('logo')->store('logos', 'public');

            SiteSetting::updateOrCreate(
                ['key' => 'site_logo_path'],
                ['value' => $path]
            );

            if ($oldPath && Storage::disk('public')->exists($oldPath)) {
                Storage::disk('public')->delete($oldPath);
            }
        }

        SiteSetting::updateOrCreate(
            ['key' => 'site_logo_alt'],
            ['value' => $validated['logo_alt'] ?? 'Fuji of Innovation ロゴ']
        );

        return redirect()
            ->route('admin.site-settings.logo.edit')
            ->with('success', 'ロゴを更新しました。');
    }
}