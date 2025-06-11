onmessage = function (event) {
  let num = event.data;
  let res = num * num;
  postMessage(res);
};
