import { Select } from "@chakra-ui/react";

export const Sorting = () => {
  return (
    <Select placeholder="Population">
      <option value="asc">Low to high</option>
      <option value="desc">High to low</option>
    </Select>
  );
};
