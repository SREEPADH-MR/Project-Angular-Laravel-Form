<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Custom Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('ModelDrivenForm')->group(function () {

    Route::post('create', 'ModelDrivenFormController@create');
    Route::get('read/{userId}', 'ModelDrivenFormController@read');
});
