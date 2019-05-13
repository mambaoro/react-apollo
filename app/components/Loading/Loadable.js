/**
 *
 * Asynchronously loads the component for Loading
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
