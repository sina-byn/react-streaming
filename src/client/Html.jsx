import * as React from 'react';

const Html = ({ children }) => {
  return (
    <html>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Document</title>
      </head>
      <body>
        <div id='app'>{children}</div>
      </body>
    </html>
  );
};

export default Html;
