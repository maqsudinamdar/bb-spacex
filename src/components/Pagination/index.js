import React from 'react';
import ReactPagination from 'react-js-pagination';


const Pagination = ({
    activePage,
    countPerPage,
    totalCount,
    onChange,
  }) => {
      
    return (
      <>
        {totalCount > 0 && (
          <div className="d-flex justify-content-end pagination">
            <ReactPagination
              itemClass="page-item"
              linkClass="page-link"
              activePage={activePage}
              itemsCountPerPage={countPerPage}
              totalItemsCount={totalCount}
              pageRangeDisplayed={5}
              onChange={onChange}
              hideFirstLastPages
            />
          </div>
        )}
      </>
    );
  };

export default Pagination;