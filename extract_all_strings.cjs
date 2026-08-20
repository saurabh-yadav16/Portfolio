const https = require('https');

https.get('https://portfolio-six-umber-90.vercel.app/assets/index-BgmlvCyg.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const textSnippets = new Set();
    const regex = /['`"]([^'`"]{4,120})['`"]/g;
    let m;
    while ((m = regex.exec(data)) !== null) {
      const s = m[1].trim();
      if (!s.includes('http') && !s.includes('/') && !s.includes('\\') && !s.includes('{') && !s.includes('}') && !s.includes('=')) {
        if (/^[A-Z][a-zA-Za-z0-9\s,\.\-!\?\(\)]+$/.test(s)) {
          textSnippets.add(s);
        }
      }
    }
    console.log('Found UI labels/phrases:', Array.from(textSnippets).slice(0, 100));
  });
});
