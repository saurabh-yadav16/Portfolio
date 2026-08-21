const fs = require('fs');

const bundlePath = 'C:\\Users\\Saurabh Yadav\\.gemini\\antigravity\\brain\\ebf10eac-d9a8-4a96-bcaa-b4ecb35ac810\\.system_generated\\steps\\67\\content.md';
const content = fs.readFileSync(bundlePath, 'utf8');

// Look for object literals or JSX text inside bundle
const matches = content.match(/[\{\[\`"][^\{\}\[\]\`"]*(?:Saurabh|SyncParty|FoodCare|Interview|Education|Skills|Contact|IMS|React|Node|Tailwind|MERN|Projects|Experience|Certifications|Github|Live|About)[^\{\}\[\]\`"]*[\`"\}\]]/gi) || [];

console.log("Found matches count:", matches.length);
matches.slice(0, 80).forEach((m, idx) => {
  console.log(`\n--- Match ${idx+1} ---`);
  console.log(m.slice(0, 300));
});
