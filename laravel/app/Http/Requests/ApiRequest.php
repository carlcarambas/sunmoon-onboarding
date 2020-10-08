<?php

namespace App\Http\Requests;

use App\Http\Requests\FormRequest;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ApiRequest extends FormRequest
{
    const UnprocessableEntity = 422;
    /**
     * If validator fails return the exception in json form
     * @param Validator $validator
     * @return void
     * 
     * @throws Illuminate\Http\Exceptions\HttpResponseException
     */
    protected function failedValidation(Validator $validator) {
        $result['errors'] = $validator->errors();
        throw new HTTPResponseException(response()->json($result, 422));
    }
}
