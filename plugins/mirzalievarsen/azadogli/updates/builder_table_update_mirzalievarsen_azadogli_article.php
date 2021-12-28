<?php namespace MirzalievArsen\Azadogli\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableUpdateMirzalievarsenAzadogliArticle extends Migration
{
    public function up()
    {
        Schema::rename('mirzalievarsen_azadogli_news', 'mirzalievarsen_azadogli_article');
        Schema::table('mirzalievarsen_azadogli_article', function($table)
        {
            $table->integer('article_category_id')->nullable()->unsigned();
        });
    }
    
    public function down()
    {
        Schema::rename('mirzalievarsen_azadogli_article', 'mirzalievarsen_azadogli_news');
        Schema::table('mirzalievarsen_azadogli_news', function($table)
        {
            $table->dropColumn('article_category_id');
        });
    }
}
