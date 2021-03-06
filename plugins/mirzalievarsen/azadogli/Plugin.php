<?php namespace MirzalievArsen\Azadogli;

use MirzalievArsen\Azadogli\Components\Article;
use Mirzalievarsen\Azadogli\Components\Documents;
use Mirzalievarsen\Azadogli\Components\Feedback;
use System\Classes\PluginBase;


class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            Article::class => 'Article',
            Feedback::class => 'Feedback',
            Documents::class => 'Documents',
        ];
    }

    public function registerSettings()
    {

    }


}
