/* eslint-disable react/prop-types */
import { Pagination } from "react-bootstrap";

const TeamsListPagination = ({props}) => {
  const { totalPages, currentPage, setCurrentPage } = props;
  const paginationItems = [];
  
  for (let page = 1; page <= totalPages; page++) {
    paginationItems.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.First
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      />
      <Pagination.Prev
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {paginationItems}
      <Pagination.Next
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <Pagination.Last
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default TeamsListPagination;
