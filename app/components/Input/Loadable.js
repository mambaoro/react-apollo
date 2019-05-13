/**
 *
 * Asynchronously loads the component for Input
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
