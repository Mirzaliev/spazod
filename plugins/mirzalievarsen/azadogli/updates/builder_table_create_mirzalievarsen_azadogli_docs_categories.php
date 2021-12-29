<?php namespace MirzalievArsen\Azadogli\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateMirzalievarsenAzadogliDocsCategories extends Migration
{
    public function up()
    {
        Schema::create('mirzalievarsen_azadogli_docs_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name', 1000);
            $table->string('slug', 1050);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('mirzalievarsen_azadogli_docs_categories');
    }
}
