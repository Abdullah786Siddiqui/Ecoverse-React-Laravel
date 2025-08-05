<?php

namespace App\Http\Controllers;

use App\Models\Subcategory;
use Illuminate\Http\Request;

class homeController extends Controller
{
    public function index()
    {
        $subCategories = Subcategory::all();
        return response()->json([
            'status' => 'success',
            'message' => 'Subcategories fetched successfully',
            'data' => $subCategories
        ], 200);
    }
}
