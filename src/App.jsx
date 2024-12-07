import './App.css'
import Button from './components/Button'
import InputGroup from './components/InputGroup'

function App() {

  return (
    <>
      <div className='w-3/5 mx-auto'>
        <div className='mb-4'>
          <h3 className='text-3xl font-semibold p-4'>Sign up</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas id, itaque mollitia perspiciatis esse voluptatum!</p>
        </div>
        <form action="">
          <InputGroup label='What is your name?' type='text'></InputGroup>
          <InputGroup label='What is your email?' type='email' ></InputGroup>
          <InputGroup label='What is your password?' type='password' ></InputGroup>
          {/* <div className='my-2 text-left'>
            <label htmlFor="email">What is your email?</label>
            <input className='border-2 w-full p-1' type="email" />
          </div>
          <div className='my-2 text-left'>
            <label htmlFor="password">What is your password?</label>
            <input className='border-2 w-full p-1' type="password" />
          </div> */}
          <div className='mt-4 flex flex-row'>
            <Button text='Reset' type='reset' variant='warning'></Button>
            <Button text='Submit' type='submit' variant='primary' ></Button>
            <Button text='Cancel' type='button' variant='error' ></Button>

            {/* <button className='border-green-300 border-2 px-4 py-2 rounded-md mr-4' type='reset'>Reset</button>
            <button className='border-green-300 border-2 px-4 py-2 rounded-md' type='submit'>Submit</button> */}
          </div>
        </form>
      </div>
    </>
  )
}

export default App
