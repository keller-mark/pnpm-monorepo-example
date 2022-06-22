const MATHGL_VERSION = '^3.5.6';
const LUMAGL_VERSION = '~8.5.10';
const DECKGL_VERSION = '8.6.7';
const REACT_VERSION = '^8.0.0';
const MUI_VERSION = '~4.12.3';

// Mutates package metadata in place
function pinVersions(deps = {}) {
  for (let name of Object.keys(deps)) {
    if (name.startsWith('@deck.gl/') || name === "deck.gl") {
      deps[name] = DECKGL_VERSION;
    }
    if (name.startsWith('@luma.gl/') || name === "luma.gl") {
      deps[name] = LUMAGL_VERSION;
    }
    if (name.startsWith('@math.gl/')) {
      deps[name] = MATHGL_VERSION;
    }
    if (name === 'react' || name === 'react-dom') {
      deps[name] = REACT_VERSION;
    }
    if (name.startsWith('@material-ui/')) {
      deps[name] = MUI_VERSION;
    }
  }
}

export default (workspaceDir) => {
  return {
    'package.json': (manifest, dir) => {
      pinVersions(manifest.dependencies);
      pinVersions(manifest.devDependencies);
      pinVersions(manifest.peerDependencies);
      return { ...manifest };
    },
    'tsconfig.json': (tsConfig, dir) => {
      return {
        ...tsConfig,
        compilerOptions: {
          ...tsConfig.compilerOptions,
          outDir: 'dist',
          rootDir: 'src',
        },
      };
    }
  }
}