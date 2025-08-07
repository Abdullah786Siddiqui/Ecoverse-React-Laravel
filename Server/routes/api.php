<?php

use App\Http\Controllers\DetailProductController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//get All Product by Subcategory ID
Route::get('/products/{id}',[ProductController::class,'getProducts']);
//get All Brands by Subcategory ID
Route::get('/brands/{id}',[ProductController::class,'getbrands']);
//get Detail Product by Product ID
Route::get('/detailProduct/{id}',[ProductController::class , 'getdetailProduct']);

//get All Products
Route::get('/AllProducts',[ProductController::class,'allProducts']);
//get All Brands
Route::get('/Allbrands',[ProductController::class,'allBrands']);
//get All Category
Route::get('/AllCategory',[ProductController::class,'allCategory']);
//get All SubCategory
Route::get('/Allsubcategory',[ProductController::class,'getSubcategory']);

// Add Product
Route::post('/addProduct',[ProductController::class,'addProduct']);


