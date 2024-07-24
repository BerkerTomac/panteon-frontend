import React from 'react';
import { useTable, useSortBy } from 'react-table';
import './ConfigurationTable.css';

const ConfigurationTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Building Type',
        accessor: 'buildingType',
        Cell: ({ cell: { value } }) => (
          <span className={`building-type ${value ? value.toLowerCase() : ''}`}>{value}</span>
        ),
      },
      {
        Header: 'Building Cost',
        accessor: 'buildingCost',
      },
      {
        Header: 'Construction Time',
        accessor: 'constructionTime',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ' 🔼'}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ConfigurationTable;
