<?php

namespace App\Http\Controllers;

use App\Settings\GeneralSettings;
use App\Utils\ImageHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function index(GeneralSettings $settings)
    {
        return Inertia::render('Settings', [
            'settings' => $settings,
        ]);
    }

    public function store(Request $request, GeneralSettings $settings)
    {
        $data = $request->validate([
            'name' => ['required'],
        ]);

        $settings->name = $data['name'];

        if ($logo = $request->file('logo_file')) {
            $filename = ImageHelper::generateName($logo);
            $settings->logo = "/logos/$filename";
            $logo->storeAs('logos', $filename, [
                'disk' => 'public',
            ]);
        }

        $settings->save();

        session()->flash('message', 'Settings updated.');

        return Redirect::route('dashboard');
    }
}
