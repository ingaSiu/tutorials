import { useQuery } from 'react-query';
import { getUsersPage } from '../api/axios';
import { useState } from 'react';
import User from '../components/User';
import PageButton from '../components/PageButton';

const Example2 = () => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data: users,
    isFetching,
    isPreviousData,
  } = useQuery(['/users', page], () => getUsersPage(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading users...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  const content = users.data.map((user) => <User key={user.id} user={user} />);

  const lastPage = () => setPage(users.total_pages);
  const firstPage = () => setPage(1);

  const pagesArray = Array(users.total_pages)
    .fill()
    .map((_, index) => index + 1);

  const nav = (
    <nav className="nav-ex2">
      <button onClick={firstPage} disabled={isPreviousData || page === 1}>
        &lt;&lt;
      </button>
      {pagesArray.map((pg) => (
        <PageButton key={pg} pg={pg} setPage={setPage} isPreviousData={isPreviousData} />
      ))}
      <button onClick={lastPage} disabled={isPreviousData || page === users.total_pages}>
        &lt;&lt;
      </button>
    </nav>
  );

  return (
    <>
      {nav}
      {isFetching && <span className="loading">Loading...</span>}
      {content}
    </>
  );
};

// pagesArray => creates menu that gives us page numbers at the top =>
// we create a new Array based on total pages value
// it ignores the first parameter at map, and uses index instead, since index starts from 0
// we need to start it from 1, so index +1

export default Example2;
