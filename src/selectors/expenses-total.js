export default (expenses) =>{
    if (expenses.length === 0) {
        return 0
    } else {
        let total = 0
        expenses.forEach((expense) => {
            total += expense.amount
        })
        return total
    }
}