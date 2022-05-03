import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionIncrementarSync } from '../redux/actions/actionsCounter';


const Home = () => {
    
    const {count} = useSelector(store => store.counter)
    console.log(count)
    
    const dispatch = useDispatch()
  
    return (
        <div>
           <h1>Home Counter</h1>
           <Button onclick={()=>dispatch(actionIncrementarSync())}>Incrementar</Button>
           <Button>Decrementar</Button>
           <Button>Reset</Button>
        </div>
    );
};

export default Home;