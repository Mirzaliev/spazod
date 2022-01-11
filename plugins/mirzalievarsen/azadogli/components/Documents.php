<?php namespace Mirzalievarsen\Azadogli\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Redirect;
use MirzalievArsen\Azadogli\Models\DocsCategory;
use MirzalievArsen\Azadogli\Models\Document;

class Documents extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Documents Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onRun() {

        if($this->page->id === 'index'){
            $this->page['docs'] = Document::orderBy('id', 'desc')->take(2)->get();
        }elseif ($this->param('name') == ''){
            return  Redirect::to('municipal/ustav-poseleniya');
        }
        else{
            $slug = $this->param('name');
            $category = DocsCategory::where('slug', $slug)->get();
            $docs = Document::where('category_id', $category[0]->id)->latest()->paginate(10);
            $this->page->title = $category[0]->name;
            $this->page['docs'] = $docs;
        }

    }
}
