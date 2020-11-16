import React from 'react';
import ReactDOM from 'react-dom';
import cardClass from './card';
import renderer from 'react-test-renderer';


describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<cardClass />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<cardClass title="Test title" content="Test Content"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no prop values', () => {
    const tree = renderer
      .create(<cardClass title="" content=""/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
}); 