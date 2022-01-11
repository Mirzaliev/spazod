<?php namespace MirzalievArsen\Azadogli\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateMirzalievarsenAzadogliFeedback extends Migration
{
    public function up()
    {
        Schema::create('mirzalievarsen_azadogli_feedback', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('surname');
            $table->string('name');
            $table->string('patronymic');
            $table->string('email');
            $table->string('phone');
            $table->text('message');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('mirzalievarsen_azadogli_feedback');
    }
}
