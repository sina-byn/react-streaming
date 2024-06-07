import * as React from 'react';

// * components
import List from './List';

const App = () => {
  return (
    <main>
      this is the app component
      <React.Suspense fallback={<div>Loading the List...</div>}>
        <List />
      </React.Suspense>
    </main>
  );
};

export default App;
