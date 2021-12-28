<?php namespace Mirzalievarsen\Content\Models;

use Model;
use System\Models\File;

/**
 * Model
 */
class News extends Model
{
    use \Winter\Storm\Database\Traits\Validation;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'mirzalievarsen_content_news';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $attachOne = [
        'preview' => File::class
    ];

    public $belongsTo = [
        'category' => [
            Categories::class,
            'table' => 'mirzalievarsen_content_categories',
            'key' => 'category_id',
            'order' => 'name'
        ]
    ];


}
