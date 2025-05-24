Skottbörsen - Backend

1. Kör `npm install express mongoose cors dotenv multer jsonwebtoken`
2. Starta MongoDB lokalt (eller byt MONGO_URI i .env)
3. Kör `node server.js` för att starta API på http://localhost:5000

- POST /api/ads - Skapa annons (multipart/form-data med fält + bilder)
- GET /api/ads - Hämta alla annonser
- POST /api/users/login - Logga in (skicka { username })

Bilder lagras i /uploads och nås via /uploads/filnamn