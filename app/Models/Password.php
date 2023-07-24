<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Password extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'name',
        'icon_image',
        'secret',
        'digits',
        'algorithm',
        'period',
    ];

    protected $appends = [
        'icon',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function getIconAttribute(): string
    {
        if ($this->service) {
            return $this->service->icon_image;
        }

        return '';
    }
}
