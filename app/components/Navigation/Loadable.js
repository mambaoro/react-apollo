/**
 *
 * Asynchronously loads the component for Navigation
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
