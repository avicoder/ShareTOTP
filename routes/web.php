<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use App\Models\Password;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::model('otp', Password::class);

Route::get('/', HomeController::class)
    ->name('home');

Route::middleware('auth')->group(function () {

    Route::get('/dashboard', DashboardController::class)
        ->name('dashboard');

    Route::resource('/users', UserController::class);
    Route::resource('/otps', PasswordController::class)
        ->names([
            'index' => 'passwords.index',
            'create' => 'passwords.create',
            'store' => 'passwords.store',
            'edit' => 'passwords.edit',
            'update' => 'passwords.update',
            'destroy' => 'passwords.destroy',
        ]);
    Route::resource('/services', ServiceController::class);

    Route::get('/settings', [SettingsController::class, 'index'])
        ->name('settings.index');
    Route::post('/settings', [SettingsController::class, 'store'])
        ->name('settings.store');

    Route::get('/profile', [ProfileController::class, 'edit'])
        ->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update']
        )->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])
        ->name('profile.destroy');
});

require __DIR__.'/auth.php';
