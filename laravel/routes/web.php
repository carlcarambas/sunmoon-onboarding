<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->post('/api/logs', 'API\CountdownTimer@add');
$router->get('/api/logs', 'API\CountdownTimer@index');
$router->put('/api/logs/{timestamp}/{log_type}', 'API\CountdownTimer@update');
$router->delete('/api/logs/{id}', 'API\CountdownTimer@delete');
