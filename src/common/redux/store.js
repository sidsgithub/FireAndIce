import { createStore } from 'redux';
import _ from 'lodash';

function loaderState(state = {}, action) {
    switch (action.type) {
      case 'SET_BACK_DROP':
        return {...state, backdrop: _.get(action,'payload.value')}
      default:
        return state
    }
  }

export const store = createStore(loaderState, ['Use Redux'])