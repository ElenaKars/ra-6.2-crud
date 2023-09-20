import React, { useEffect, useState } from "react";
import axios from "axios";

interface Note {
    id: number;
    content: string;
}

const NoteList: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const responce = await axios.get('http://localhost:7070/notes');
            setNotes(responce.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:7070/notes/${id}`);
            fetchNotes();
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };
    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        {note.content}
                        <button onClick={() => handleDelete(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;