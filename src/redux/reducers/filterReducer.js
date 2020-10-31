    const filterReducer = (state = '', action) => {
    switch (action.type) {
      case 'FILTER_FOOTBALL':
        return action.payload;
  
      default:
        return state;
    }
  };
  
  export default filterReducer;