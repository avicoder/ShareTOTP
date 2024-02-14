<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::get();

        return Inertia::render('User/Index', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'email'],
            'new_password' => ['required', 'min:6']
        ]);

        $data['password'] = bcrypt($request->get('new_password'));

        User::create($data);

        session()->flash('message', 'Successfully Created.');

        return Redirect::route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Inertia::render('User/Edit', [
            'user' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'email'],
        ]);

        $user->fill($data);

        if ($password = $request->get('new_password')) {
            $user->password = bcrypt($password);
        }

        $user->save();

        session()->flash('message', 'Successfully saved.');

        return Redirect::route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        session()->flash('message', 'Successfully deleted.');

        return Redirect::route('users.index');
    }
}
