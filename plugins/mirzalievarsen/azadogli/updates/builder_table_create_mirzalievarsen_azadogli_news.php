<?php namespace MirzalievArsen\Azadogli\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateMirzalievarsenAzadogliNews extends Migration
{
    public function up()
    {
        Schema::create('mirzalievarsen_azadogli_news', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title', 500);
            $table->text('content');
            $table->timestamp('created_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('mirzalievarsen_azadogli_news');
    }
}
