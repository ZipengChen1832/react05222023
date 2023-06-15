import React from "react";

function Count() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>count:{count}</h1>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
}

export default Count;
