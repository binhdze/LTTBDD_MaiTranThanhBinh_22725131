
function rejectPromise(): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Something went wrong"));
      }, 1000);
    });
  }
  rejectPromise().catch((err: Error) => console.error(err.message));

  async function handleError(): Promise<void> {
    try {
      await rejectPromise();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Caught error:", error.message);
      } else {
        console.error("Caught unknown error");
      }
    }
  }
  handleError();
  