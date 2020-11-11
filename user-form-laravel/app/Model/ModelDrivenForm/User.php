<?php

namespace App\Model\ModelDrivenForm;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'dob',
        'gender',
        'district',
        'email',
        'number',
        'password',
        'about',
        'qualification',
        'profile_image',
    ];
}
