
import React from 'react';
import toJson from 'enzyme-to-json';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme'
import { startLogout } from '../../actions/auth';



test('should renderer Header correctly',()=>{
    const wrapper = shallow(<Header startLogout={()=>{}} />)
    expect(toJson(wrapper)).toMatchSnapshot();
})

test('should call startLogout on button click',()=>{
    const onClickSpy = jest.fn();
    const wrapper = shallow (<Header startLogout={onClickSpy}/>)
    wrapper.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
})