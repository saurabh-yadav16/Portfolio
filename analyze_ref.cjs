const https = require('https');

https.get('https://portfolio-six-umber-90.vercel.app/assets/index-BgmlvCyg.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('JS Bundle length:', data.length);
    // Find headings, section names, button texts, classes
    const headings = data.match(/h[1-6][^>]*>([^<]+)</gi) || [];
    console.log('Headings:', headings);
    
    // Find JSX elements or key texts
    const textSnippets = [];
    const regex = />([^<]{3,80})</g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      const text = match[1].trim();
      if (text && !text.includes('{') && !text.includes('function') && !text.includes('var') && text.length > 5) {
        textSnippets.push(text);
      }
    }
    console.log('Unique Text Snippets (first 50):', [...new Set(textSnippets)].slice(0, 50));
  });
});
