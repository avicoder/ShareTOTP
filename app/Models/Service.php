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

    protected $appends = [
        'icon',
    ];

    public static function getList()
    {
        return self::get()->map(function($service) {
            return [
                'id' => $service->id,
                'name' => $service->name,
                'icon' => $service->icon,
            ];
        });
    }

    public function getIconAttribute()
    {
        if ($this->icon_image) {
            return $this->icon_image;
        }

        return '/images/avatar_icon.svg';
    }
}
