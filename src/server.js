import chalk from 'chalk';
import express from 'express';
import { config as env } from 'dotenv';

import * as React from 'react';
import { renderToPipeableStream } from 'react-dom/server';

// * components
import Html from './client/Html';
import App from './client/App';

// * initialization
env();
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'));

app.get('/', (_req, res) => {
  const stream = renderToPipeableStream(
    <Html>
      <App />
    </Html>,
    {
      onShellReady() {
        stream.pipe(res);
      },
    }
  );
});

app.listen(port, () => {
  console.log(chalk.blueBright(`Server running at http://localhost:${port}`));
});
