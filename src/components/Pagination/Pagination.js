import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageNumber from './PageNumber';

import '../Pagination/Pagination.scss';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
    };

    this.items = this.props.items;
    this.itemsPerPage = this.props.itemsPerPage;

    this.onClickPage = this.onClickPage.bind(this);
  }

  getNumberOfPages() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  paginatedList() {
    const { currentPage } = this.state;
    if (!Array.isArray(this.items)) new Error('Invalid supplied Item.');

    return this.items.slice(
      currentPage * parseInt(this.itemsPerPage, 0),
      (currentPage + 1) * parseInt(this.itemsPerPage, 0)
    );
  }

  onClickPage(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div>
        {this.props.render(this.paginatedList())}
        <PageNumber
          items={Array.from(Array(this.getNumberOfPages()).keys())}
          currentPage={currentPage}
          onClickPage={this.onClickPage}
        />
      </div>
    );
  }
}

Pagination.defaultProps = {
  itemsPerPage: 3,
};

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number,
};

export default Pagination;
