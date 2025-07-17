'use client'

import { useMemo } from "react";

interface PaginationProps {
  start: number;
  limit: number;
  onChangePage: (page: number) => void;
  onChangeRow: (row: number) => void;
}

const ROWS = [5, 10, 15, 20, 25, 50];

const Pagination = ({
  start,
  limit,
  onChangePage,
  onChangeRow
}: PaginationProps) => {
  const buttonStyle = `cursor-pointer text-sm border-gray-300 text-gray-800 border rounded-md py-1 px-2 flex items-center justify-center gap-2 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-default`;

  const totalPage = Math.ceil(200 / limit);

  const visiblePages = useMemo(() => {
    let startPage = Math.max(1, start - 1);
    const endPage = Math.min(totalPage, startPage + 2);

    if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2);
    }

    const pages = [];

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  },[start, totalPage]);

  const handlePrev = () => {
    if (start > 1) {
      onChangePage(start - 1);
    }
  }

  const handleNext = () => {
    if (start < totalPage) {
      onChangePage(start + 1);
    }
  }

  const handleChangeRow = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Number(e.target.value);

    onChangeRow(values);
    onChangePage(1);
  }

  return (
    <div className="flex justify-between items-center mt-8 w-full">
      <div className="flex items-center gap-2">
        <p className="text-sm text-neutral-800">Result per page:</p>
        <select 
          value={limit} 
          onChange={handleChangeRow}
          className="border border-gray-400 h-[30px] rounded text-sm"
        >
          {
            ROWS.map((row) => 
              <option value={row} key={row}>{row}</option>
            )
          }
        </select>
      </div>
      <div className="flex justify-end items-center gap-3">
        <button 
          className={buttonStyle} 
          type="button" 
          onClick={handlePrev}
          disabled={start == 1}
        >
          <span className="font-medium text-xs">
            {"<"}
          </span>
          Back
        </button>
        <div className="flex gap-1">
          {
            visiblePages.map((page) => (
              <PaginationItem 
                page={page} 
                active={page === start} 
                key={page} 
                onChangePage={onChangePage}
              />
            ))
          }
        </div>
        <button 
          className={buttonStyle} 
          type="button"
          onClick={handleNext}
          disabled={start == totalPage}
        >
          Next
          <span className="font-medium text-xs">
            {">"}
          </span>
        </button>
      </div>
    </div>
  )
}

interface PaginationItemProps {
  page: number;
  active?: boolean;
  onChangePage: (page: number) => void;
}

const PaginationItem = ({ 
  page,
  active,
  onChangePage,
}: PaginationItemProps) => {
  return (
    <span 
      onClick={() => onChangePage(page)}
      className={
        `cursor-pointer text-sm border w-[30px] h-[30px] flex items-center justify-center rounded ${active ? "border-gray-800 bg-gray-800 text-white font-medium" : "border-gray-100"}`
      }
    >
      {page}
    </span>
  )
}

export default Pagination;