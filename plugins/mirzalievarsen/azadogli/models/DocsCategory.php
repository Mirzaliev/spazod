<?php namespace MirzalievArsen\Azadogli\Models;

use Model;

/**
 * Model
 */
class DocsCategory extends Model
{
    use \Winter\Storm\Database\Traits\Validation;

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    protected $fillable = ['name', 'slug'];
    /**
     * @var string The database table used by the model.
     */
    public $table = 'mirzalievarsen_azadogli_docs_categories';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $hasMany = [
        'documents' => [
            Document::class,
            'key' => 'category_id'
        ]
    ];
}
