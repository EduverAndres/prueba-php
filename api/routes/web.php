<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArtistController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/artists', [ArtistController::class, 'index']);
Route::post('/artists', [ArtistController::class, 'store']);
Route::apiResource('artists', ArtistController::class);

