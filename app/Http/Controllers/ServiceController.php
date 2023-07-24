<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Utils\ImageHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::get();

        return Inertia::render('Service/Index', [
            'services' => $services,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Service/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
        ]);

        $service = new Service($data);

        if ( $icon = $request->file('icon_file') ) {
            $filename = ImageHelper::generateName($icon);
            $service->icon_image = "/icons/$filename";
            $icon->storeAs('icons', $filename, [
                'disk' => 'public',
            ]);
        }

        $service->save();

        session()->flash('message', 'Successfully Created.');

        return Redirect::route('services.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        return Inertia::render('Service/Edit', [
            'service' => $service,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        $data = $request->validate([
            'name' => ['required', 'max:50'],
        ]);

        $service->fill($data);

        if ( $icon = $request->file('icon_file') ) {
            $filename = ImageHelper::generateName($icon);
            $service->icon_image = "/icons/$filename";
            $icon->storeAs('icons', $filename, [
                'disk' => 'public',
            ]);
        }

        $service->update($data);

        session()->flash('message', 'Successfully saved.');

        return Redirect::route('services.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $service->delete();

        session()->flash('message', 'Successfully deleted.');

        return Redirect::route('services.index');
    }
}
