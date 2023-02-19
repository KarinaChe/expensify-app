import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, navigate, startRemoveExpense, wrapper;

beforeEach(()=>{
    startEditExpense = jest.fn();
    navigate = jest.fn();
    startRemoveExpense = jest.fn();
    wrapper = shallow(<EditExpensePage 
        startEditExpense={ startEditExpense } 
        navigate={ navigate } 
        startRemoveExpense={startRemoveExpense}
        expense={expenses[2]}
        />);
})

test('should render EditExpense correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should handle startEditExpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(navigate).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
})

test('should handle startRemoveExpense',()=>{
    wrapper.find('button').simulate('click');
    expect(navigate).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[2].id});
})

