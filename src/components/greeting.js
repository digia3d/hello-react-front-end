import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="greeting_div">
      <h1 className="heading">Greeting</h1>
      <ul className="list">
        {
          greetings.map((greeting) => (
            <li key={greeting.id} className="list_item">
              {greeting.greeting}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Greeting;
