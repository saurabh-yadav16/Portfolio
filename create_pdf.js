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
4 0 obj <</Length 350>> stream
BT
/F1 22 Tf
50 720 Td (Saurabh Yadav) Tj
/F1 14 Tf
0 -25 Td (Full-Stack Developer | Software Engineer) Tj
0 -20 Td (Email: saurabhyadav082005@gmail.com | Phone: +91-8052680534) Tj
0 -20 Td (Education: B.Tech in CSE - IMS Engineering College, Ghaziabad (2023 - 2027)) Tj
0 -30 Td /F1 16 Tf (Technical Skills:) Tj
0 -20 Td /F1 12 Tf (Languages: C, Java, JavaScript, TypeScript) Tj
0 -18 Td (Frontend: React.js, Tailwind CSS, HTML5, CSS3, Redux Toolkit) Tj
0 -18 Td (Backend: Node.js, Express.js, REST APIs, Socket.IO) Tj
0 -18 Td (Databases: MongoDB, MySQL) Tj
0 -30 Td /F1 16 Tf (Projects:) Tj
0 -20 Td /F1 12 Tf (1. SyncParty - Real-Time Synced YouTube Watch Platform) Tj
0 -18 Td (2. Food Waste Management System - Real-Time Donation Platform) Tj
0 -18 Td (3. Forkfu-Food Web - Responsive Food Ordering Application) Tj
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
0000000646 00000 n 
trailer <</Size 6 /Root 1 0 R>>
startxref
717
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'Saurabh_Yadav_Resume.pdf'), pdfContent);
console.log('PDF created successfully!');
