import './App.css';
import fakeData from './MOCK_DATA.json';
import { useTable } from 'react-table';
import { useMemo } from 'react';

const App = () => {
  const data = useMemo(() => fakeData, []);
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'First name',
      accessor: 'first_name',
    },
    {
      Header: 'Last name',
      accessor: 'last_name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'University',
      accessor: 'university',
    },
  ]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getTableGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

