import React, { useState } from 'react';
import axios from 'axios';

const AddNote: React.FC = () => {
    const [content, setContent] = useState<string>('');

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:7070/notes', {
                id: 0,
                content,
            });
            setContent('');
            // Можно также вызвать функцию для обновления списка
        } catch (error) {
            console.error('Error adding note:', error);
        }
    };

    return (
        <div>
            <h2>Add Note</h2>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default AddNote;