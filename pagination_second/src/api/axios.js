import axios from 'axios';

// axios.create is a feature within Axios used to create a new instance with a custom configuration.
// With axios.create, we can generate a client for any API and reuse
// the configuration for any calls using the same client

export const axiosOne = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// inside a getPosstsPage func we are passing pageParam, and if it doesnt get passed in, it defaults to 1

export const getPostsPage = async (pageParam = 1) => {
  const response = await axiosOne.get(`/posts?_page=${pageParam}`);
  return response.data;
};

export const axiosTwo = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const getUsersPage = async (pageParam = 1) => {
  const response = await axiosTwo.get(`/users?page=${pageParam}`);
  return response.data;
};
