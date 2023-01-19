
import React from 'react';
import toJson from 'enzyme-to-json';
import Header from '../../components/Header';
import { shallow } from 'enzyme'



test('should renderer Header correctly',()=>{
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify')
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})
