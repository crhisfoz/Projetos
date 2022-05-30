import React from 'react';
import { StylePagination } from './style';

const max_Items = 9;
const max_Left = (max_Items- 1) / 2;

export const Pagination = ({limit,totalPages,offset,setOffset}) => {

  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(totalPages / limit);
  const maxFirst = Math.max(pages - (max_Items - 1), 1);
  const first = Math.min( Math.max(current - max_Left, 1),
    maxFirst
  );

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
      <StylePagination>
    <ul className="pagination">
      <li>
        <button id='button-prev'
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Anterior
        </button>
      </li>
      {Array.from({ length: Math.min(max_Items, totalPages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={
                page === current
                  ? 'pagination__item--active'
                  : null
              }
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button id='button-next'
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Próxima
        </button>
      </li>
    </ul>
    </StylePagination>
  );
};

