<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Order
 * 
 * @property int $id
 * @property int|null $user_id
 * @property int|null $address_id
 * @property float|null $total
 * @property string|null $status
 * @property Carbon $created_at
 * @property string $payment_method
 * 
 * @property User|null $user
 * @property Address|null $address
 * @property Collection|OrderItem[] $order_items
 *
 * @package App\Models
 */
class Order extends Model
{
	protected $table = 'orders';
	public $timestamps = false;

	protected $casts = [
		'user_id' => 'int',
		'address_id' => 'int',
		'total' => 'float'
	];

	protected $fillable = [
		'user_id',
		'address_id',
		'total',
		'status',
		'payment_method'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function address()
	{
		return $this->belongsTo(Address::class);
	}

	public function order_items()
	{
		return $this->hasMany(OrderItem::class);
	}
}
