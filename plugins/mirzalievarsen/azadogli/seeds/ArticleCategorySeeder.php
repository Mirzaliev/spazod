<?php

namespace MirzalievArsen\Azadogli\Seeds;


use MirzalievArsen\Azadogli\Models\Article;
use MirzalievArsen\Azadogli\Models\ArticleCategory;

use System\Models\File;
use Winter\Storm\Database\Updates\Seeder;

class ArticleCategorySeeder extends Seeder
{
  public function run(){
      ArticleCategory::insert([
          ['name' => 'Общество'],
          ['name' => 'Район'],
          ['name' => 'Экономика и финансы'],
          ['name' => 'Деятельность'],
          ['name' => 'Органы местного самоуправления'],
          ['name' => 'Энергетика, транспорт,связь и ЖКХ'],
          ['name' => 'Градостроительная деятельность'],
          ['name' => 'Нормотворчество'],
          ['name' => 'Муниципальные услуги'],
          ['name' => 'Обращения граждан'],
          ['name' => 'Противодействие коррупции'],
          ['name' => 'Информация отделов'],
          ['name' => 'Новости, объявления, события'],
          ['name' => 'Страница безопасности'],
          ['name' => 'Муниципальные учреждения и предприятия'],
          ['name' => 'Государственные учреждения'],
          ['name' => 'Награды'],
          ['name' => 'Правила благоустройства'],
          ['name' => 'Конкурсы'],
          ['name' => 'Подключение (техническое присоединение) к сетям инженерно-технического обеспечения'],
          ['name' => 'Административная комиссия'],
          ['name' => 'Год памяти и славы'],
          ['name' => 'COVID-19'],
          ['name' => 'Профилактика правонарушений'],
      ]);
  }
}
