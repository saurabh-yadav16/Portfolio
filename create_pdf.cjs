const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const pdfContent = `%PDF-1.4
1 0 obj <</Type /Catalog /Pages 2 0 R>> endobj
2 0 obj <</Type /Pages /Kids [3 0 R] /Count 1>> endobj
3 0 obj <</Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources <</Font <</F1 5 0 R>>>> >> endobj
4 0 obj <</Length 420>> stream
BT
/F1 22 Tf
50 730 Td (Saurabh Yadav) Tj
/F1 12 Tf
0 -25 Td (Computer Science Undergraduate | Full-Stack Developer | Software Engineer) Tj
0 -18 Td (Email: saurabhyadav082005@gmail.com | Phone: +91-8052680534 | Ghaziabad, UP) Tj
0 -25 Td /F1 14 Tf (Education:) Tj
0 -18 Td /F1 11 Tf (B.Tech in Computer Science Engineering - IMS Engineering College, Ghaziabad (Oct 2023 - July 2027)) Tj
0 -25 Td /F1 14 Tf (Key Skills:) Tj
0 -18 Td /F1 11 Tf (Languages: C, Java, JavaScript, TypeScript | Web: React.js, Node.js, Express.js, Socket.IO) Tj
0 -16 Td (Databases: MongoDB, MySQL | Tools: Git, GitHub, VS Code, Postman) Tj
0 -25 Td /F1 14 Tf (Projects:) Tj
0 -18 Td /F1 11 Tf (1. SyncParty - Real-Time Synced YouTube Watch Platform (React, Node, Socket.IO, MongoDB)) Tj
0 -16 Td (2. Food Waste Management System (React, Express, GeoJSON, Socket.IO, MongoDB)) Tj
0 -16 Td (3. Forkfu-Food Web (React 19, Redux Toolkit, React Router)) Tj
ET
endstream endobj
5 0 obj <</Type /Font /Subtype /Type1 /BaseFont /Helvetica>> endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000716 00000 n 
trailer <</Size 6 /Root 1 0 R>>
startxref
787
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'Saurabh_Yadav_Resume.pdf'), pdfContent);
console.log('Valid PDF created successfully!');
