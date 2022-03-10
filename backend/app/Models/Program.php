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

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function invests()
    {
        return $this->hasMany(Invest::class);
    }

    public function getFundedAttribute()
    {
        return $this->invests()->where('status', true)->sum('total');
    }

    protected $appends = [
        'funded'
    ];
}
