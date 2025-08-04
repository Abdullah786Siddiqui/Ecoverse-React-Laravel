<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Subcategory
 * 
 * @property int $id
 * @property string $name
 * @property int|null $category_id
 * 
 * @property Category|null $category
 * @property Collection|Product[] $products
 *
 * @package App\Models
 */
class Subcategory extends Model
{
	protected $table = 'subcategories';
	public $timestamps = false;

	protected $casts = [
		'category_id' => 'int'
	];

	protected $fillable = [
		'name',
		'category_id'
	];

	public function category()
	{
		return $this->belongsTo(Category::class);
	}

	public function products()
	{
		return $this->hasMany(Product::class);
	}
}
