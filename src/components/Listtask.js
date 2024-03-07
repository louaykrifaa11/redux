import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setFilter } from '../redux/actions/todoActions.js';
import EditTask from './Edittask'; 

const ListTask = ({ users }) => {
const dispatch = useDispatch();
const filter = useSelector(state => state.todoReducer.filter);

const handleDelete = (id) => {
    dispatch(deleteUser(id));
};

const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
};

const filteredUsers = users.filter(user => {

    if (filter === 'all') {
    return true;
    } else if (filter === 'done') {
return user.DoneOrNot === 'Done';
    } else if (filter === 'notDone') {
return user.DoneOrNot === 'Not Done';
    }
    
});

return (
    <div>

<h2>User List</h2>

<div>

        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('done')}>Done</button>
        <button onClick={() => handleFilterChange('notDone')}>Not Done</button>

</div>

<ul>

        {filteredUsers.map(user => (
<li key={user.id}>
            
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Travail: {user.travail}</div>
            <div>DoneOrNot: {user.DoneOrNot}</div>

            <EditTask task={user} />

            <button onClick={() => handleDelete(user.id)}>Delete</button>
            
</li>

        ))}
</ul>
    </div>
);
};

export default ListTask;