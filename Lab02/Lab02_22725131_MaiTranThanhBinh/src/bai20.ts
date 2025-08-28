async function fetchUser(id:number): Promise<{id:number;name:string}> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id,name:`User${id}`})
        },1000)
     
    })
}
async function fetchUserWithTimeout(id: number, timeoutMs: number) {
    const timeout = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Timeout")), timeoutMs);
    });

    const apiCall = fetchUser(id);

    return Promise.race([apiCall, timeout]);
}

fetchUserWithTimeout(1, 2000)
    .then(console.log)
    .catch((err) => console.error(err.message));