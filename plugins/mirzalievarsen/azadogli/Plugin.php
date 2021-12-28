<?php namespace MirzalievArsen\Azadogli;

use MirzalievArsen\Azadogli\Components\Article;
use System\Classes\PluginBase;


class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            Article::class => 'Article',
        ];
    }

    public function registerSettings()
    {
    }


}
