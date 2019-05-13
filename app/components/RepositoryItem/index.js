/**
 *
 * RepositoryItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import Link from '../Link/Loadable';
import Button from '../Button/Loadable';
import {
  STAR_REPOSITORY,
  REMOVE_STAR,
  WATCH_REPO,
  updateAddStar,
  updateRemoveStar,
  updateWatch,
  watchOrUnwatch,
  isWatch,
} from './constants';

function RepositoryItem({
  id,
  name,
  url,
  descriptionHTML,
  primaryLanguage,
  owner,
  stargazers,
  watchers,
  viewerSubscription,
  viewerHasStarred,
}) {
  const star = !viewerHasStarred ? (
    <Mutation
      mutation={STAR_REPOSITORY}
      variables={{ id }}
      update={updateAddStar}
    >
      {(addStar /* { data, loading, error } */) => (
        <Button onClick={addStar}>
          <div>Add star</div>
        </Button>
      )}
    </Mutation>
  ) : (
    <Mutation
      mutation={REMOVE_STAR}
      variables={{ id }}
      update={updateRemoveStar}
    >
      {removeStar => (
        <Button onClick={removeStar}>
          <div>Unstar</div>
        </Button>
      )}
    </Mutation>
  );
  const watch = (
    <Mutation
      mutation={WATCH_REPO}
      variables={{
        id,
        viewerSubscription: watchOrUnwatch(viewerSubscription),
      }}
      optimisticResponse={{
        updateSubscription: {
          __typename: 'Mutation',
          subscribable: {
            __typename: 'Repository',
            id,
            viewerSubscription: watchOrUnwatch(viewerSubscription),
          },
        },
      }}
      update={updateWatch}
    >
      {watchRepo => (
        <Button onClick={watchRepo}>
          {watchers.totalCount}{' '}
          {isWatch(viewerSubscription) ? 'Unwatch' : 'Watch'}
        </Button>
      )}
    </Mutation>
  );
  const stargazersCountLenght = () => {
    if (stargazers && stargazers.totalCount && stargazers.totalCount > 1) {
      return 'Stars';
    }
    if (stargazers && !stargazers.totalCount) {
      return 'No star';
    }
    return 'Star';
  };
  return (
    <div>
      <div>
        <h2>
          <Link href={url}>{name}</Link>
        </h2>
        {star}
        {watch}
        {/* Here comes your updateSubcription mutation */}
      </div>
      <div>
        {(stargazers && stargazers.totalCount) || null}{' '}
        {stargazersCountLenght()}
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
        <div>
          <div>
            {primaryLanguage && <span>Language: {primaryLanguage.name}</span>}
          </div>
          <div>
            {owner && (
              <span>
                Owner: <a href={owner.url}>{owner.login}</a>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

RepositoryItem.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  url: PropTypes.string,
  descriptionHTML: PropTypes.string,
  primaryLanguage: PropTypes.object,
  owner: PropTypes.object,
  stargazers: PropTypes.object,
  watchers: PropTypes.object,
  viewerSubscription: PropTypes.string,
  viewerHasStarred: PropTypes.bool,
};

export default RepositoryItem;
