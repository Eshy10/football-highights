import axios from 'axios';
import * as reducerAction from '../redux/actions/index';

const FootballHighlights = (() => {

    const getAllFootball = () => async dispatch => {
        try {
          const data = await axios.get('https://www.scorebat.com/video-api/v1/');
          dispatch(reducerAction.getFootballHighlights(data.data));
        } catch (error) {
        //   dispatch(reducerAction.formErrors(error.response.data.message));
        console.log(error)
        }
    }

    return {
        getAllFootball
    }

})()

export default FootballHighlights;