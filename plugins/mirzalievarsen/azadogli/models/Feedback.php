<?php namespace MirzalievArsen\Azadogli\Models;

use Model;

/**
 * Model
 */
class Feedback extends Model
{
    use \Winter\Storm\Database\Traits\Validation;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'mirzalievarsen_azadogli_feedback';

    public $fillable = [
      'surname', 'name', 'patronymic', 'phone', 'email', 'message'
    ];
    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
