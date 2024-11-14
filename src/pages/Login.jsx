import { useState } from 'react'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const loginAccount = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await account.createEmailSession(
        email,
        password
      )
      navigate('/')
    } catch(err) {
      alert(err)
    }
    setIsLoading(false)
  }

  const handleGoogleLogin = async () => {
    try {
      await account.createOAuth2Session(
        'google',
        'http://localhost:5173',
        'http://localhost:5173/login'
      );
    } catch (error) {
      console.error('Google login error:', error);
      alert('Failed to login with Google');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white/10 p-8 rounded-2xl backdrop-blur-xl border border-white/20 w-full max-w-md mx-4"
      >
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl rotate-45 flex items-center justify-center">
            <span className="text-3xl -rotate-45">✨</span>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-3xl font-bold text-center text-white mb-2">Welcome Back!</h1>
          <p className="text-gray-200 text-center mb-8">Sign in to continue sharing</p>
        </div>

        <button 
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-lg p-3 transition-all mb-8"
        >
          <FcGoogle className="text-xl" />
          <span>Continue with Google</span>
        </button>

        <div className="relative mb-8">
          <hr className="border-white/20" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent px-4 text-white/60">or</span>
        </div>

        <form onSubmit={loginAccount} className="space-y-4">
          <div>
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
            />
          </div>

          <div>
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-center text-white/80">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-white hover:text-purple-200 font-medium">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}