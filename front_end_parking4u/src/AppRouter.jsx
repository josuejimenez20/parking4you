import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-dom';

function AppRouter() {
  const [count, setCount] = useState(0)

  return (<>
    <div>
      <a href="">Hola a todos</a>
    </div>

    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>

      <button onClick={() => {
        setCount(count - 1)
      }}>Decrement</button>
    </div>

    <h2>{count}</h2>
  </>
  )
}

export default AppRouter
