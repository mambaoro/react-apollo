/**
 *
 * Asynchronously loads the component for TextArea
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
