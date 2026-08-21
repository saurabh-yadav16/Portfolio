const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate valid raw PDF stream matching the exact updated uploaded resume layout
const pdfContent = `%PDF-1.4
1 0 obj <</Type /Catalog /Pages 2 0 R>> endobj
2 0 obj <</Type /Pages /Kids [3 0 R] /Count 1>> endobj
3 0 obj <</Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources <</Font <</F1 5 0 R /F2 6 0 R>>>> >> endobj
4 0 obj <</Length 2100>> stream
BT
/F2 24 Tf
50 740 Td (Saurabh Yadav) Tj
/F1 9.5 Tf
0 -18 Td (+91-8052680534  |  saurabhyadav082005@gmail.com  |  LinkedIn  |  GitHub  |  Portfolio) Tj
0 -25 Td /F2 12 Tf (Professional Summary) Tj
0 -15 Td /F1 9 Tf (Computer Science undergraduate and aspiring Software Engineer with experience in full-stack and backend development using Java,) Tj
0 -12 Td (JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, and REST APIs. Proficient in Data Structures Algorithms, OOP,) Tj
0 -12 Td (DBMS, algorithm design, time and space complexity, and computational optimization. Built secure, scalable web applications) Tj
0 -12 Td (featuring JWT authentication, role-based authorization, real-time communication, and database-driven REST APIs.) Tj
0 -22 Td /F2 12 Tf (Education) Tj
0 -15 Td /F2 10 Tf (IMS Engineering College) Tj
250 0 Td (October 2023 - July 2027) Tj
-250 -12 Td /F1 9.5 Tf (Bachelor of Technology in Computer Science Engineering) Tj
250 0 Td (Ghaziabad, Uttar Pradesh) Tj
-250 -22 Td /F2 12 Tf (Projects) Tj
0 -15 Td /F2 10 Tf (SyncParty) Tj
200 0 Td (GitHub | Live) Tj
-200 -12 Td /F1 8.5 Tf (React.js, Node.js, Express.js, MongoDB, Socket.IO, Tailwind CSS, JWT) Tj
0 -11 Td (- Built a full-stack MERN application with synchronized YouTube playback and real-time chat using Socket.IO, supporting 10+ concurrent users.) Tj
0 -11 Td (- Implemented JWT authentication, password-protected rooms, and RBAC across 2 user roles (Host and Participant), with 4 MongoDB data models.) Tj
0 -11 Td (- Created a responsive React.js + Tailwind CSS interface with dark mode, room management, and real-time event handling across 3+ core features.) Tj
0 -16 Td /F2 10 Tf (FoodCare) Tj
200 0 Td (GitHub | Live) Tj
-200 -12 Td /F1 8.5 Tf (React.js, Node.js, Express.js, MongoDB, Mongoose, Socket.IO, JWT, REST APIs, GeoJSON, Vite) Tj
0 -11 Td (- Architected a full-stack MERN food redistribution platform connecting 3 user roles: restaurants, NGOs, and volunteers.) Tj
0 -11 Td (- Secured REST APIs with Express.js, JWT, RBAC, and Socket.IO, enabling real-time donation updates across 3 role-specific dashboards.) Tj
0 -11 Td (- Integrated MongoDB GeoJSON geospatial queries into a 4+ stage workflow covering donation creation, NGO matching, pickup, and delivery.) Tj
0 -16 Td /F2 10 Tf (AI Interview Coach) Tj
200 0 Td (GitHub | Live) Tj
-200 -12 Td /F1 8.5 Tf (React.js, Vite, Node.js, Express.js, REST APIs, OpenAI API, MongoDB, JWT, bcrypt, MongoDB Atlas) Tj
0 -11 Td (- Designed a full-stack MERN AI Interview Coach integrating the OpenAI API for 3 core AI features: mock interviews, question generation, ATS.) Tj
0 -11 Td (- Implemented an AI evaluation system across 5 performance metrics: correctness, technical depth, completeness, relevance, clarity.) Tj
0 -11 Td (- Configured secure REST API workflows using JWT and bcrypt with MongoDB Atlas, enabling analytics and 7-day improvement plans.) Tj
0 -22 Td /F2 12 Tf (Technical Skills) Tj
0 -15 Td /F2 9 Tf (Languages: ) Tj
65 0 Td /F1 8.5 Tf (Java, JavaScript, TypeScript, C, SQL, HTML5, CSS3) Tj
-65 -12 Td /F2 9 Tf (Frontend: ) Tj
65 0 Td /F1 8.5 Tf (React.js, Tailwind CSS, EJS, Responsive Web Design) Tj
-65 -12 Td /F2 9 Tf (Backend: ) Tj
65 0 Td /F1 8.5 Tf (Node.js, Express.js, REST APIs, Socket.IO) Tj
-65 -12 Td /F2 9 Tf (Databases: ) Tj
65 0 Td /F1 8.5 Tf (MongoDB, MySQL, MongoDB Atlas, Mongoose, Prisma, Database Design) Tj
-65 -12 Td /F2 9 Tf (Authentication: ) Tj
75 0 Td /F1 8.5 Tf (JWT, Role-Based Access Control (RBAC), GitHub OAuth, bcrypt) Tj
-75 -12 Td /F2 9 Tf (Tools: ) Tj
65 0 Td /F1 8.5 Tf (Git, GitHub, VS Code, Postman, IntelliJ IDEA, Vite) Tj
-65 -12 Td /F2 9 Tf (Core CS: ) Tj
65 0 Td /F1 8.5 Tf (Data Structures Algorithms (Java), Object-Oriented Programming (OOP), Database Management Systems (DBMS), OS, CN) Tj
-65 -22 Td /F2 12 Tf (Certifications) Tj
0 -15 Td /F1 8.5 Tf (- Exploratory Data Analysis - NASSCOM | 2026) Tj
0 -11 Td (- Full Stack Development with MERN - NASSCOM Foundation | 2026) Tj
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
0000002405 00000 n 
0000002476 00000 n 
trailer <</Size 7 /Root 1 0 R>>
startxref
2552
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'Saurabh_Yadav_Resume.pdf'), pdfContent);
console.log('Exact updated resume PDF generated in public/Saurabh_Yadav_Resume.pdf');
