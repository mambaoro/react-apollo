/**
 *
 * FetchMore
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '../Button/Loadable';
import Loading from '../Loading/Loadable';

function FetchMore({
  loading,
  hasNextPage,
  variables,
  updateQuery,
  fetchMore,
  hasData,
  children,
}) {
  const fetch =
    loading && !hasData ? (
      <Loading>...Loading {children}</Loading>
    ) : (
      hasNextPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables,
              updateQuery,
            })
          }
        >
          More {children}
        </Button>
      )
    );
  return <div>{fetch}</div>;
}

FetchMore.propTypes = {
  loading: PropTypes.bool,
  hasNextPage: PropTypes.bool,
  variables: PropTypes.object,
  updateQuery: PropTypes.func,
  fetchMore: PropTypes.func,
  hasData: PropTypes.bool,
  children: PropTypes.node,
};

export default FetchMore;
