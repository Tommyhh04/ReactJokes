
import Joke from "./Jokes";
import jokesData from "./jokesData";

export default function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
   <div>{jokeElements}</div>
   )

}
