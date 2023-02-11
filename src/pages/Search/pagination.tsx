import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationContainer } from "./styles";

type SearchPaginationProps = {
  setPage: (page: number) => void;
  page: number;
};

export default function SearchPagination({
  setPage,
  page,
}: SearchPaginationProps) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <PaginationContainer>
      <Stack spacing={2}>
        <Pagination
          onChange={handleChange}
          count={10}
          variant="outlined"
          shape="rounded"
          page={page}
        />
      </Stack>
    </PaginationContainer>
  );
}
