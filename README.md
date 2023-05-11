# pnpm-ts-react-example

Opinionated toy example of monorepo that has the following things:
- Sub-packages published to NPM as JS libraries
  - JSX support for React
  - Web Worker example
  - SVG example
  - Both JS and TS sub-packages
- Sub-applications that import the sub-packages during development:
  - Simple development demo website
  - Docusaurus documentation website
- Testing and continuous integration
  - GitHub Actions workflows
  - Vitest for unit testing
  - Cypress for integration/end-to-end testing
  - Bundle size check action
- Changesets for automated releases and changelog updates

## Usage

```sh
npm install pnpm-ts-react-example
```

## Development

Install pnpm v7

### Setup

```sh
git clone 
pnpm install
```

### Run demo

```sh
pnpm start
```

### Lint and format

```sh
pnpm lint
pnpm format
```

### Build library

```sh
pnpm build
```

### Build demo

```sh
pnpm build-demo
```

### Monorepo tasks

```sh
pnpm meta-updater
```

## Deployment
