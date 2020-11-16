import React from 'react';
import CardClass from './card';
import './List.css';



class ListClass extends React.Component{
    static defaultProps = {
        header: "in list padre",
        cards: [
            { "title": "Default title", "content": "Nothing to see there" }
        ],
    };
    render(){
        const cardList = this.props.cards.map((card) => {
            return <CardClass key={card.id} cardId={card.id} listHeader={this.props.header} onAddItem={this.props.onAddItem} title={card.title} content={card.content} />
        });

        return(
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {cardList}
                </div>
                <button
                    type='button'
                    className='List-add-button'
                    onClick={() => this.props.onClickAdd(this.props.id)}>
                    + Add Random Card
                </button>
            </section>
        )
    }
}



export default ListClass;