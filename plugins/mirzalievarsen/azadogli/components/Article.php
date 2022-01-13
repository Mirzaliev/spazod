<?php namespace MirzalievArsen\Azadogli\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Redirect;
use MirzalievArsen\Azadogli\Models\Article as ArticleModel;

class Article extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Article Component',
            'description' => 'Новости'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onRun() {

        if($this->page->id === 'index'){
            $this->page['articles'] = $this->getArticleForIndexPage();
        }elseif($this->page->id === 'articles' && $this->param('id')){
            $this->page['article'] = $this->getArticle($this->param('id'));
        }else{
            $this->page['articles'] = $this->getAllArticles();
        }
    }

    protected function getArticleForIndexPage() {
        return ArticleModel::orderBy('id', 'desc')->take(4)->get();
    }

    protected function getArticle($id) {
        $article = ArticleModel::findOrFail($id);
        if($article){
            return $article;
        }
        return Redirect::back();
    }

    protected function getAllArticles(){
        return ArticleModel::orderBy('created_at', 'desc')->paginate(10);
    }
}
