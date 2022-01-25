import "./App.css";
import List from "./List";

function App(params) {
  let listA = params.store.lists.map((item) => {
    return (
      <List
        key={item.id}
        header={item.header}
        cards={item.cardIds.map((cardId) => params.store.allCards[cardId])}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Top app in da house</h1>
      </header>
      <div className="App-list">{listA}</div>
    </div>
  );
}

export default App;
