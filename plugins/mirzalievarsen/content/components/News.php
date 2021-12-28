<?php namespace Mirzalievarsen\Content\Components;

use Cms\Classes\ComponentBase;
use Mirzalievarsen\Content\Models\News as NewsModel;

class News extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'News Component',
            'description' => 'Компонент новостей'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onRun()
    {

        if($this->param('id')){
            $this->page['new'] = NewsModel::find($this->param('id'));
        }else {
            $this->page['news'] = NewsModel::all();
        }

    }
}
