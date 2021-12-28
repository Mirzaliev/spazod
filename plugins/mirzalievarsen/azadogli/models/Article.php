<?php namespace MirzalievArsen\Azadogli\Models;

use MirzalievArsen\Azadogli\Classes\Helpers;
use Model;
use System\Models\File;
/**
 * Model
 */
class Article extends Model
{
    use \Winter\Storm\Database\Traits\Validation;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'mirzalievarsen_azadogli_article';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $attachOne = [
        'image' => File::class
    ];

    public function getFormatingDateAttribute() {
        return Helpers::getFormatingData($this->created_at);
    }

    public function afterSave()
    {
        $file = new File();
        $this->image()->add($file->fromUrl('https://i.picsum.photos/id/727/920/920.jpg?hmac=pwwXIUL2Pn6U6EBGbBgSEpjt7048soUxu_5AVvbWldE'));
    }

    public $belongsTo = [
        'category' => [
            ArticleCategory::class,
            'table' => 'mirzalievarsen_azadogli_article_categories',
            'key' => 'article_category_id',
        ]
    ];
}
