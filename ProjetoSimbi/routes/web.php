<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RuanetController;

Route::get('/dados', [RuanetController::class, 'index']);
