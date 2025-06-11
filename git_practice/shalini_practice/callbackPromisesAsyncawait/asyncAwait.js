// async function userData() {
//   try {
//     const responses = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     const resJson = await responses.json();
//     console.log(resJson.name);
//   } catch (err) {
//     console.error(err);
//   }
// }

// userData();


async function fetching() {
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1ihawjdf');
  if(!res.ok){
    throw new Error("error in fetching");
  }
  const data = await res.json()
  console.log(data);
  }
  catch(err) {
    console.log(err.message);
  }
  finally{
    console.log('finally....')
  }
}

fetching();