<?php namespace MirzalievArsen\Azadogli\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateMirzalievarsenAzadogliArticleCategories extends Migration
{
    public function up()
    {
        Schema::create('mirzalievarsen_azadogli_article_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name', 500);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('mirzalievarsen_azadogli_article_categories');
    }
}
