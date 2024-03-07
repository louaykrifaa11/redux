
//declaration de la liste de donnees 


const initialState = {
    users: [
      {
        id: 1,
        name: "Malek Said",
        email: "malek.aitsisaid@gmail.com",
        travail: "montage",
        DoneOrNot:"Done"
      },
      {
        id: 2,
        name: "Yazid Said",
        email: "malek.said@gmail.com",
        travail: "Effet Speciaux",
        DoneOrNot:"NotDone"
      },
      {
        id: 3,
        name: "Said Vendredi",
        email: "vendredi.said@gmail.com",
        travail: "Effet Sonors",
        DoneOrNot:"Done"
      }
    ],
    tasks: [],
    filter: 'all'
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return { ...state, users: [...state.users, action.payload] };
  
      case "UPDATE_USER":
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.payload.id ? action.payload : user
          )       
        };
  
  
  
         //Pour la supression
      case "DELETE_USER":
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload)
        };
  
      case "SET_FILTER":
        return { ...state, filter: action.payload };
  
      default:
        return state;
  
        //Pour l edition de donnees
  
        case "EDIT_TASK":
    return {
      ...state,
      users: state.users.map(task =>
        task.id === action.payload.taskId ? action.payload.updatedTask : task
      )
    };
  
    }
  };
  
  export default todoReducer;
  