<?php

namespace App\Http\Controllers\ModelDrivenForm;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Model\ModelDrivenForm\User;
use Illuminate\Http\Request;
use Illuminate\Http\File;

class ModelDrivenFormController extends Controller
{
    public function create(Request $request)
    {
        $data = [];
        $data['name'] = $request->name;
        $data['dob'] = $request->dob;
        $data['gender'] = $request->gender;
        $data['district'] = $request->district;
        $data['email'] = $request->email;
        $data['number'] = $request->number;
        $data['password'] = Hash::make($request->password);
        $data['about'] = $request->about;
        $data['qualification'] = $request->qualification;

        if ($request->hasFile('profileImage')) {
            $profileImage = $request->file('profileImage');
            $path = Storage::disk('uploads')->put('profile_photos', $profileImage);
            dd($path);
        }

        $response = User::create($data);
        return response()->json($response);
    }
}
