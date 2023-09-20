import React from 'react';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';

const App: React.FC = () => {
  return (
    <div className="App">
      <AddNote />
      <NoteList />
    </div>
  );
};

export default App;