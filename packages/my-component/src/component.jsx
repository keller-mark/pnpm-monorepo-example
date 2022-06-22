import React from 'react';
import { add } from "@pnpm-ts-react-example/core";

export function MyComponent(props) {
  const { a, b, color } = props;
  return (
    <p style={{ color }}>{a}+{b}={add(a, b)}</p>
  );
}
