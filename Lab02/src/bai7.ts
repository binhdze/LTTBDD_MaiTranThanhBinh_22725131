function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Task done"), time);
    });
  }

Promise.race([
    simulateTask(999),
    simulateTask(2000),
    simulateTask(1400),
]
).then((results)=>console.log("Firsts results:",results))