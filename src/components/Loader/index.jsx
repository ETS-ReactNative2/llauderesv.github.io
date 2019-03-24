import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const withLoader = BaseComponent => props => {
  const { isLoading } = props;
  return (
    <Fragment>
      {isLoading ? <h2>Loading...</h2> : <BaseComponent {...props} />}
    </Fragment>
  );
};

withLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default withLoader;
