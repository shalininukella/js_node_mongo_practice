function asyncOperationWithPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Inputs must be numbers');
      }
    }, 1000);
  });
}

async function useAsyncAwait() {
  try {
    const result = await asyncOperationWithPromise(10, 20);
    console.log('Result:', result);
  } catch (error) {
    console.error('Caught Error:', error);
  }
}

useAsyncAwait();

