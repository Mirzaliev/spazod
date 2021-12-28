<?php namespace MirzalievArsen\Azadogli\Models;

use Model;

/**
 * Model
 */
class ArticleCategory extends Model
{
    use \Winter\Storm\Database\Traits\Validation;

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    protected $fillable = ['name'];
    /**
     * @var string The database table used by the model.
     */
    public $table = 'mirzalievarsen_azadogli_article_categories';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $hasMany = [
        'article' => [
            Article::class,
            'key' => 'article_category_id'
        ]
    ];
}
