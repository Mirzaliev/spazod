<?php namespace Mirzalievarsen\Content;

use Backend;
use Mirzalievarsen\Content\Components\News;
use System\Classes\PluginBase;

/**
 * content Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'content',
            'description' => 'No description provided yet...',
            'author'      => 'mirzalievarsen',
            'icon'        => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return [
            News::class => 'news',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'mirzalievarsen.content.some_permission' => [
                'tab' => 'content',
                'label' => 'Some permission'
            ],
        ];
    }
}
