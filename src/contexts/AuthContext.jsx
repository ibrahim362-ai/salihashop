import { createContext, useContext, useState, useEffect } from 'react'
import { mockApi } from '../services/mockApi'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await mockApi.checkAuth()
      setAdmin(response.admin)
    } catch (error) {
      // Not authenticated
    } finally {
      setLoading(false)
    }
  }

  const login = async (username, password) => {
    try {
      const response = await mockApi.login(username, password)
      setAdmin(response.admin)
      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        message: error.message || 'Login failed' 
      }
    }
  }

  const logout = async () => {
    await mockApi.logout()
    setAdmin(null)
  }

  const changePassword = async (currentPassword, newPassword) => {
    // Mock password change - always succeeds
    return { success: true }
  }

  const value = {
    admin,
    login,
    logout,
    changePassword,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}