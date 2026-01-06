import { useState, useEffect } from 'react'
import { mockApi } from '../services/mockApi'

export const usePageContent = (page) => {
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        const data = await mockApi.getPageContent(page)
        setContent(data)
        setError(null)
      } catch (err) {
        setError(null)
        setContent([])
      } finally {
        setLoading(false)
      }
    }

    if (page) {
      fetchContent()
    }
  }, [page])

  const getSection = (sectionName) => {
    return content.find(section => section.section === sectionName)
  }

  const getSectionData = (sectionName) => {
    const section = getSection(sectionName)
    if (section?.data) {
      try {
        return JSON.parse(section.data)
      } catch (e) {
        console.error('Error parsing section data:', e)
        return null
      }
    }
    return null
  }

  return {
    content,
    loading,
    error,
    getSection,
    getSectionData
  }
}