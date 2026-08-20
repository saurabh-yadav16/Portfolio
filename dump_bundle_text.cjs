const https = require('https');

https.get('https://portfolio-six-umber-90.vercel.app/assets/index-BgmlvCyg.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find all JSX text nodes in the bundle
    const texts = [];
    const reg = />([^<]{2,200})</g;
    let m;
    while ((m = reg.exec(data)) !== null) {
      const txt = m[1].trim();
      if (txt && !txt.startsWith('function') && !txt.startsWith('var') && !txt.includes('const') && !txt.includes('==') && !txt.includes('=>') && !txt.includes('{')) {
        texts.push(txt);
      }
    }
    console.log('--- ALL UI TEXT NODES IN REFERENCE PORTFOLIO ---');
    console.log(texts.filter(t => t.length > 3).join('\n'));
  });
});
