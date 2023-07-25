<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class GeneralSettings extends Settings
{
    public string $name;
    public string $logo;

    public static function group(): string
    {
        return 'general';
    }
}
