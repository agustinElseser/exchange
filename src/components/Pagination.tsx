import { PaginationButton, PaginationWrapper } from "./styled/pagination.styled";
import { InputOption, InputSelect } from "./styled/input.styled";
import { BoxRow } from "./styled/box.styled";

export default function Pagination({ currentPage, totalPages, handlePageClick, handleItemsPerPageChange }) {
  return (
    <BoxRow justify="start" align="end">
      <PaginationWrapper>
        <PaginationButton disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)}>
          &laquo;
        </PaginationButton>
        {[...Array(totalPages).keys()].map((page) => (
          <PaginationButton key={page + 1} active={page + 1 === currentPage} onClick={() => handlePageClick(page + 1)}>
            {page + 1}
          </PaginationButton>
        ))}
        <PaginationButton disabled={currentPage === totalPages} onClick={() => handlePageClick(currentPage + 1)}>
          &raquo;
        </PaginationButton>
      </PaginationWrapper>
      <p>Items per page:</p>
      <InputSelect
        id="pages"
        name="pages"
        onChange={(e) => {
          handleItemsPerPageChange(e.target.value);
        }}
      >
        <InputOption value="3">3</InputOption>
        <InputOption value="6">6</InputOption>
        <InputOption value="9">9</InputOption>
      </InputSelect>
    </BoxRow>
  );
}
