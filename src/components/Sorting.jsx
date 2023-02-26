import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortCountries } from "../redux/action";

export const Sorting = () => {
  const [sortParam, setSortParam] = useState("");
  const dispatch = useDispatch();

  const onSortHandler = () => {
    dispatch(sortCountries(sortParam));
  };

  useEffect(() => {
    onSortHandler();
  }, [sortParam]);

  return (
    <Select
      placeholder="Population"
      value={sortParam}
      onChange={(e) => setSortParam(e.target.value)}
    >
      <option value="asc">Low to high</option>
      <option value="desc">High to low</option>
    </Select>
  );
};
