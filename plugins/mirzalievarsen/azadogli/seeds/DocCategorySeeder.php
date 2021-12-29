<?php

namespace MirzalievArsen\Azadogli\Seeds;

use MirzalievArsen\Azadogli\Models\DocsCategory;
use Winter\Storm\Database\Updates\Seeder;

class DocCategorySeeder extends Seeder
{
    public function run(){
        DocsCategory::insert([
            [
                'name' => 'Общие',
                'slug' => 'obshie'
            ],
            [
                'name' => 'Устав поселения',
                'slug' => 'ustav-poseleniya'
            ],
            [
                'name' => 'Решения Собрания',
                'slug' => 'resheniya-sobraniya'
            ],
            [
                'name' => 'Административные регламенты',
                'slug' => 'administrativnye-reglamenty'
            ],
            [
                'name' => 'Распоряжения',
                'slug' => 'rasporyazheniya'
            ],
            [
                'name' => 'Постановления',
                'slug' => 'postanovleniya'
            ],
            [
                'name' => 'Программы',
                'slug' => 'programmy'
            ],
            [
                'name' => 'Публичные слушания',
                'slug' => 'publichnye-slushaniya'
            ],
            [
                'name' => 'Проекты документов',
                'slug' => 'proekty-dokumentov'
            ],
            [
                'name' => 'Порядок обжалования НПА',
                'slug' => 'poryadok-obzhalovaniya-npa'
            ],
            [
                'name' => 'Соглашения',
                'slug' => 'soglasheniya'
            ]
        ]);
    }
}
