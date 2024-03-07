    
// les actions...

export const addUser = (user) => {
    return { type: "ADD_USER", payload: user };
  };
  
  export const updateUser = (user) => {
    return { type: "UPDATE_USER", payload: user };
  };
  
  export const deleteUser = (id) => {
    return { type: "DELETE_USER", payload: id };
  };
  
  export const setFilter = (filter) => {
    return { type: "SET_FILTER", payload: filter };
  };
  
  export const editTask = (taskId, updatedTask) => {
    return { type: "EDIT_TASK", payload: { taskId, updatedTask } };
  };
  