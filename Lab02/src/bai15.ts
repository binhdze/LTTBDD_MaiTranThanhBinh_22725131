async function triple(num:number): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(num*3),1000)
    })
    
}
async function awaitmulti(){
    const a = await triple(4)
    const b = await triple(3)
    console.log("sequentially: ",a,b)

}
awaitmulti();