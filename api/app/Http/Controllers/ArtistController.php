<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Album;
use App\Models\Song;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'albums' => 'required|array',
        ]);

        $artist = Artist::create($request->only(['name', 'bio']));

        foreach ($request->albums as $albumData) {
            $album = $artist->albums()->create([
                'title' => $albumData['title'],
                'release_year' => $albumData['release_year'],
            ]);

            foreach ($albumData['songs'] as $songData) {
                $album->songs()->create([
                    'title' => $songData['title'],
                    'duration' => $songData['duration'],
                ]);
            }
        }

        return response()->json($artist->load('albums.songs'), 201);
    }

    public function index()
    {
        return response()->json(Artist::with('albums.songs')->get());
    }
}
