<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/subcategory',[ProductController::class,'getSubcategory']);
Route::get('/products/{id}',[ProductController::class,'getProducts']);
Route::get('/brands/{id}',[ProductController::class,'getbrands']);

