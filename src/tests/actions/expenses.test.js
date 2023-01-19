
import { addExpense , editExpense , removeExpense} from '../../actions/expenses'

test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('should setup edit expense action object',()=>{
    const action = editExpense('123abc',{note:'edit new'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note:'edit new'
        }
    })
})
test('should setup add expense action object',()=>{
    const expenseDate = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    }
    const action = addExpense(expenseDate)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseDate,
            id:expect.any(String)
        }
    })
})

test('should setup add expense action object',()=>{
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id:expect.any(String)
        }
    })
})