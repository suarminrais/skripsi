<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'name',
    ];

    protected $with = [
        'image',
    ];

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
