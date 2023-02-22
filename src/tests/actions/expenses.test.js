import expenses from '../fixtures/expenses';
import { addExpense , editExpense , removeExpense, startAddExpense, setExpenses,startSetExpenses, startRemoveExpense, startEditExpense} from '../../actions/expenses'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';


// afterEach(() => {
//   jest.useRealTimers();
// });
//jest.useRealTimers();
const uid = 'thismytestuid'
const midlewears = [thunk]
const createMockStore = configureMockStore(midlewears);

beforeEach((done)=>{
  const expensesData = {};
  expenses.forEach(({id,description,note,amount,createdAt})=>{
      expensesData[id] = {description,note,amount,createdAt}
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>done())
})

test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('should remove expense from firebase',(done)=>{
  const store = createMockStore({ auth : { uid } });
  const id = expenses[2].id
  store.dispatch(startRemoveExpense({ id })).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot)=>{
     expect(snapshot.val()).toBeFalsy();
     done();
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

test('should setup edit expense from firebase',(done)=>{
   const store = createMockStore({ auth : { uid } });
   const id = expenses[1].id;
   const updates = { amount : 2}
   store.dispatch(startEditExpense(id,updates)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
   }).then((snapshot)=>{
      expect(snapshot.val().amount).toBe(updates.amount);
      done()
   })
})
test('should setup add expense action object',()=>{
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    })
})
test('should add expense database and store',(done)=>{
  const store = createMockStore({ auth : { uid } });
  const expenseData = {
    description:'mouse',
    note:'This one is better',
    amount: 3000,
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
    database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
       expect(snapshot.val()).toEqual(expenseData)
    })
    done()
  })
});
test('should add expense with default to database and store',(done)=>{
  const store = createMockStore({ auth : { uid } });
  const expenseDefaults = {
    description:'',
    note:'',
    amount: 0,
    createdAt: 0
  }
  store.dispatch(startAddExpense({})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseDefaults
        }
    })
    database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
       expect(snapshot.val()).toEqual(expenseDefaults)
    })
     done()
  })
});

test('should setup set expense action object with data',()=>{
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type:'SET_EXPENSES',
    expenses
  })

})

test('should fetch an expenses from the firebase',(done)=>{
  jest.useFakeTimers('legacy')
  const store = createMockStore({ auth : { uid } });
  store.dispatch(startSetExpenses()).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
   done()
  })
  
})