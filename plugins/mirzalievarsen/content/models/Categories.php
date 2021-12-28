<?php namespace Mirzalievarsen\Content\Models;

use Model;

/**
 * Model
 */
class Categories extends Model
{
    use \Winter\Storm\Database\Traits\Validation;

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'mirzalievarsen_content_categories';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $hasMany = [
        'news' => [
            News::class,
            'key' => 'category_id'
        ]
    ];
}
