async function fetchUser(id:number): Promise<{id:number;name:string}> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id,name:`User${id}`})
        },1000)
     
    })
}
async function fetchUsers(ids:number[]) {
    return Promise.all(ids.map((id)=>fetchUser(id)))
}
fetchUsers([1,2,3]).then(console.log)