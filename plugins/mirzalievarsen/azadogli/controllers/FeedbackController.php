<?php namespace MirzalievArsen\Azadogli\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class FeedbackController extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController'    ];

    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('MirzalievArsen.Azadogli', 'main-menu-item3', 'side-menu-item');
    }
}
