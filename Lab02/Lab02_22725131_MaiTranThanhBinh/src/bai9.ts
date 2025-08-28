const EvenNumberPromise = new Promise<number[]>((resolve)=>{
    setTimeout(()=>{
        const arr=[1,2,3,4,5,6]
        resolve(arr.filter((n)=>n%2===0))
    },1000)
})
EvenNumberPromise.then((evens)=>console.log("Even numbers:",evens))