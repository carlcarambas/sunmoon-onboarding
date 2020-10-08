<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Timer;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Carbon\Carbon;

class CountdownTimer extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
        $timer = Timer::orderBy('timestamp')->get();
        return response()->json($timer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {   
        $request['log_type'] = Str::lower($request['log_type']);

        $validated_data = $this->validate($request, [
            'log_type' => 'required|in:start,stop',
            'timestamp' => 'bail|required|date|date_format:Y-m-d H:i:s'
        ]);

        $timer = Timer::create($validated_data);

        $result = array('success' => true, 'message' => 'created');
        return response()->json($result);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Timer  $timer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $timestamp, $log_type)
    {
        $timestamp_formatted = str_replace('%20', ' ', $timestamp);
        $where_condition = [
            ['timestamp', '=', $timestamp_formatted],
            ['log_type', '=', $log_type]
        ];

        $validated_data = $this->validate($request, [
            'log_type' => 'required|in:start,stop',
            'timestamp' => 'bail|required|date|date_format:Y-m-d H:i:s'
        ]);

        $timer = Timer::where($where_condition);
        $timer->update($validated_data);

        $result = array('success' => true, 'message' => 'updated');
        return response()->json($result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Timer  $timer
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $timer = Timer::findOrFail($id);
        $timer->delete();

        $result = array('success' => true, 'message' => 'deleted');
        return response()->json($result);
    }
}
