import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = async () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="greeting_div">
      <h1 className="heading">Greeting</h1>
      <ul className="list">
        {
          greeting.map((greeting) => (
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
