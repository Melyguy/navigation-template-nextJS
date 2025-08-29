#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const project_name = process.argv[2];

if (!project_name) {
  console.error('Please specify the project directory:');
  console.log('  create-navigation-template <project-directory>');
  process.exit(1);
}

const template_path = path.join(__dirname, 'template');
const destination_path = path.join(process.cwd(), project_name);

if (fs.existsSync(destination_path)) {
    console.error(`Error: Directory "${project_name}" already exists.`);
    process.exit(1);
}

console.log(`Creating a new app in ${destination_path}...`);

try {
  fs.copySync(template_path, destination_path);
  console.log('Success! Your project is ready.');
  console.log('Next steps:');
  console.log(`  cd ${project_name}`);
  console.log('  bun/npm install');
  console.log('  bun/npm dev');
} catch (err) {
  console.error('Failed to create project:', err);
  process.exit(1);
}