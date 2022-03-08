import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = ({ middleware, redirectIfAuthenticated, id } = {}) => {
  const router = useRouter()

  const { data: user, error, mutate } = useSWR('/api/user', () =>
    axios
      .get('/api/user')
      .then(res => res.data)
      .catch(error => {
        if (error.response?.status !== 409) throw error

        router.push('/verify-email')
      }),
  )

  const { data: program, mutate: programMutate } = useSWR('/api/v1/program', () =>
    axios
      .get('/api/v1/program')
      .then(res => res.data)
  )

  const { data: blog, mutate: blogMutate } = useSWR('/api/v1/blog', () =>
    axios
      .get('/api/v1/blog')
      .then(res => res.data)
  )

  const { data: programDetail, mutate: programDetailMutate } = useSWR(`/api/v1/program/${id}`, () =>
    axios
      .get(`/api/v1/program/${id}`)
      .then(res => res.data)
  )

  const { data: blogDetail, mutate: blogDetailMutate } = useSWR(`/api/v1/blog/${id}`, () =>
    axios
      .get(`/api/v1/blog/${id}`)
      .then(res => res.data)
  )

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const register = async ({ setErrors, setLoading, ...props }) => {
    await csrf()

    setErrors([])

    axios
      .post('/register', props)
      .then(() => {
        if (mutate) {
          setLoading(false)
          return mutate()
        }
      })
      .catch(error => {
        if (error.response?.status !== 422) throw error

        setErrors(Object.values(error.response?.data.errors).flat())
        setLoading(false)
      })
  }

  const login = async ({ setErrors, setLoading, ...props }) => {
    await csrf()

    setErrors([])

    axios
      .post('/login', props)
      .then(() => {
        if (mutate) {
          setLoading(false)
          return mutate()
        }
      })
      .catch(error => {
        if (error.response?.status !== 422) throw error

        setErrors(Object.values(error.response?.data.errors).flat())
        setLoading(false)
      })
  }

  const update = async ({ id, setErrors, formData }) => {
    await csrf()

    setErrors([])

    axios
      .post(`/api/v1/user/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        if (mutate) {
          return mutate()
        }
      })
      .catch(error => {
        if (error.response?.status !== 422) throw error

        setErrors(Object.values(error.response?.data.errors).flat())
      })
  }

  const createProgram = async ({ setErrors, handleClick, formData }) => {
    await csrf()

    setErrors([])

    axios
      .post(`/api/v1/program/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        handleClick()
        programMutate();
      })
      .catch(error => {
        if (error.response?.status !== 422) throw error

        setErrors(Object.values(error.response?.data.errors).flat())
      })
  }

  const createBlog = async ({ setErrors, handleClick, formData }) => {
    await csrf()

    setErrors([])

    axios
      .post(`/api/v1/blog/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        handleClick()
        blogMutate();
      })
      .catch(error => {
        if (error.response?.status !== 422) throw error

        setErrors(Object.values(error.response?.data.errors).flat())
      })
  }

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post('/forgot-password', { email })
      .then(response => setStatus(response.data.status))
      .catch(error => {
        if (error.response?.status !== 422) throw error

        setErrors(Object.values(error.response?.data.errors).flat())
      })
  }

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post('/reset-password', { token: router.query.token, ...props })
      .then(response =>
        router.push('/login?reset=' + btoa(response.data.status)),
      )
      .catch(error => {
        if (error.response?.status != 422) throw error

        setErrors(Object.values(error.response?.data.errors).flat())
      })
  }

  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post('/email/verification-notification')
      .then(response => setStatus(response.data.status))
  }

  const logout = async () => {
    if (!error) {
      await axios.post('/logout')

      if (mutate) return mutate()
    }

    window.location.pathname = '/login'
  }

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated)
    if (middleware === 'auth' && error) logout()
  }, [user, error])

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
    update,
    program,
    createProgram,
    programDetail,
    blog,
    createBlog,
    blogDetail,
  }
}
