import { useEffect, useState } from "react";

export default function FetchEffect() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  let [joke, setJoke] = useState({});

  let fetchJoke = async () => {
    let res = await fetch(URL);
    let response = await res.json();
    setJoke(response);
    console.log(response.data);
  };

  useEffect(() => {
    async function sideEffect() {
      let res = await fetch(URL);
      let response = await res.json();
      setJoke(response);
    }
    sideEffect();
  }, []);

  return (
    <div>
      <h1>Jokes</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={fetchJoke}>Click For Jokes</button>
    </div>
  );
}
