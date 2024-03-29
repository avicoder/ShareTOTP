<?php

namespace App\Http\Controllers;

use App\Models\Password;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $passwords = Password::getOrdered();

        return Inertia::render('Home', [
            'passwords' => $passwords,
        ]);
    }
}
