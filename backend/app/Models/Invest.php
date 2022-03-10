<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invest extends Model
{
    use HasFactory;

    protected $fillable = [
        'program_id',
        'status',
        'user_id',
        'total',
    ];

    protected $with = [
        'image',
        'program',
        'user',
    ];

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function program()
    {
        return $this->belongsTo(Program::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
