<?php

namespace App\Http\Controllers;

use App\Models\Password;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PasswordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $passwords = Password::get()
            ->toArray();

        return Inertia::render('Password/Index', [
            'passwords' => $passwords,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $serviceList = Service::getList();

        return Inertia::render('Password/Create', [
            'serviceList' => $serviceList,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'service_id' => ['required'],
            'name' => ['required'],
            'secret' => ['required'],
            'digits' => ['required'],
            'algorithm' => ['required'],
            'period' => ['required'],
        ]);

        Password::create($data);

        session()->flash('message', 'Successfully Created.');

        return Redirect::route('passwords.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Password $password)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Password $password)
    {
        $serviceList = Service::getList();

        return Inertia::render('Password/Edit', [
            'serviceList' => $serviceList,
            'password' => $password,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Password $password)
    {
        $data = $request->validate([
            'service_id' => ['required'],
            'name' => ['required'],
            'secret' => ['required'],
            'digits' => ['required'],
            'algorithm' => ['required'],
            'period' => ['required'],
        ]);

        $password->fill($data);

        $password->save();

        session()->flash('message', 'Successfully saved.');

        return Redirect::route('passwords.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Password $password)
    {
        $password->delete();

        session()->flash('message', 'Successfully deleted.');

        return Redirect::route('passwords.index');
    }
}
