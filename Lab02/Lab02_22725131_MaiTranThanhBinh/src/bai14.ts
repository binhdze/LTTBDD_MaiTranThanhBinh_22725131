async function triple(num:number): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(num*3),1000)
    })
    
}
triple(5).then(console.log)