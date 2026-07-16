import * as React from 'react'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  role: string
  branch?: {
    id: string
    name: string
  }
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  setAuth: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setAuth: (user, token) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
        }
        set({ user, token, isAuthenticated: true })
      },
      logout: () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          localStorage.removeItem('cantra-auth-storage')
        }
        set({ user: null, token: null, isAuthenticated: false })
      },
    }),
    {
      name: 'cantra-auth-storage',
      storage: typeof window !== 'undefined' ? createJSONStorage(() => localStorage) : undefined,
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)

export const useAuthHydrated = () => {
  const [hasHydrated, setHasHydrated] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHasHydrated(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  return hasHydrated
}
