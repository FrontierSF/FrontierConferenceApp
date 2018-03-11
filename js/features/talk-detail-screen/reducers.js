import t from './actionTypes';

// Default state. It should never change
const defaultState = {
  talk: {},
};

const TalkDetails = (state = defaultState, action) => {
  switch (action.type) {
    case t.TALK_SELECTED:
      console.log('TALK_SELECTED hit in reducer', action.talk);
      return Object.assign({}, defaultState, { talk: action.talk });

    default:
      return state;
  }
};

export default TalkDetails;
