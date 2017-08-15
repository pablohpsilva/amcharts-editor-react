import React from 'react';
import './Item.css';

export default ({ children, id, onClick }) => {
  const removeItem = () => onClick(id - 1)

  return (
    <li className="Item-wrapper">
      <div>
        {children}
      </div>
      <button onClick={removeItem}>close</button>
    </li>
  );
}
