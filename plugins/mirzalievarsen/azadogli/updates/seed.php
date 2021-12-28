<?php

namespace MirzalievArsen\Azadogli\Updates;

use MirzalievArsen\Azadogli\Seeds\ArticleCategorySeeder;
use MirzalievArsen\Azadogli\Seeds\ArticleSeeder;
use Model;
use Winter\Storm\Database\Updates\Seeder;

class seed  extends Seeder
{
    public function run()
    {
        Model::unguard();

        $this->call(ArticleCategorySeeder::class);
        $this->call(ArticleSeeder::class);
    }
}
