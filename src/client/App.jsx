import * as React from 'react';

// * components
import List from './List';
import Counter from './Counter';

const App = () => {
  return (
    <main>
      <p style={{ marginBottom: '1rem' }}>this is the app component</p>
      <Counter />
      <React.Suspense
        fallback={
          <div style={{ marginTop: '1rem' }}>Loading the List...</div>
        }
      >
        <List />
      </React.Suspense>
    </main>
  );
};

export default App;
