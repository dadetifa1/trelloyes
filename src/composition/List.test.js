import React from 'react';
import ReactDOM from 'react-dom';
import ListClass from './List';
import renderer from 'react-test-renderer';


describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListClass />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ListClass header="First list" cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no props', () => {
    const tree = renderer
      .create(<ListClass />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
}); 