async function triple(num:number): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(num*3),1000)
    })
    
}
async function runParable() {
    const[a,b] = await Promise.all([triple(2),triple(3)])
    console.log("parallel:",a,b)
    
}
runParable()