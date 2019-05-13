/**
 *
 * Asynchronously loads the component for Link
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
