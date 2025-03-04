import * as sass from 'sass';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mainScssPath = path.join(__dirname, 'src', 'styles', 'main.scss');

try {
  const result = sass.compile(mainScssPath, { style: "expanded" });
  console.log('SASS compilation successful!');
} catch (error) {
  console.error('SASS compilation failed. Errors:');
  if (error.formatted) {
    console.error(error.formatted);
  } else {
    console.error(error.message);
    console.error(error.stack);
  }
}
