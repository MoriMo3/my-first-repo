import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning === false) {
      return;
    }

    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className='timer-page'>
      <div className='timer-box'>
        <h1>タイマー</h1>

        <p className='timer-count'>{count}</p>

        <button onClick={stopTimer}>ストップ</button>
      </div>
    </div>
  );
};

export default Timer;