<?php namespace MirzalievArsen\Azadogli\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateMirzalievarsenAzadogliDocs extends Migration
{
    public function up()
    {
        Schema::create('mirzalievarsen_azadogli_docs', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('custom_name', 1000);
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->integer('category_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('mirzalievarsen_azadogli_docs');
    }
}
