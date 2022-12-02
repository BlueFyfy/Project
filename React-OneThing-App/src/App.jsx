import { useState } from 'react'
import reactLogo from './assets/react.svg'

//libraries
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

//components
import CustomForm from './components/CustomForm'
import OneThing from './components/OneThing'

function getSuccessMessage() {
  const message = ["Congrats!", "Great job!", "Don’t ya feel great?!",
   "Up, up, and up!", "Um…okay", "Did you though?", 
   "Don't feel like you tried your best…", "Forget about it!"];
  return message[Math.floor(Math.random() * message.length)];
}

function App() {
  const [thing, setThing] = useState('');
  const [isCompleted, setIsCompleted] = useState(true);

  const handleSumbit = (e) => {
    e.preventDefault();
    setIsCompleted(false);
    // console.log(e);
  }

  const handleInput = (e) => {
    setThing(e.target.value);
  }

  const handleCompletedThing = async(e) => {
    e.target.setAttribute('disabled', true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti({
   emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸', '🦄'],
   emojiSize: 50,
});
    e.target.removeAttribute('disabled');
    setThing('');
    setIsCompleted(true);
  }


  return (
    <main className="grid place-items-center min-h-screen 
    bg-gradient-to-b from-slate-100 to-slate-200 
    dark:from-slate-800 dark:to-slate-900 text-slate-900 
    dark:text-slate-200">
    <div className="grid place-items-center gap-8 m-8">
    { isCompleted && <CustomForm 
    thing={thing}
    handleInput={handleInput}
    handleSumbit={handleSumbit}
    />}
    {
      !isCompleted && <OneThing thing={thing}
        handleCompletedThing={handleCompletedThing}
      />
    }
    </div> 
    </main>
  )
}

export default App
