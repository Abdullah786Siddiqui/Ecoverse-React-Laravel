<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImage;
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

    public function allProducts()
    {
        $AllProducts = DB::table('products')
            ->distinct()
            ->join('product_images', 'product_images.product_id', '=', 'products.id')
            ->join('brand', 'brand.id', '=', 'products.brand_id')
            ->orderBy('products.id', 'DESC')
            ->select(
                'products.id as productid',
                'products.name',
                'products.quantity',
                'products.description',
                'products.price',
                'products.created_at',
                'brand.name as brand',
                'product_images.image_url'
            )
            ->get();


        return response()->json([
            'status' => 'success',
            'message' => 'All Products fetched successfully',
            'data' => $AllProducts
        ], 200);
    }

    public function getdetailProduct(int $id)
    {
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


    public function allBrands()
    {
        $Allbrands = DB::table('brand')
            ->select('brand.id as brand_id', 'brand.name as name')
            ->distinct()
            ->get();

        return response()->json([
            'status' => 'success',
            'message' => ' All brands fetched successfully',
            'data' => $Allbrands
        ], 200);
    }

    public function allCategory()
    {
        $AllCategory = DB::table('categories')
            ->select('categories.id', 'categories.name')
            ->get();

        return response()->json([
            'status' => 'success',
            'message' => ' All Category fetched successfully',
            'data' => $AllCategory
        ], 200);
    }




public function addProduct(Request $request)
{
    try {
        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
            'category_id' => 'required|integer',
            'subcategory_id' => 'required|integer',
            'brand_id' => 'required|integer',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        // 🖼 Upload Image
        $imagePath = $request->file('image')->store('products', 'public');

        // 📦 Create Product using Eloquent
        $product = Product::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'price' => $validated['price'],
            'quantity' => $validated['quantity'],
            'brand_id' => $validated['brand_id'],
            'category_id' => $validated['category_id'],
            'subcategory_id' => $validated['subcategory_id'],
        ]);

        // 🖼 Save in product_images table
        ProductImage::create([
            'product_id' => $product->id,
            'image_url' => $imagePath,
        ]);

        return response()->json([
            'message' => 'Product added successfully',
            'product_id' => $product->id,
        ]);

    } catch (\Throwable $e) {
        return response()->json([
            'error' => $e->getMessage(),
            'line' => $e->getLine(),
            'file' => $e->getFile(),
        ], 500);
    }
}

}
