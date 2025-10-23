async function helloAsync() {
    const result = await new Promise(resolve => {
        setTimeout(() => resolve("Hello async!"), 2000);
    });
    console.log(result);
}

helloAsync();
