<?php

namespace App\Http\Controllers;

use App\Models\Todo as Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::orderBy('created_at', 'desc')
            ->get();

        return $todos->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        Todo::create([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
        ]);

        return response()->json('To-do created!');
    }

    public function show($id)
    {
        $todo = Todo::find($id);

        return $todo->toJson();
    }

    public function markAsCompleted(Todo $todo)
    {
        $todo->is_completed = true;
        $todo->update();

        return response()->json('To-do updated!');
    }
}
