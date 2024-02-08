// Examples.jsx
import React, { useState } from 'react'
import { useQuery } from 'react-query'

// Function to fetch posts from JSONPlaceholder API
const fetchUserData = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
}

function ConditionalFetchingExample() {
  const [userId, setUserId] = useState(1); 

  const { data: user, isLoading, error } = useQuery(['user', userId], () => fetchUserData(userId), {
    enabled: userId !== null, 
  });

  if (isLoading) return <div>Loading ...</div>; 
  if (error) return <div>An error has occured: {error.message}</div>; 

  return (
    <div>
        <h2>User Details</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>

        <button onClick={() => setUserId(userId + 1)}>
          Load Next User 
        </button>
    </div>
  )
}

export default ConditionalFetchingExample