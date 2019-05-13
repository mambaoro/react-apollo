/**
 *
 * Asynchronously loads the component for CommentItem
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
