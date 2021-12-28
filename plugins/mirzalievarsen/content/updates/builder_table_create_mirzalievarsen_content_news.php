<?php namespace Mirzalievarsen\Content\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateMirzalievarsenContentNews extends Migration
{
    public function up()
    {
        Schema::create('mirzalievarsen_content_news', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title', 350);
            $table->text('content');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->integer('category_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('mirzalievarsen_content_news');
    }
}
