/** Consolidate all of the different page routes from the feature directories * */
import InitialScreenContainer from './app/initial-screen';
import ErrorContainer from './error';
import EntryContainer from '../features/entry-screen/container';
import ScheduleContainer from '../features/schedule';
import pages from '../navigation/pages';

const pageMap = [
  { id: pages.INITIAL, component: InitialScreenContainer },
  { id: pages.ENTRY, component: EntryContainer },
  { id: pages.ERROR, component: ErrorContainer },
  { id: pages.SCHEDULE, component: ScheduleContainer }
];

export default pageMap;
