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
        const cardList = this.props.cards.map(function(card) {
            return <CardClass key={card.id} title={card.title} content={card.content} />
        });

        return(
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {cardList}
                </div>
            </section>
        )
    }
}



export default ListClass;