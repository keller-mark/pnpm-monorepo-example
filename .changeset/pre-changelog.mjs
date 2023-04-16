// Because we only want a single changelog for the entire monorepo,
// we will manually edit the changeset frontmatter.
import matter from 'gray-matter';
import fs from 'node:fs';
import { join } from 'node:path';

const SEMVER_MAP = {
  'patch': 1,
  'minor': 2,
  'major': 3,
};

// TODO: update this to 'vitessce';
const mainPackage = 'pnpm-ts-react-example';

// Get all .md files in the .changeset directory.
const changesetFiles = fs.readdirSync('.changeset').forEach(file => {
  if(file.endsWith('.md')) {
    const filePath = join('.changeset', file);
    const changeset = matter.read(filePath);
    // Get the greatest common denominator.
    const gcd = Math.max(
      ...Object.values(changeset.data)
        .map(str => SEMVER_MAP[str])
    );
    const gcdStr = Object.keys(SEMVER_MAP).find(key => SEMVER_MAP[key] === gcd);

    // Append the affected packages to the first line of the content.
    const contentLines = changeset.content.split('\n');
    const packageInfo = Object.keys(changeset.data).map(name => '`' + name + '`').join(', ');
    contentLines[4] = `${contentLines[4]} (${packageInfo})`;
    changeset.content = contentLines.join('\n');

    // Overwrite the affected package names, replacing with the root package name.
    changeset.data = { [mainPackage]: gcdStr };
    // Write the changeset back to the file with the updated frontmatter.
    fs.writeFileSync(filePath, matter.stringify(changeset.content, changeset.data));
  }
});

