<?php namespace MirzalievArsen\Azadogli\Classes;


use Carbon\Carbon;

class Helpers {

    static function getFormatingData($date) {
        $monthName = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря'
        ];
        $dt = Carbon::parse($date);
        $dt = $dt->day . ' '. $monthName[$dt->month - 1]   . ' ' . $dt->format('Y., H:i');
        return $dt;
    }
}
