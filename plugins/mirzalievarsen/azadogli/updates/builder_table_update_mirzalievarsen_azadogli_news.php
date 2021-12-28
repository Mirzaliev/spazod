<?php namespace MirzalievArsen\Azadogli\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableUpdateMirzalievarsenAzadogliNews extends Migration
{
    public function up()
    {
        Schema::table('mirzalievarsen_azadogli_news', function($table)
        {
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('mirzalievarsen_azadogli_news', function($table)
        {
            $table->dropColumn('updated_at');
        });
    }
}
