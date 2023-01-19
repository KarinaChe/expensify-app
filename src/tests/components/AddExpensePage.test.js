import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, navigate , wrapper;

beforeEach(()=>{
    onSubmit = jest.fn();
    navigate = jest.fn();
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} navigate={navigate}/>)
})

test('should render AddExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(navigate).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})