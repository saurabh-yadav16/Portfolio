const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate valid raw PDF stream matching the exact uploaded resume layout
const pdfContent = `%PDF-1.4
1 0 obj <</Type /Catalog /Pages 2 0 R>> endobj
2 0 obj <</Type /Pages /Kids [3 0 R] /Count 1>> endobj
3 0 obj <</Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources <</Font <</F1 5 0 R /F2 6 0 R>>>> >> endobj
4 0 obj <</Length 1850>> stream
BT
/F2 24 Tf
50 740 Td (Saurabh Yadav) Tj
/F1 10 Tf
0 -18 Td (+91-8052680534  |  saurabhyadav082005@gmail.com  |  LinkedIn  |  GitHub) Tj
0 -25 Td /F2 12 Tf (Professional Summary) Tj
0 -15 Td /F1 9 Tf (Computer Science undergraduate with hands-on experience building full-stack web applications using React, TypeScript, Node.js,) Tj
0 -12 Td (Express.js, MySQL, and Prisma. Seeking Software Engineer and Full-Stack Developer roles, with a strong foundation in Data) Tj
0 -12 Td (Structures and Algorithms, Object-Oriented Programming, Database Management Systems, and problem solving. Built AI powered) Tj
0 -12 Td (developer tools with secure authentication, GitHub integration, and reliable backend workflows.) Tj
0 -22 Td /F2 12 Tf (Education) Tj
0 -15 Td /F2 10 Tf (IMS Engineering College) Tj
250 0 Td (October 2023 - July 2027) Tj
-250 -12 Td /F1 9.5 Tf (B.Tech in Computer Science Engineering) Tj
250 0 Td (Ghaziabad, Uttar Pradesh) Tj
-250 -22 Td /F2 12 Tf (Projects) Tj
0 -15 Td /F2 10 Tf (SyncParty - Real-Time Synced YouTube Watch Platform) Tj
0 -12 Td /F1 9 Tf (React.js, Node.js, Express.js, MongoDB, Socket.IO, Tailwind CSS, JWT) Tj
0 -12 Td (- Built a full-stack MERN watch-party platform with synchronized YouTube playback and real-time chat.) Tj
0 -11 Td (- Implemented JWT authentication, password-protected rooms, and role-based access control for hosts and participants.) Tj
0 -11 Td (- Designed MongoDB persistence for users, rooms, chat history, and collaboration data to support reliable multi-user sessions.) Tj
0 -11 Td (- Developed a responsive React and Tailwind CSS interface with dark mode, room management, and real-time Socket.IO events.) Tj
0 -18 Td /F2 10 Tf (Food Waste Management System) Tj
0 -12 Td /F1 9 Tf (React.js, Node.js, Express.js, MongoDB, Mongoose, Socket.IO, JWT, REST API, GeoJSON, Vite) Tj
0 -12 Td (- Developed a real-time food waste management platform connecting restaurants, NGOs, and volunteers to streamline food donation.) Tj
0 -11 Td (- Implemented JWT authentication, Role-Based Access Control (RBAC), REST APIs, and Socket.IO for secure access and updates.) Tj
0 -11 Td (- Built geospatial food matching using MongoDB GeoJSON, enabling NGOs and volunteers to discover nearby food donations.) Tj
0 -11 Td (- Designed an end-to-end donation-to-delivery workflow with real-time notifications and status tracking.) Tj
0 -18 Td /F2 10 Tf (Forkfu-Food Web) Tj
0 -12 Td /F1 9 Tf (React 19, Redux Toolkit, React Router, JavaScript, HTML5, CSS3, Vite) Tj
0 -12 Td (- Developed a responsive food-ordering application using React, Redux Toolkit, and React Router.) Tj
0 -11 Td (- Implemented menu search and filters, cart management, checkout validation, authentication, and editable user profiles.) Tj
0 -11 Td (- Created user-specific order history and persistent cart and account data using Local Storage.) Tj
0 -22 Td /F2 12 Tf (Technical Skills) Tj
0 -15 Td /F2 9.5 Tf (Languages: ) Tj
65 0 Td /F1 9 Tf (C, Java, JavaScript; Data Structures and Algorithms with Java) Tj
-65 -12 Td /F2 9.5 Tf (Frontend: ) Tj
65 0 Td /F1 9 Tf (React.js, Tailwind CSS, HTML5, CSS3, EJS, Responsive UI Development) Tj
-65 -12 Td /F2 9.5 Tf (Backend: ) Tj
65 0 Td /F1 9 Tf (Node.js, Express.js, REST APIs, Socket.IO) Tj
-65 -12 Td /F2 9.5 Tf (Databases: ) Tj
65 0 Td /F1 9 Tf (MongoDB, MySQL, Database Design, Persistent Storage) Tj
-65 -12 Td /F2 9.5 Tf (Authentication: ) Tj
75 0 Td /F1 9 Tf (JWT, GitHub OAuth) Tj
-75 -12 Td /F2 9.5 Tf (Tools: ) Tj
65 0 Td /F1 9 Tf (Git, GitHub, VS Code, Postman, IntelliJ IDEA) Tj
-65 -12 Td /F2 9.5 Tf (Coursework: ) Tj
65 0 Td /F1 9 Tf (Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks) Tj
-65 -22 Td /F2 12 Tf (Certifications) Tj
0 -15 Td /F1 9 Tf (- Exploratory Data Analysis - Nasscom (2026)) Tj
0 -12 Td (- Full Stack Development with MERN - Nasscom Foundation (2026)) Tj
ET
endstream endobj
5 0 obj <</Type /Font /Subtype /Type1 /BaseFont /Helvetica>> endobj
6 0 obj <</Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold>> endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000252 00000 n 
0000002155 00000 n 
0000002226 00000 n 
trailer <</Size 7 /Root 1 0 R>>
startxref
2302
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'Saurabh_Yadav_Resume.pdf'), pdfContent);
console.log('Exact uploaded resume PDF generated in public/Saurabh_Yadav_Resume.pdf');
