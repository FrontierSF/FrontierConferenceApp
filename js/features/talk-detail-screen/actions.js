import t from './actionTypes';

/**
 * Store data relating to the talk that was selected
 */
export default function selectTalk(talk) {
  return dispatch => {
    dispatch({
      type: t.TALK_SELECTED,
      talk,
    });
  };
}
