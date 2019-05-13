/**
 *
 * Asynchronously loads the component for Repository
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
