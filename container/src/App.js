import React, { Suspense } from 'react';

const App1 = React.lazy(() => import("app1/App1"));
const App2 = React.lazy(() => import("app2/App2"));

function App() {
  return (
    <div>
      <h1>Container App</h1>
      <Suspense fallback={<div>Loading App1...</div>}>
        <App1 />
      </Suspense>
      <Suspense fallback={<div>Loading App2...</div>}>
        <App2 />
      </Suspense>
    </div>
  );
}

export default App;
