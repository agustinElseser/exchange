import { useMemo, useState } from "react";

import {
  Table,
  TableBodyChildren,
  TableCell,
  TableChildren,
  TableHeader,
  TableHeaderDevices,
  TableRow,
  TableRowChildren,
} from "../../../components/styled/tables.styled";

import { BoxRow } from "../../../components/styled/box.styled";
import { DownArrow } from "../../../components/svg/DownArrow";
import { RightArrow } from "../../../components/svg/DownArrow copy";
import Pagination from "../../../components/Pagination";

const Row = ({ item, children }) => {
  const [open, setOpen] = useState(false);

  const handleRowClick = () => {
    setOpen(!open);
  };

  const selectColor = {
    Success: "var(--color-buy)",
    Failed: "var(--color-sell)",
  };

  return (
    <>
      {children.length === 0 ? (
        <TableRowChildren>
          <TableCell>↳ {item.data}</TableCell>
          <TableCell>{item.device}</TableCell>
          <TableCell color={selectColor[item.status]}>{item.status}</TableCell>
          <TableCell>{`${item.country}/${item.city}`}</TableCell>
          <TableCell>{item.ipAddress}</TableCell>
          <TableCell color={"var(--color-info)"}>{item.action}</TableCell>
        </TableRowChildren>
      ) : (
        <TableRow onClick={handleRowClick}>
          <TableCell>
            <BoxRow justify="start" align="center" gap="0px">
              {open ? <RightArrow /> : <DownArrow />}
              {item.data}
            </BoxRow>
          </TableCell>
          <TableCell>{item.device}</TableCell>
          <TableCell color={selectColor[item.status]}>{item.status}</TableCell>
          <TableCell>{`${item.country}/${item.city}`}</TableCell>
          <TableCell>{item.ipAddress}</TableCell>
          <TableCell color={"var(--color-info)"}>{item.action}</TableCell>
        </TableRow>
      )}

      {children && children.length > 0 && open && (
        <TableRowChildren>
          <TableCell colSpan={6}>
            <TableChildren>
              <TableBodyChildren>
                {children?.map((item, index) => (
                  <Row key={index} item={item} children={[]} />
                ))}
              </TableBodyChildren>
            </TableChildren>
          </TableCell>
        </TableRowChildren>
      )}
    </>
  );
};

export default function TableDevice({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [pageData, setPageData] = useState([]);
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    const number = parseFloat(newItemsPerPage);
    setItemsPerPage(number);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getCurrentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPageData(data.slice(startIndex, endIndex));
  }, [data, currentPage, itemsPerPage]);

  const NestedRow = ({ item }) => {
    return (
      <TableRow>
        <TableCell>{item.data}</TableCell>
        <TableCell>{item.device}</TableCell>
        <TableCell>{item.status}</TableCell>
        <TableCell>{`${item.country}/${item.city}`}</TableCell>
        <TableCell>{item.ipAddress}</TableCell>
        <TableCell>{item.action}</TableCell>
      </TableRow>
    );
  };

  const renderData = (data) => {
    return data.map((item, index) => {
      if (item.children && item.children.length > 0) {
        return (
          <Row key={index} item={item}>
            {item.children}
          </Row>
        );
      } else {
        return <NestedRow key={index} item={item} />;
      }
    });
  };

  return (
    <>
      <Table>
        <TableHeaderDevices>
          <tr>
            <TableHeader>DATA</TableHeader>
            <TableHeader>DEVICE</TableHeader>
            <TableHeader>STATUS</TableHeader>
            <TableHeader>COUNTRY/CITY</TableHeader>
            <TableHeader>IP ADDRESS</TableHeader>
            <TableHeader>ACTION</TableHeader>
          </tr>
        </TableHeaderDevices>

        <tbody>{renderData(pageData)}</tbody>
      </Table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />
    </>
  );
}
