onmessage = function (event) {
    console.log('Worker received:', event.data);
  
    // Perform heavy computation
    let result = event.data.toUpperCase();
  
    // Send result back to main thread
    postMessage(result);
  };
  