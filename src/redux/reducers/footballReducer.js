const footballReducer = (state = [], action) => {
    switch (action.type) {

      case 'GET_FOOTBALL':
        return action.payload;
  
      default:
        return state;
    }
  };
  
  export default footballReducer;