import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

const Form = ({thing, handleInput, handleSumbit}) => {
    return (
    <div>
    <h1 className="text-3xl sm:text-5xl font-bold 
    text-center pb-10">What is your One Thing?</h1>
    <form 
    className='flex ring-2 rounded-md ring-black 
    dark:ring-slate-800 focus-within:ring-pink-500 
    focus-within:ring-offset-1 bg-slate-50 
    ring-offset-slate-50 dark:ring-offset-slate-800'
    onSubmit={handleSumbit}
    >
    <input type="text" 
      className='bg-inherit border-black rounded-md font-sans text-slate-800 
      py-2 px-6 focus:outline-none text-xl sm:text-2xl 
      placeholder:text-slate-400 caret-teal-600 
      appearance-none w-full '
      placeholder='Enter One Thing'
      autoFocus
      maxLength='64'
      value={thing}
      onInput={handleInput}
    />
    <button 
      className='bg-inherit 
      rounded-md font-sans text-slate-800 
      py-2 pr-6 focus:outline-none focus:text-teal-600 
      hover:text-teal-600'>
    <ArrowRightCircleIcon className="h-12 w-12 pointer-events-none"/>
    </button>
    </form>
    </div>
    )
}

export default Form;