const randomNumberPromise = new Promise<number>((resolve)=>{
    resolve(Math.floor(Math.random()*100))
})
randomNumberPromise
        .then((num)=>console.log("Random: ",num))
        .catch((err)=>console.error(err))