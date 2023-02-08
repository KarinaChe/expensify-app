const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve({
        //     name: 'Karina',
        //     age: 35
        // })
        reject('Something go wrong')
    },1500)
})
console.log('before');
promise.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log('error :', error)
});
console.log('after');