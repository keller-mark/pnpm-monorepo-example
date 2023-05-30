import { add } from '@pnpm-monorepo-example/utils';

export function MyComponent(props) {
  const { a, b, color } = props;
  return (
    <p style={{ color }}>
      {a}+{b}+3={add(a, b, 3)}
    </p>
  );
}
