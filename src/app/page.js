'use client';

import getJoke from '@/api/jokeAPI';
import { useState } from 'react';
import JokeButtons from '../components/Button';

function Home() {
  const [button, setButton] = useState('Get A Joke');

  const [joke, setJoke] = useState({
    setup: 'Who can we make laugh today?',
    punchline: "Let's see!",
  });

  const buttonPress = (text) => {
    setButton(text);
  };

  const jokeObj = () => {
    getJoke().then((data) => {
      setJoke({
        setup: data.setup,
        punchline: data.delivery,
      });
    });
    buttonPress('Get A Punchline');
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <JokeButtons joke={joke} btnText={button} />

      {button === 'Get A Joke' || button === 'Get Another Joke' ? (
        <button type="button" onClick={jokeObj}>
          {' '}
          {button}{' '}
        </button>
      ) : (
        <button type="button" onClick={() => setButton('Get Another Joke')}>
          {button}
        </button>
      )}
    </div>
  );
}

export default Home;
