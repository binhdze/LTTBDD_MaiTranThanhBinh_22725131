async function triple(num:number): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(num*3),1000)
    })
    
}
async function awaitof() {
    const promises = [triple(2),triple(4),triple(5)]
    for await (const result of promises){
        console.log("Result:", result)
    }
    
}
awaitof()