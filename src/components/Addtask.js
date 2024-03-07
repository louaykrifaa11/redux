import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/todoActions.js';

const Addtask = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [travail, setTravail] = useState('');
  const [DoneOrNot, setDoneOrNot] = useState('');

  const handleSubmit = (e) => {   
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      travail: travail,
      DoneOrNot: DoneOrNot 
    };

    dispatch(addUser(newUser));
    setName('');
    setEmail('');
    setTravail('');
    setDoneOrNot(''); 
  };

  return (
    
    <div className='Adduser'>

      <h2 className='Addus'>Add User</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={travail} placeholder="Travail" onChange={(e) => setTravail(e.target.value)} />
        <input type="text" value={DoneOrNot} placeholder="DoneOrNot" onChange={(e) => setDoneOrNot(e.target.value)} />
        
        <button type="submit">Add</button>
        
      </form>
    </div>
  );
};

export default Addtask;