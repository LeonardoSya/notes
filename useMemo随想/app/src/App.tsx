import React, { useState } from 'react';

const Page = () => <div>hey</div>;
const PageMemoized = React.memo(Page);

const App = () => {
  const [state, setState] = useState(1);

  return (
    <div>

      <button onClick={() => setState(state + 1)}>
        click to re-render {state}
      </button>

      {/* 现在Page会受到button的? React.memo */}
      <PageMemoized />
    </div>

  );
}

export default App;