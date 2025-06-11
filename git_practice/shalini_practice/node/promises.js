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

// ✅ Usage
asyncOperationWithPromise(5, 7)
  .then(result => console.log('Result:', result))
  .catch(err => console.error('Error:', err));
