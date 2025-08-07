<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Product
 * 
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property float|null $price
 * @property int|null $subcategory_id
 * @property Carbon|null $created_at
 * @property int|null $brand_id
 * @property int|null $category_id
 * @property int $quantity
 * 
 * @property Subcategory|null $subcategory
 * @property Brand|null $brand
 * @property Category|null $category
 * @property Collection|ProductImage[] $product_images
 * @property Collection|Review[] $reviews
 *
 * @package App\Models
 */
class Product extends Model
{
	protected $table = 'products';
	public $timestamps = false;

	protected $casts = [
		'price' => 'float',
		'subcategory_id' => 'int',
		'brand_id' => 'int',
		'category_id' => 'int',
		'quantity' => 'int'
	];

	protected $fillable = [
		'name',
		'description',
		'price',
		'subcategory_id',
		'brand_id',
		'category_id',
		'quantity',
		
	];

	public function subcategory()
	{
		return $this->belongsTo(Subcategory::class);
	}

	public function brand()
	{
		return $this->belongsTo(Brand::class);
	}

	public function category()
	{
		return $this->belongsTo(Category::class);
	}

	public function product_images()
	{
		return $this->hasMany(ProductImage::class);
	}

	public function reviews()
	{
		return $this->hasMany(Review::class);
	}
}
