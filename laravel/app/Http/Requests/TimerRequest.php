<?php

namespace App\Http\Requests;

use App\Http\Requests\ApiRequest;

class TimerRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    protected function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    protected function rules()
    {
        return [
            'log_type' => 'required'
        ];
    }
}
