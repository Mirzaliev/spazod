<?php namespace MirzalievArsen\Azadogli\Models;

use MirzalievArsen\Azadogli\Classes\Helpers;
use Model;
use System\Models\File;

/**
 * Model
 */
class Document extends Model
{
    use \Winter\Storm\Database\Traits\Validation;



    /**
     * @var string The database table used by the model.
     */
    public $table = 'mirzalievarsen_azadogli_docs';

    /**
     * @var array Validation rules
     */
    public $rules = [
        'file'                 => 'required',
    ];

    public $attachOne = [
        'file' => File::class
    ];

    public $customMessages = [
        'file.required'    => 'Похоже вы забыли добавить файл!',
    ];

    public function getFormatingDateAttribute() {
        return Helpers::getFormatingData($this->created_at);
    }

    public function getFileSizeAttribute() {
        //return Helpers::formatSizeUnits($this->file->file_size);
    }

    public function afterCreate()
    {
        if(empty($this->custom_name)){
            $this->custom_name = '60222';
            $this->save();
        }
    }


    public $belongsTo = [
        'category' => [
            DocsCategory::class,
            'table' => 'mirzalievarsen_azadogli_docs_categories',
            'key' => 'category_id',
        ]
    ];


}
