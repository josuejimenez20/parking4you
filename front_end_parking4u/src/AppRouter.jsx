import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { newUser } from './redux/actions/users/newUser';

function AppRouter() {

  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const { loading, success, error, userData } = useSelector((state) => state.users.new);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    console.log(error);
  }, [error])

  return (<>
    <div>
      <a href="">Hola a todos</a>
    </div>

    <div>
      <button onClick={() => {
        console.log("Calling function 'newUser'");
        dispatch(newUser());
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
