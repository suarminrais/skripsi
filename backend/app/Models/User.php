<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'type',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $with = [
        'image',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function programs()
    {
        return $this->hasMany(Program::class);
    }

    public function invests()
    {
        return $this->hasMany(Invest::class);
    }

    public function getActiveProgramAttribute()
    {
        if ($this->type === 'petani') return $this->programs()->where('status', '!=', 1)->where('status', '!=', 4)->where('status', '!=', 5)->count();
        if ($this->type === 'pemodal') return $this->invests()->whereHas('program', function (Builder $query) {
            $query->where('status', '!=', 1);
            $query->where('status', '!=', 4);
            $query->where('status', '!=', 5);
        })->count();
        return 0;
    }

    public function getDoneProgramAttribute()
    {
        if ($this->type === 'petani') return $this->programs()->where('status', '==', 4)->count();
        if ($this->type === 'pemodal') return $this->invests()->whereHas('program', function (Builder $query) {
            $query->where('status', '==', 4);
        })->count();
        return 0;
    }

    public function getTotalInvestAttribute()
    {
        if ($this->type === 'pemodal') return $this->invests()->where('status', true)->sum('total');
        return 0;
    }

    public function getTotalBalanceAttribute()
    {
        if ($this->type === 'petani') return $this->programs()->whereHas('invests', function (Builder $query) {
            $query->where('status', true);
        })->leftJoin('invests', 'programs.id', '=', 'invests.program_id')->sum('total');
        if ($this->type === 'pemodal') {
            $invest = $this->invests()->where('invests.status', true)->whereHas('program', function (Builder $query) {
                $query->where('status', 4);
            })->leftJoin('programs', 'programs.id', '=', 'invests.program_id');
            return ($invest->sum('invests.total') * $invest->sum('programs.interest') * 0.01) + $invest->sum('invests.total');
        }
        return 0;
    }

    protected $appends = [
        'total_balance',
        'total_invest',
        'done_program',
        'active_program',
    ];
}
