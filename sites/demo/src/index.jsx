import React from 'react';
import { createRoot } from 'react-dom/client';
import { MyComponent } from 'pnpm-ts-react-example';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyComponent color="green" a={1} b={2} />);
