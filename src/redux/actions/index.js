export const getFootballHighlights = football => ({
    type: 'GET_FOOTBALL',
    payload: football,
  });

export const filterFootballHighlight = football =>({
    type: 'FILTER_FOOTBALL',
    payload: football
})