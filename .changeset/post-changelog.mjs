import fs from 'node:fs';
import { join } from 'node:path';

// TODO: update in vitessce
const newChangelog = fs.readFileSync(join('packages', 'main', 'CHANGELOG.md'));
const fullChangelog = fs.readFileSync('CHANGELOG.md');

fs.writeFileSync('CHANGELOG.md', newChangelog + '\n\n' + fullChangelog);