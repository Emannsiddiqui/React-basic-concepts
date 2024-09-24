import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);  // State for storing fetched data
  const [loading, setLoading] = useState(true);  // State to show loading

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);  // Set the fetched data in the state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array means this useEffect runs only once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
