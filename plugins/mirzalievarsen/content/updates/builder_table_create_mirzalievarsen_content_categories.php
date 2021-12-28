<?php namespace Mirzalievarsen\Content\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateMirzalievarsenContentCategories extends Migration
{
    public function up()
    {
        Schema::create('mirzalievarsen_content_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->string('slug');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('mirzalievarsen_content_categories');
    }
}
