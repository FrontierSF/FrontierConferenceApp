/** Consolidate all of the different page routes from the feature directories * */
import InitialScreenContainer from './app/initial-screen';
import ErrorContainer from './error';
import EntryContainer from '../features/entry-screen/container';
import RegScreenContainer from '../features/reg-screen/container';
import ContactScreenContainer from '../features/crypto-screen/container';
import ScheduleContainer from '../features/schedule';
import TalkDetailScreenContainer from '../features/talk-detail-screen/container'
import pages from '../navigation/pages';

const pageMap = [
  { id: pages.INITIAL, component: InitialScreenContainer },
  { id: pages.ENTRY, component: EntryContainer },
  { id: pages.ERROR, component: ErrorContainer },
  { id: pages.SCHEDULE, component: ScheduleContainer },
  { id: pages.DETAILS, component: TalkDetailScreenContainer },
  { id: pages.CONTACTS, component: ContactScreenContainer },
  { id: pages.REG, component: RegScreenContainer },
];

export default pageMap;
