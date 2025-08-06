<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DetailProductController extends Controller
{
    public function getdetailProduct (int $id){
         $deailproducts = DB::table('products')
            ->distinct()
            ->join('product_images', 'product_images.product_id', '=', 'products.id')
            ->join('brand', 'brand.id', '=', 'products.brand_id')
            ->where('products.id', $id)
            ->orderBy('products.id', 'DESC')
            ->select(
                'products.id as productid',
                'products.name',
                'products.quantity',
                'products.description',
                'products.price',
                'brand.name as brand',
                'product_images.image_url'
            )
            ->get();


        return response()->json([
            'status' => 'success',
            'message' => 'Detail Products fetched successfully',
            'data' => $deailproducts
        ], 200);
    }
}
