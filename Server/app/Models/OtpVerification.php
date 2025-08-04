<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class OtpVerification
 * 
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $otp
 * @property Carbon|null $created_at
 * @property string $password
 *
 * @package App\Models
 */
class OtpVerification extends Model
{
	protected $table = 'otp_verification';
	public $timestamps = false;

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'name',
		'email',
		'otp',
		'password'
	];
}
