<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 * 
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string|null $phone
 * @property string|null $role
 * @property string|null $status
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string $user_profile
 * @property string|null $gender
 * @property string|null $email_token
 * @property Carbon|null $token_expiry
 * 
 * @property Collection|Address[] $addresses
 * @property Collection|Notification[] $notifications
 * @property Collection|Order[] $orders
 * @property Collection|Review[] $reviews
 *
 * @package App\Models
 */
class User extends Model
{
	protected $table = 'users';

	protected $casts = [
		'token_expiry' => 'datetime'
	];

	protected $hidden = [
		'password',
		'email_token'
	];

	protected $fillable = [
		'name',
		'email',
		'password',
		'phone',
		'role',
		'status',
		'user_profile',
		'gender',
		'email_token',
		'token_expiry'
	];

	public function addresses()
	{
		return $this->hasMany(Address::class);
	}

	public function notifications()
	{
		return $this->hasMany(Notification::class);
	}

	public function orders()
	{
		return $this->hasMany(Order::class);
	}

	public function reviews()
	{
		return $this->hasMany(Review::class);
	}
}
