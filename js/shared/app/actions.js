import { Navigation } from 'react-native-navigation';
import { AppState, Linking } from 'react-native';
// import PushNotification from 'react-native-push-notification';

import { navigatorStyle, navTypes } from '../const';

import t from './actionTypes';

import { getNavScreen, checkPageValid } from '../../utils';
import pages from '../../navigation/pages';

export function initializeApp(root) {
  return dispatch => {
    if (root === navTypes.single) {
      Navigation.startSingleScreenApp({
        screen: {
          screen: pages.INITIAL,
          navigatorStyle,
        },
      });
    } else if (root === navTypes.tab) {
      Navigation.startTabBasedApp({
        tabs: [
          {
            screen: pages.CONTACTS,//pages.SCHEDULE,
            icon: require('../assets/schedule.png'),
            title: 'Schedule',
            // overrideBackPress: false, // this can be turned to true for android
            // navigatorStyle: {},
          },
          // {
          //   icon: require('../assets/labs.png'),
          //   screen: pages.SCHEDULE,
          //   title: 'Labs',
          //   // navigatorStyle: {},
          // },
          // {
          //   icon: require('../assets/sponsors.png'),
          //   screen: pages.SCHEDULE,
          //   title: 'Sponsors',
          //   // navigatorStyle: {},
          // },
          {
            icon: require('../assets/contacts.png'),
            screen: pages.CONTACTS,
            title: 'Contacts',
            // navigatorStyle: {},
          },
        ],
        tabsStyle: {
          topTabsHeight: 100,
          tabBarSelectedButtonColor: '#ff6a00',
          // tabFontFamily: 'BioRhyme-Bold',
        },
      });
    } else {
      return;
    }

    Linking.getInitialURL().then(url => processOpenUrl(url, dispatch));
    dispatch(setupListeners());

    dispatch({
      type: t.INITIALIZE_APP,
    });
  };
}

function setupListeners() {
  return dispatch => {
    AppState.removeEventListener('change', handleAppStateChange);
    AppState.addEventListener('change', handleAppStateChange);
    Linking.removeEventListener('url', handleOpenURL);
    Linking.addEventListener('url', handleOpenURL);

    // This is used to kick off events when the app goes from background to foreground
    function handleAppStateChange() {
    }

    function handleOpenURL(event) {
      processOpenUrl(event.url, dispatch);
    }
  };
}

/**
 * Determines first screen after loading. Should only be called when
 * rehydration has finished.
 */
export function getStartScreen(navigator) {
  return (dispatch, getState) => {
    if (navigator === null) {
      return;
    }
    const startPage = getInitialPage(getState());
    navigator.resetTo(startPage);
    dispatch({
      type: t.GET_START_SCREEN,
    });
  };
}

/**
 * Determines the first screen to go to. This assumes rehydration and other loaders
 * have finished.
 */
function getInitialPage() {
  // Determine what page to display
  return getNavScreen(pages.ENTRY);
}

function processOpenUrl(url, dispatch) {
  let tokens = url.split('/');
  if (tokens && tokens.length >= 4 && checkPageValid(tokens[3])) {
    let page = tokens[3]
    let payload = ''
    if (page === pages.VERIFY) {
      let token = url.split('=').pop()
      payload = token
    }
    Navigation.handleDeepLink({
      link: tokens[3],
      payload: payload
    });
  }
}
