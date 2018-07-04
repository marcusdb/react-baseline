import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('p').text()).toEqual('To get started, edit src/App.js and save to reload.');
});

it('matches', () => {
  const wrapper = shallow(
    <App>Hello Jest!</App>
);
expect(wrapper).toMatchSnapshot();
});