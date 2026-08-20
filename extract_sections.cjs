const https = require('https');

https.get('https://portfolio-six-umber-90.vercel.app/assets/index-BgmlvCyg.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for JSX definitions or objects with id, title, label, etc.
    const ids = data.match(/id:\s*["']([^"']+)["']/g) || [];
    console.log('IDs found in bundle:', ids);

    // Look for titles/headers
    const titles = data.match(/title:\s*["']([^"']+)["']/g) || [];
    console.log('Titles found in bundle:', titles);

    const labels = data.match(/label:\s*["']([^"']+)["']/g) || [];
    console.log('Labels found in bundle:', labels);
  });
});
