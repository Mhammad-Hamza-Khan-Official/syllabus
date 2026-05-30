# ExamForge — Aptitude & MCQ Platform

A modern AI-powered aptitude and mock test platform with:
- Individual MCQ Tests
- Collaborative Live Quizzes
- PDF to Mock Test Generator
- Analytics Dashboard
- Real-time Leaderboards

---

# 🚀 Tech Stack

## Frontend
- React + Vite
- Tailwind CSS v4
- React Router
- Zustand / Context API
- Framer Motion
- Material Symbols Outlined

## Backend
- Node.js
- Express.js
- MongoDB
- Socket.io

## AI / PDF
- PDF.js
- OpenAI API / Gemini API

---

# 📁 Project Structure

examforge/
│
├── public/
│
├── src/
│
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   ├── logos/
│   │   └── animations/
│   │
│   ├── components/
│   │
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ThemeToggle.jsx
│   │   │
│   │   ├── quiz/
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── OptionCard.jsx
│   │   │   ├── QuizTimer.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── QuestionNavigator.jsx
│   │   │   ├── ReviewFlag.jsx
│   │   │   └── SubmitModal.jsx
│   │   │
│   │   ├── collaborative/
│   │   │   ├── RoomCard.jsx
│   │   │   ├── RoomCodeInput.jsx
│   │   │   ├── ParticipantList.jsx
│   │   │   ├── LiveLeaderboard.jsx
│   │   │   ├── ChatBox.jsx
│   │   │   ├── RoomHeader.jsx
│   │   │   └── LiveQuestion.jsx
│   │   │
│   │   ├── pdf/
│   │   │   ├── PdfUploader.jsx
│   │   │   ├── ExtractionPreview.jsx
│   │   │   ├── McqEditor.jsx
│   │   │   ├── GenerateButton.jsx
│   │   │   └── QuestionPreview.jsx
│   │   │
│   │   ├── analytics/
│   │   │   ├── ScoreCard.jsx
│   │   │   ├── AccuracyChart.jsx
│   │   │   ├── RadarChart.jsx
│   │   │   ├── WeakTopicCard.jsx
│   │   │   ├── PerformanceStats.jsx
│   │   │   └── TimeAnalysis.jsx
│   │   │
│   │   └── dashboard/
│   │       ├── DashboardCard.jsx
│   │       ├── RecentTests.jsx
│   │       ├── QuickActions.jsx
│   │       └── AchievementCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── IndividualQuiz.jsx
│   │   ├── CollaborativeQuiz.jsx
│   │   ├── PdfToMock.jsx
│   │   ├── Results.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   ├── Leaderboard.jsx
│   │   └── NotFound.jsx
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   ├── DashboardLayout.jsx
│   │   └── QuizLayout.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── QuizContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── RoomContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useQuiz.js
│   │   ├── useSocket.js
│   │   ├── useTimer.js
│   │   └── usePdfParser.js
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── quizService.js
│   │   ├── roomService.js
│   │   ├── socketService.js
│   │   └── pdfService.js
│   │
│   ├── store/
│   │   └── useAppStore.js
│   │
│   ├── utils/
│   │   ├── calculateScore.js
│   │   ├── formatTime.js
│   │   ├── shuffleQuestions.js
│   │   ├── generateRoomCode.js
│   │   ├── calculateAccuracy.js
│   │   └── extractPdfText.js
│   │
│   ├── constants/
│   │   ├── routes.js
│   │   ├── colors.js
│   │   └── quizConfig.js
│   │
│   ├── data/
│   │   ├── dummyQuestions.js
│   │   └── mockLeaderboard.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── server/
│
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── quizController.js
│   │   ├── roomController.js
│   │   └── pdfController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Quiz.js
│   │   ├── Question.js
│   │   ├── Room.js
│   │   └── Result.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── quizRoutes.js
│   │   ├── roomRoutes.js
│   │   └── pdfRoutes.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── sockets/
│   │   └── roomSocket.js
│   │
│   ├── services/
│   │   ├── aiService.js
│   │   └── pdfService.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

---

# 📌 Main Features

## 1. Individual Quiz System
- Timed tests
- MCQs
- Question navigation
- Review marking
- Auto submit
- Analytics

---

## 2. Collaborative Quiz System
- Create room
- Join room
- Live synchronized questions
- Real-time leaderboard
- Chat system
- Socket.io events

---

## 3. PDF to Mock Test
Flow:
1. Upload PDF
2. Extract text
3. Send to AI
4. Generate MCQs
5. Review questions
6. Start quiz

---

# 🎨 Tailwind Design System

## Colors

Primary:
#2563EB

Secondary:
#0F172A

Accent:
#22C55E

Background:
#111827

Surface:
#1F2937

Text:
#F9FAFB

---

# 📱 Responsive Strategy

## Desktop
- Sidebar navigation
- Multi-column dashboard

## Mobile
- Bottom navbar
- Swipe questions
- Full-screen quiz UI

---

# 🔥 Suggested Libraries

## Routing
npm install react-router-dom

## Animation
npm install framer-motion

## State Management
npm install zustand

## Charts
npm install recharts

## Toast Notifications
npm install react-hot-toast

## Socket.io
npm install socket.io-client

## PDF Upload
npm install react-dropzone
npm install pdfjs-dist

---

# 🚀 Build Phases

## Phase 1
- Authentication
- Dashboard
- Individual Quiz

## Phase 2
- Result Analytics
- PDF Upload

## Phase 3
- Collaborative Rooms
- Real-time Leaderboard
- Socket.io

## Phase 4
- AI MCQ Generator
- Gamification
- Notifications
- Rankings

---

# 🧠 Future Features

- AI difficulty adjustment
- Voice quizzes
- Offline mode
- Webcam proctoring
- Tournament system
- AI study recommendations
- Adaptive testing
- Daily challenge system

---

# 📌 Naming Conventions

## Components
PascalCase

Example:
QuestionCard.jsx

## Hooks
camelCase with use

Example:
useQuiz.js

## Utility Files
camelCase

Example:
formatTime.js

---

# 📊 MongoDB Collections

users
quizzes
questions
rooms
results
leaderboards
pdf_uploads

---

# 🔐 Authentication

Recommended:
- JWT Authentication
- Google Login
- Email Verification

---

# ⚡ Recommended Deployment

Frontend:
- Vercel
- Netlify

Backend:
- Render
- Railway

Database:
- MongoDB Atlas

Socket Server:
- Render Web Service