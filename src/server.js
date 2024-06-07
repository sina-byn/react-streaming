import chalk from 'chalk';
import express from 'express';

// * initialization
import { config as env } from 'dotenv';

env();
const app = express();
const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(chalk.blueBright(`Server running at http://localhost:${port}`));
});
