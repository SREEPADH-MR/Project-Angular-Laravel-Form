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
    const DATE_TIME_FORMAT = 'd-m-Y h-i-s A';

    public function __construct()
    {
        date_default_timezone_set("Asia/Kolkata");
    }

    public function create(Request $request)
    {
        if ($request->hasFile('profileImage')) {

            $extention = $request->file('profileImage')->extension();

            $uniqueId = date(self::DATE_TIME_FORMAT);

            $fileName = $uniqueId . '.' . $extention;

            $path = $request->file('profileImage')
                ->storeAs('profile_photos', $fileName, 'fileUploadToPublic');

            // $path = $request->file('profileImage')
            //     ->storePubliclyAs('profile_photos', $fileName, 'fileUploadToPublic');

            // $path = Storage::disk('fileUploadToPublic')->putFileAs(
            //     'profile_photos', $request->file('profileImage'), $fileName, 
            // );
        }

        $data = [];
        $data['name'] = $request->name;
        $data['dob'] = $request->dob;
        $data['gender'] = $request->gender;
        $data['district'] = $request->district;
        $data['email'] = $request->email;
        $data['number'] = $request->number;
        $data['password'] = $request->password ? Hash::make($request->password) : null;
        $data['about'] = $request->about;
        $data['qualification'] = $request->qualification;
        $data['profile_image'] = !empty($fileName) ? $fileName : null;

        $response = User::create($data);

        return response()->json($response);
    }
}
