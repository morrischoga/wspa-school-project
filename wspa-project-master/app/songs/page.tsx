"use client";

import { useState, useEffect } from 'react';
// import { Header } from '../../components/Header';
import { Header } from '../../components/Header';

interface Song {
    id: string;
    fields: {
        title: string;
        artist: string;
        year: number;
    }
}

function Songs() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [songs, setSongs] = useState<Song[] | null>(null);

    useEffect(() => {
        fetch('/songs/api')
            .then(response => response.json())
            .then(data => {
                setSongs(data);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    return (
        <main className="mt-6">
            <Header>My Songs</Header>

            {isError ? <p>Error!</p> : null}
            {isLoading && <p>Loading...</p>}
            <div>
                {songs && songs.map((elem) => {
                    return (
                        <div key={elem.id}>{elem.fields.title} ({elem.fields.artist}) {elem.fields.year}</div>
                    )
                })}
            </div>
        </main>
    );
}

export default Songs;