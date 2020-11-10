import React from 'react';
import './card.css';


class cardClass extends React.Component {
    static defaultProps = {
        title: 'in the card class',
        content: 'card class content',
    };
    render() {
        return (
            <div className="Card">
                <button type="button">delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
          </div>
        )
    }
}

export default cardClass;