import axios from 'axios';
import * as reducerAction from '../redux/actions/index';

const FootballApi = (() => {

    const getAllFootball = () => async dispatch => {

      try {
        const data = await axios.get('https://www.scorebat.com/video-api/v1/');
        
        dispatch(reducerAction.getFootballHighlights(data.data));
      } catch (error) {
       console.log(error)
      }
    };
  

  
    return {
        getAllFootball
    };
  })();

export default FootballApi;