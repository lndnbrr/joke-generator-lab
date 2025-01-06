// import axios from 'axios';

const URL = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = async () => {
  const response = await fetch(URL);
  const jokeCall = await response.json();
  console.log(jokeCall);
  return jokeCall;
};

export default getJoke;

// .then promise method for code above
// const getJoke = () => {
//   console.log('test');
//   const jokeCall = fetch(URL, {
//     method : 'GET',
//     headers : {
//       "Content-Type" : 'application/json',
//     },
//   }).then((data)=> data.json()).then((data)=> console.log(data));

// axios method for code above
// const getJoke = async () =>{
// const jokeCall = await axios.get(URL);
// return jokeCall;
// };
// export default getJoke;

// old code, my first thought process.
// const dbURL = "https://lb-react-joke-generator-default-rtdb.firebaseio.com";
// const getAJoke = async (fbKey) => {
//   const setup = await fetch(`${dbURL}/jokeSetup/${fbKey}.json?`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const response = setup.json();
//   return response;
// };
// export default getAJoke;
