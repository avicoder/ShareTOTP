<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'icon_image',
    ];

    public static function getList()
    {
        return self::get()->map(function($service) {
            return [
                'id' => $service->id,
                'name' => $service->name,
                'icon' => $service->icon_image,
            ];
        });
    }
}
