import React, { useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectProps } from "@mui/material/Select";
import { useState } from "react";
import { Container, FilterContainer, FilterTitle } from "./styles";
import { filterData, getFilterValues } from "../../utiles/filterData";
import { useSearchParams } from "react-router-dom";

function SearchFilters({ purpose }: any) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 100,
      },
    },
  };

  const [filters] = useState(filterData);

  const [filterValues, setFilterValues] = useState(
    filters.reduce(
      (acc, item) => ({
        ...acc,
        [item.queryName]: "",
      }),
      {} as Record<typeof filters[number]["queryName"], string>
    )
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange =
    (queryName: string): SelectProps["onChange"] =>
    (e) => {
      setFilterValues((previous) => ({
        ...previous,
        [queryName]: e.target.value as string,
      }));
    };

  useEffect(() => {
    const values = getFilterValues(filterValues);
    values.forEach(({ name, value }) => {
      searchParams.set(name, value ?? undefined);
    });

    setSearchParams(searchParams);
  }, [filterValues, searchParams, setSearchParams]);

  return (
    <Container>
      <>
        {purpose ? (
          <FilterTitle> Searching Properties {purpose}</FilterTitle>
        ) : (
          <FilterTitle> Searching Properties</FilterTitle>
        )}
      </>
      <FilterContainer>
        {filters.map(({ items, placeholder, queryName }, index) => (
          <FormControl key={index} sx={{ m: 1, width: 160 }}>
            <InputLabel>{placeholder}</InputLabel>
            <Select
              value={filterValues[queryName]}
              onChange={handleChange(queryName)}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
            >
              {items.map(({ value, name }) => (
                <MenuItem value={value}>
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </FilterContainer>
    </Container>
  );
}
export default SearchFilters;
