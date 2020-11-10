import React from 'react';

import ListClass from './composition/List';
import './App.css';

function App(props) {
  const listList = props.store.lists.map(function(list) {
    return <ListClass key={list.id} header={list.header} cards={list.cardIds.map((id) => props.store.allCards[id])} />
  });
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listList}
      </div>
    </main>
  );
}

export default App;