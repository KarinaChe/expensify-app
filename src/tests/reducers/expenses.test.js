import expensesReduser from '../../reducers/expenses'
import expenses from '../fixtures/expenses';

test('should setup default expenses value',()=>{
    const state = expensesReduser(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should set add expense',()=>{
    const action = {
        type: 'ADD_EXPENSE',
        expenses
    }
    const state = expensesReduser(expenses,action)
    expect(state).toEqual(expenses)
})

test('should remove expense by id',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReduser(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
})
test('should remove expense if id not found',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReduser(expenses,action);
    expect(state).toEqual(expenses)
})

test('should edit a new expense',()=>{
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount
        }
    }
    const state = expensesReduser(expenses,action);
    expect(state[1].amount).toBe(amount);
})

test('should edit a new expense',()=>{
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id:'-1',
        updates:{
            amount
        }
    }
    const state = expensesReduser(expenses,action);
    expect(state).toEqual(expenses);
})