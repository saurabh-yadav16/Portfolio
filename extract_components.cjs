const https = require('https');

https.get('https://portfolio-six-umber-90.vercel.app/assets/index-BgmlvCyg.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find string literals in JS that look like HTML tags, sections, titles, or descriptions
    const matches = [];
    const reg = /"([^"]{10,150})"/g;
    let m;
    while ((m = reg.exec(data)) !== null) {
      const str = m[1];
      if (str.includes('Software') || str.includes('Developer') || str.includes('Project') || str.includes('Education') || str.includes('Skill') || str.includes('Contact') || str.includes('About') || str.includes('Experience') || str.includes('Engineering')) {
        matches.push(str);
      }
    }
    console.log('Component text strings found:', [...new Set(matches)]);
  });
});
