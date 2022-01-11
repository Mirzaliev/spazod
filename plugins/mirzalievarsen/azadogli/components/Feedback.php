<?php namespace Mirzalievarsen\Azadogli\Components;

use Cms\Classes\ComponentBase;
use ValidationException;
use Illuminate\Support\Facades\Redirect;
use Winter\Storm\Support\Facades\Flash;
use Winter\Storm\Support\Facades\Input;
use Winter\Storm\Support\Facades\Validator;
use MirzalievArsen\Azadogli\Models\Feedback as FeedbackModel;

class Feedback extends ComponentBase
{


    public function componentDetails()
    {
        return [
            'name'        => 'Feedback Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onSave() {


        $validator = Validator::make(
            Input::all(),
            [
                'surname' => 'required',
                'name' => 'required',
                'patronymic' => 'required',
                'phone' => ['required', 'regex:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/'],
                'email' => 'required|email',
                'message' => 'required|min:2'
            ],
            [
                'surname.required' => 'Укажите фамилию',
                'name.required' => 'Укажите имя',
                'patronymic.required' => 'Укажите отчество',
                'phone.required' => 'Укажите номер вашего телефона',
                'email.required' => 'Укажите вашу электронную почту',
                'message.required' => 'Текст обращения обязатетельно!',
                'message.min' => 'Текст обращения должно быть не короче 50 символов',
                'phone.regex' => 'Разрешенный формат телефона: +79261234567 / 89261234567 / 79261234567 / +7 926 123 45 67 /8(926)123-45-67 / 123-45-67'
            ]
        );

        if($validator->fails()){
            throw new ValidationException($validator);
        }else {
            FeedbackModel::create(Input::all());
            Flash::success('Спасибо,ваше обращение успешно принято! Мы свяжемся с вами в ближайшее время');
            return Redirect::back();
        }

    }
}
