const https = require('https');

https.get('https://portfolio-six-umber-90.vercel.app/assets/index-BPvLN6GM.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('CSS length:', data.length);
    // Find background colors, colors, font families, shadows, gradients
    const colors = data.match(/#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\)/g) || [];
    const uniqueColors = [...new Set(colors)];
    console.log('Unique colors (first 40):', uniqueColors.slice(0, 40));

    // Find class names or animation names
    const animationNames = data.match(/keyframes\s+([a-zA-Z0-9_-]+)/g) || [];
    console.log('Animations:', animationNames);
  });
});
