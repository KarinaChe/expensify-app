
import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should setup a text filter',()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})
test('should setup a text filter',()=>{
    const text = 'something in'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })

})
test('should sort by amount',()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})
test('should sort by date',()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})
test('should setup start date',()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
})
test('should setup end date',()=>{
    const action =setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
})