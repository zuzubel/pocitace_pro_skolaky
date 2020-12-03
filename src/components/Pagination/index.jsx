import React from 'react';
import './style.css';

export const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => props.paginate(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
