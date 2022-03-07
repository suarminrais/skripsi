<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'name',
        'type',
        'location',
        'latitude',
        'longitude',
        'periode',
        'interest',
        'funding',
        'status',
        'user_id',
    ];

    protected $with = [
        'image',
    ];

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
