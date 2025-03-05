// HeadlessTable.jsx
import React, { useState } from 'react';

const HeadlessTable = ({ columns, data, children }) => {
    const [sortConfig, setSortConfig] = useState(null);

    const sortedData = [...data]; //copy data
    //check if sort config is null
    if (sortConfig !== null) { 
        //if config not null, invoke sort function on sortedData and compare the arrays' elements with each other
       
        sortedData.sort((a, b) => {
            //compare to determine their order in terms of descending...
             //e.g. (a[sortConfig.key] < b[sortConfig.key]  where a = { name: 'Alice', age: 25 } and b =  { name: 'Bob', age: 30 } and sortConfig.key = name or age
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            //... and ascending
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }

    //Create a sort config for the above
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return children({
        columns,
        sortedData,
        requestSort,
        sortConfig
    });
};

export { HeadlessTable };

/*// TableComponent.jsx
import React from 'react';
import { HeadlessTable } from './HeadlessTable';

const TableComponent = () => {
  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
  ];

  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
  ];

  return (
    <HeadlessTable columns={columns} data={data}>
      {({ columns, sortedData, requestSort, sortConfig }) => (
        <table>
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.key} onClick={() => requestSort(column.key)}>
                  {column.label}
                  {sortConfig && sortConfig.key === column.key ? (sortConfig.direction === 'ascending' ? ' ↑' : ' ↓') : ''}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                {columns.map(column => (
                  <td key={column.key}>{item[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </HeadlessTable>
  );
};

export default TableComponent;
 */