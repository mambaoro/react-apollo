/**
 *
 * Asynchronously loads the component for FetchMore
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
