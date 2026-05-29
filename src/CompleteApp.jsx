import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Mic, Globe, TrendingUp, Users, Smartphone, Award, MessageSquare, ChevronRight, Menu, X, Play, LogIn, LogOut, Home, GraduationCap, ShoppingBag, BarChart3, Send, MicOff, Volume2, User, Settings, Mail, Phone, MapPin } from 'lucide-react';

export default function CompleteApp() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isRecording, setIsRecording] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedModule, setSelectedModule] = useState(null);
  const [userProgress, setUserProgress] = useState({
    completedLessons: 0,
    totalLessons: 55,
    badges: 3,
    streak: 7
  });

  // Mock modules data
  const modules = [
    {
      id: 1,
      title: "Digital Basics",
      lessons: 12,
      duration: "2 weeks",
      progress: 75,
      topics: ["Smartphone usage", "Internet basics", "Digital payments", "Online safety"],
      lessonsData: [
        { id: 1, title: "Introduction to Smartphones", duration: 15, completed: true },
        { id: 2, title: "Understanding Internet", duration: 20, completed: true },
        { id: 3, title: "Digital Payments Basics", duration: 25, completed: false },
        { id: 4, title: "Online Safety & Security", duration: 20, completed: false }
      ]
    },
    {
      id: 2,
      title: "Financial Literacy",
      lessons: 15,
      duration: "3 weeks",
      progress: 40,
      topics: ["Banking", "Savings", "Loans", "Business accounting"],
      lessonsData: [
        { id: 5, title: "Understanding Banking", duration: 20, completed: true },
        { id: 6, title: "Savings & Investment", duration: 25, completed: false },
        { id: 7, title: "Business Loans", duration: 30, completed: false },
        { id: 8, title: "Basic Accounting", duration: 35, completed: false }
      ]
    },
    {
      id: 3,
      title: "E-Commerce Mastery",
      lessons: 18,
      duration: "4 weeks",
      progress: 20,
      topics: ["Product listing", "Photography", "Customer service", "Shipping"],
      lessonsData: [
        { id: 9, title: "Setting Up Store", duration: 30, completed: false },
        { id: 10, title: "Product Photography", duration: 25, completed: false },
        { id: 11, title: "Writing Descriptions", duration: 20, completed: false },
        { id: 12, title: "Pricing Strategies", duration: 25, completed: false }
      ]
    },
    {
      id: 4,
      title: "Business Growth",
      lessons: 10,
      duration: "2 weeks",
      progress: 0,
      topics: ["Marketing", "Branding", "Social media", "Scaling"],
      lessonsData: [
        { id: 13, title: "Social Media Marketing", duration: 30, completed: false },
        { id: 14, title: "Building Your Brand", duration: 25, completed: false },
        { id: 15, title: "Scaling Your Business", duration: 35, completed: false }
      ]
    }
  ];

  // Handle Login
const handleLogin = async (email, password) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (res.ok) {
      setIsAuthenticated(true);
      setCurrentUser(data.user);
      setCurrentPage('dashboard');
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (err) {
    console.error('Login error:', err);
  }
};


  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentPage('landing');
  };

  // AI Chat Handler
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg = { type: 'user', text: inputMessage, timestamp: new Date() };
    setChatMessages([...chatMessages, userMsg]);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "मैं आपकी मदद करूंगी! (I'll help you!) To create a bank account, you need: Aadhaar card, address proof, and passport photos. Visit your nearest bank branch.",
        "Digital payments are safe and easy! You can use apps like Google Pay, PhonePe, or Paytm. Would you like to learn how to use them?",
        "For selling online, first take clear photos of your products. Then create a seller account on platforms like Amazon Saheli. I can guide you step by step!",
        "Great question! Let me explain in simple terms. Banking helps you save money safely and grow your business. Shall we start with opening an account?"
      ];
      const aiMsg = {
        type: 'ai',
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiMsg]);
    }, 1000);

    setInputMessage('');
  };

  // Voice Recording Handler
  const handleVoiceRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start recording
      setTimeout(() => {
        setIsRecording(false);
        const voiceMsg = {
          type: 'ai',
          text: "मैंने आपकी आवाज़ सुनी! (I heard your voice!) You asked about starting a business. Let me help you with that. First, we need to understand your skills and resources.",
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, voiceMsg]);
      }, 3000);
    }
  };

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-lg shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  SheLearn AI
                </h1>
                <p className="text-xs text-gray-600">Empowering Rural Women</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentPage('login')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Login / Register</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Start Your Learning Journey
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                With AI-Powered Education
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 500+ rural women entrepreneurs learning business skills in their local language
            </p>
            <button 
              onClick={() => setCurrentPage('login')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-xl font-bold text-xl hover:shadow-2xl transition transform hover:scale-105 inline-flex items-center space-x-3"
            >
              <Play className="w-6 h-6" />
              <span>Get Started Free</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Voice Learning</h3>
              <p className="text-sm text-gray-600">Learn by speaking in your language</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">55+ Lessons</h3>
              <p className="text-sm text-gray-600">Comprehensive curriculum</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AI Tutor 24/7</h3>
              <p className="text-sm text-gray-600">Ask questions anytime</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sell Online</h3>
              <p className="text-sm text-gray-600">Connect to marketplaces</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Login Page Component
  const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isRegister ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-600">
              {isRegister ? 'Join SheLearn AI Community' : 'Continue your learning journey'}
            </p>
          </div>

          <div className="space-y-4">
            {isRegister && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {isRegister && (
              <>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Select Language</option>
                  <option>हिंदी (Hindi)</option>
                  <option>தமிழ் (Tamil)</option>
                  <option>বাংলা (Bengali)</option>
                  <option>English</option>
                </select>
              </>
            )}
            
            <button
              onClick={() => handleLogin(email, password)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition"
            >
              {isRegister ? 'Create Account' : 'Login'}
            </button>

            <div className="text-center">
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
              </button>
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-gray-800"
              >
                ← Back to Home
              </button>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-2">Demo Login:</p>
            <p className="text-xs font-mono">Email: priya@example.com</p>
            <p className="text-xs font-mono">Password: student123</p>
          </div>
        </div>
      </div>
    );
  };

  // Dashboard Page Component
  const DashboardPage = () => (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">नमस्ते, {currentUser?.name}! 👋</h1>
          <p className="text-purple-100">Ready to continue your learning journey today?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-3xl font-bold text-purple-600">{userProgress.completedLessons}</p>
                <p className="text-xs text-gray-500">of {userProgress.totalLessons} lessons</p>
              </div>
              <GraduationCap className="w-12 h-12 text-purple-200" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Badges Earned</p>
                <p className="text-3xl font-bold text-yellow-600">{userProgress.badges}</p>
                <p className="text-xs text-gray-500">Keep learning!</p>
              </div>
              <Award className="w-12 h-12 text-yellow-200" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Current Streak</p>
                <p className="text-3xl font-bold text-orange-600">{userProgress.streak}</p>
                <p className="text-xs text-gray-500">days in a row 🔥</p>
              </div>
              <TrendingUp className="w-12 h-12 text-orange-200" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completion Rate</p>
                <p className="text-3xl font-bold text-green-600">75%</p>
                <p className="text-xs text-gray-500">Great progress!</p>
              </div>
              <BarChart3 className="w-12 h-12 text-green-200" />
            </div>
          </div>
        </div>

        {/* Your Modules */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Learning Modules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <div key={module.id} className="border-2 border-purple-100 rounded-2xl p-6 hover:border-purple-300 transition cursor-pointer"
                   onClick={() => {
                     setSelectedModule(module);
                     setCurrentPage('module');
                   }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {module.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: `${module.progress}%`}}></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{module.lessons} lessons</span>
                  <span>{module.duration}</span>
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition">
                  Continue Learning →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Module Detail Page
  const ModulePage = () => (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setCurrentPage('dashboard')}
          className="mb-6 flex items-center text-purple-600 hover:text-purple-700 font-medium"
        >
          ← Back to Dashboard
        </button>

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedModule?.title}</h1>
          <div className="flex items-center space-x-6 text-gray-600 mb-6">
            <span>{selectedModule?.lessons} lessons</span>
            <span>•</span>
            <span>{selectedModule?.duration}</span>
            <span>•</span>
            <span className="text-purple-600 font-semibold">{selectedModule?.progress}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full" style={{width: `${selectedModule?.progress}%`}}></div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lessons</h2>
          <div className="space-y-4">
            {selectedModule?.lessonsData.map((lesson, idx) => (
              <div key={lesson.id} className={`border-2 rounded-xl p-6 ${lesson.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'} hover:border-purple-300 transition cursor-pointer`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${lesson.completed ? 'bg-green-500 text-white' : 'bg-purple-100 text-purple-600'}`}>
                      {lesson.completed ? '✓' : idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{lesson.title}</h3>
                      <p className="text-sm text-gray-600">{lesson.duration} minutes</p>
                    </div>
                  </div>
                  <button className={`px-6 py-2 rounded-lg font-semibold ${lesson.completed ? 'bg-gray-200 text-gray-700' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'}`}>
                    {lesson.completed ? 'Review' : 'Start'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // AI Tutor Page
  const AITutorPage = () => (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden" style={{height: 'calc(100vh - 200px)'}}>
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">AI Tutor - शीला (Sheela)</h2>
                <p className="text-sm text-purple-100">Ask me anything in Hindi or English</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {chatMessages.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Start a conversation with your AI tutor!</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {["How do I open a bank account?", "Teach me digital payments", "How to sell online?", "Start a business idea"].map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setInputMessage(q)}
                      className="p-3 bg-purple-50 rounded-lg text-sm text-purple-700 hover:bg-purple-100 transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md p-4 rounded-2xl ${msg.type === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                  <p>{msg.text}</p>
                  {msg.type === 'ai' && (
                    <button className="mt-2 text-purple-600 text-sm flex items-center space-x-1 hover:text-purple-700">
                      <Volume2 className="w-4 h-4" />
                      <span>Listen</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t p-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleVoiceRecording}
                className={`p-3 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-purple-100 hover:bg-purple-200'} transition`}
              >
                {isRecording ? <MicOff className="w-6 h-6 text-white" /> : <Mic className="w-6 h-6 text-purple-600" />}
              </button>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question... (हिंदी में भी पूछ सकते हैं)"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSendMessage}
                className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
            {isRecording && (
              <p className="text-center text-red-500 text-sm mt-2 animate-pulse">
                🎤 Recording... Speak now!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Navigation
  const DashboardNav = () => (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-purple-600" />
              <span className="font-bold text-lg">SheLearn AI</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${currentPage === 'dashboard' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
              >
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setCurrentPage('ai-tutor')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${currentPage === 'ai-tutor' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>AI Tutor</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium">{currentUser?.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  // Main Render
  return (
    <div>
      {!isAuthenticated && currentPage === 'landing' && <LandingPage />}
      {!isAuthenticated && currentPage === 'login' && <LoginPage />}
      {isAuthenticated && currentPage === 'dashboard' && <DashboardPage />}
      {isAuthenticated && currentPage === 'module' && <ModulePage />}
      {isAuthenticated && currentPage === 'ai-tutor' && <AITutorPage />}
    </div>
  );
}