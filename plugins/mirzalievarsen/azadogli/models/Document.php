<?php namespace MirzalievArsen\Azadogli\Models;

use MirzalievArsen\Azadogli\Classes\Helpers;
use Model;
use System\Models\File;
use Winter\Storm\Support\Facades\Flash;

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


    public $attachOne = [
        'file' => File::class
    ];

    public $fillable = [
        'custom_name'
    ];

    public $rules = [
        'file' => 'required',
   ];
    public $customMessages = [
        'file.required'    => 'Похоже вы забыли добавить файл!',
    ];

    public function getFormatingDateAttribute() {
        return Helpers::getFormatingData($this->created_at);
    }

    public function getFileSizeAttribute() {
        return Helpers::formatSizeUnits($this->file->file_size);
    }

    public function afterFetch()
    {
        if(empty($this->custom_name)){
            $this->update([
                'custom_name' => $this->file->file_size
            ]);
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
