<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function getSubcategory()
    {
        $subCategories = DB::table('subcategories')->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Subcategories fetched successfully',
            'data' => $subCategories
        ], 200);
    }

    public function getProducts(int $id)
    {
        $products = DB::table('products')
            ->distinct()
            ->join('product_images', 'product_images.product_id', '=', 'products.id')
            ->join('brand', 'brand.id', '=', 'products.brand_id')
            ->where('products.subcategory_id', $id)
            ->orderBy('products.id', 'DESC')
            ->select(
                'products.id as productid',
                'products.name',
                'products.description',
                'products.price',
                'brand.name as brand',
                'product_images.image_url'
            )
            ->get();


        return response()->json([
            'status' => 'success',
            'message' => 'Products fetched successfully',
            'data' => $products
        ], 200);
    }


    public function getbrands(int $id)
    {
        $brands = DB::table('products')
            ->join('brand', 'brand.id', '=', 'products.brand_id')
            ->where('products.subcategory_id', $id)
            ->select('brand.id as brand_id', 'brand.name', 'products.subcategory_id')
            ->distinct()
            ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'brands fetched successfully',
            'data' => $brands
        ], 200);
    }

    public function getAllbrands (int $id){
        // $allBrands = DB::table('brand')->where('brand.id','=','')
    }
}
