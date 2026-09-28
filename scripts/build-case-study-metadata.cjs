// Emit a route entry so crawlers receive case-study metadata without JavaScript.
const fs = require('node:fs');
const path = require('node:path');
const metadata = require('../src/data/alertEvaluateSeo.json');
const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
let html = fs.readFileSync(path.join(__dirname, '../build/index.html'), 'utf8');
html = html.replace(/<title>.*?<\/title>/, `<title>${escape(metadata.title)}</title>`);
for (const [attribute, key, value] of [
  ['name', 'description', metadata.description],
  ['property', 'og:title', metadata.title],
  ['property', 'og:description', metadata.description],
  ['property', 'og:url', metadata.url],
  ['name', 'twitter:title', metadata.title],
  ['name', 'twitter:description', metadata.description],
]) {
  html = html.replace(new RegExp(`<meta ${attribute}="${key}"[^>]*>`), `<meta ${attribute}="${key}" content="${escape(value)}" />`);
}
html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${metadata.url}" />`);
const directory = path.join(__dirname, '../build/portfolio/alert-evaluate');
fs.mkdirSync(directory, { recursive: true });
fs.writeFileSync(path.join(directory, 'index.html'), html);
console.log('Created static AlertEvaluate route metadata.');
