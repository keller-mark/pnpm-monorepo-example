import { add } from '@pnpm-ts-react-example/utils';

export function MyComponent(props) {
  const { a, b, color } = props;
  return (
    <p style={{ color }}>
      {a}+{b}={add(a, b, 1)}
    </p>
  );
}
