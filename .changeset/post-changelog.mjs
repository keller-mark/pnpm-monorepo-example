import fs from 'node:fs';
import { join } from 'node:path';

// TODO: update path once in vitessce
// Read the new changelog file,
// removing the first line since it will always
// contain the main package name.
const newChangelogLines = fs.readFileSync(join('packages', 'main', 'CHANGELOG.md'), { encoding: 'utf-8' })
  .split('\n');
newChangelogLines.splice(0, 1);
const newChangelog = newChangelogLines.join('\n');
const fullChangelog = fs.readFileSync('CHANGELOG.md');

fs.writeFileSync('CHANGELOG.md', newChangelog + '\n' + fullChangelog);