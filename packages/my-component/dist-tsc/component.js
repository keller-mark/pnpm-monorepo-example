import { jsxs as _jsxs } from "react/jsx-runtime";
import { add } from '@pnpm-ts-react-example/utils';
export function MyComponent(props) {
    const { a, b, color } = props;
    return (_jsxs("p", { style: { color }, children: [a, "+", b, "+3=", add(a, b, 3)] }));
}
