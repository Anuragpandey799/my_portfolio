import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');
  const [isReturningUser, setIsReturningUser] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem('visitorName');
    if (savedName) {
      setName(savedName);
      setIsReturningUser(true);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameSubmit = () => {
    localStorage.setItem('visitorName', name);
    setIsReturningUser(true);
  };

  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-2 mb-2 z-10 absolute w-full">
      {isReturningUser ? (
        <h2 className="text-xl font-bold mb-2">
          Welcome back, {name}!
          {setgreet(false)}
        </h2>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2">
            Hello! What's your name?
          </h2>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="border rounded px-4 py-2 mb-2"
            placeholder="Enter your name"
          />
          <button
            onClick={handleNameSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default Greeting;
