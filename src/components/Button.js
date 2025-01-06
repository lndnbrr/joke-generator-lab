import PropTypes from 'prop-types';
import React from 'react';

export default function JokeButtons({ joke, btnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <p>{btnText === 'Get A Punchline' ? '' : joke.punchline}</p>
    </>
  );
}

JokeButtons.propTypes = {
  joke: PropTypes.objectOf(JokeButtons).isRequired,
  btnText: PropTypes.string.isRequired,
};

// old code, my first thought process.
// import React, { useState } from 'react'
// import getJoke from '@/api/jokeAPI';

// export default function Button() {
// const [joke, setJoke] = useState([]);
//   const showSetup = () => {
//     getJoke().then(setJoke);
//   };
//   return (
//     <button type = 'button' onClick={showSetup}> Get A joke or sum</button>
//   )
// }
