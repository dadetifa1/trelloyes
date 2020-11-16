import React from 'react';
import Store from './store.js';
import ListClass from './composition/List';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = { myStore : Store }
  }
  handleDeleteCard =  (key1, key2) => {
    const newStore = this.state.myStore;
    const newList =  newStore.lists.map(element => {
        if(element.header === key1)
        {
          element.cardIds = element.cardIds.filter(id => id !== key2)
        }
        return element
      })

    newStore.lists = newList;

    this.setState({
      myStore: newStore
    })
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }
  
  handleRandomCard = (listId) => {
    const newStore = this.state.myStore;
    const newCard = this.newRandomCard()

    const newLists = this.state.myStore.lists.map(list => {
      if (list.id === listId) {
        return {
                ...list,
                cardIds: [...list.cardIds, newCard.id]
              };
            }
      return list;
    })
    newStore.lists = newLists;
    newStore.allCards = {...newStore.allCards, [newCard.id]: newCard};

    this.setState({
      store: {
        myStore: newStore,
      }
    })
  };

  render() {
    const listList = this.state.myStore.lists.map((list) => {
      return <ListClass key={list.id} id={list.id} onClickAdd={this.handleRandomCard}  onAddItem={this.handleDeleteCard} header={list.header} cards={list.cardIds.map((id) => this.state.myStore.allCards[id])} />
    });
    return(
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
}

// function App(props) {
//   const listList = props.store.lists.map(function(list) {
//     return <ListClass key={list.id} header={list.header} cards={list.cardIds.map((id) => props.store.allCards[id])} />
//   });
//   return (
//     <main className='App'>
//       <header className="App-header">
//         <h1>Trelloyes!</h1>
//       </header>
//       <div className="App-list">
//         {listList}
//       </div>
//     </main>
//   );
// }

export default App;