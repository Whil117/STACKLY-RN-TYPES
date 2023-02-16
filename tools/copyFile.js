var fs = require('fs');
fs.copyFile('main.ts', 'index.ts', (err) => {
  if (err) throw err;
  console.log('export.ts was copied successfully');
});