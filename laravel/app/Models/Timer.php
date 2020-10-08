<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Model;

class Timer extends Model
{
    public $table = 'timer';
    public $timestamps = false;
    protected $guarded = [];
    public $incrementing = false;
    protected $keyType = 'string';
    
}
