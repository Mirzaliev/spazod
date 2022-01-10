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

    static function formatSizeUnits($bytes) {

        if ($bytes >= 1073741824)
        {
            $bytes = number_format($bytes / 1073741824, 2) . ' GB';
        }
        elseif ($bytes >= 1048576)
        {
            $bytes = number_format($bytes / 1048576, 2) . ' MB';
        }
        elseif ($bytes >= 1024)
        {
            $bytes = number_format($bytes / 1024, 2) . ' KB';
        }
        elseif ($bytes > 1)
        {
            $bytes = $bytes . ' bytes';
        }
        elseif ($bytes == 1)
        {
            $bytes = $bytes . ' byte';
        }
        else
        {
            $bytes = '0 bytes';
        }

        return $bytes;
    }

    static function removeFileExtention(string $fileName): string
    {
        return substr($fileName, 0, strrpos($fileName,'.'));
    }
}
