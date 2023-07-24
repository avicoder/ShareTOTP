<?php

namespace App\Utils;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

class ImageHelper
{
    public static function generateName(UploadedFile $file): string
    {
        $name = Str::uuid();
        $extension = $file->extension();

        return "$name.$extension";
    }
}
