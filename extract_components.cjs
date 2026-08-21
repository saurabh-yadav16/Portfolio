const fs = require('fs');

const bundlePath = 'C:\\Users\\Saurabh Yadav\\.gemini\\antigravity\\brain\\ebf10eac-d9a8-4a96-bcaa-b4ecb35ac810\\.system_generated\\steps\\67\\content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

console.log("Total bundle length:", content.length);
const tail = content.slice(-60000);

console.log("Tail preview:");
fs.writeFileSync('C:\\Users\\Saurabh Yadav\\.gemini\\antigravity\\scratch\\saurabh-yadav-portfolio\\dump_bundle_text.cjs', tail);
console.log("Dumped tail of 60,000 bytes!");
