 // Mock data and API functions to replace backend calls
import { toast } from 'react-hot-toast'

// Mock data
export const mockProducts = [
  // New Products - Perfumes
  {
    id: 1,
    name: "Rose Elegance Perfume",
    price: 40.00,
    originalPrice: 45.00,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop"],
    category: "perfume",
    description: "Rose Elegance Perfume delivers a timeless floral aroma blended with fresh rose, jasmine, and soft musk. Ideal for daily and evening wear.",
    inStock: true,
    stock: 120,
    featured: true,
    sku: "PERF-RE-001",
    brand: "Elegance",
    tags: ["floral", "luxury", "women"]
  },
  {
    id: 2,
    name: "Midnight Oud",
    price: 55.00,
    originalPrice: 60.00,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop"],
    category: "perfume",
    description: "Midnight Oud blends premium oud, amber, and smoky woods for a bold and long-lasting scent.",
    inStock: true,
    stock: 80,
    featured: true,
    sku: "PERF-MO-002",
    brand: "Noir",
    tags: ["oud", "men", "oriental"]
  },
  {
    id: 3,
    name: "Citrus Breeze",
    price: 30.00,
    originalPrice: 35.00,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop"],
    category: "perfume",
    description: "A refreshing blend of lemon, bergamot, and mint designed for a clean and energetic feel.",
    inStock: true,
    stock: 150,
    featured: false,
    sku: "PERF-CB-003",
    brand: "FreshCo",
    tags: ["citrus", "unisex", "fresh"]
  },
  {
    id: 4,
    name: "Vanilla Dream",
    price: 36.00,
    originalPrice: 40.00,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop"],
    category: "perfume",
    description: "Vanilla Dream is a warm and comforting scent combining vanilla, orchid, and creamy musk.",
    inStock: true,
    stock: 90,
    featured: false,
    sku: "PERF-VD-004",
    brand: "DreamScents",
    tags: ["vanilla", "sweet", "women"]
  },
  {
    id: 5,
    name: "Ocean Spirit",
    price: 34.00,
    originalPrice: 38.00,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop"],
    category: "perfume",
    description: "Ocean Spirit delivers marine notes mixed with fresh air accords and light woods.",
    inStock: true,
    stock: 110,
    featured: true,
    sku: "PERF-OS-005",
    brand: "BlueWave",
    tags: ["aquatic", "men", "fresh"]
  },
  // New Products - Cosmetics
  {
    id: 6,
    name: "Hydra Glow Face Cream",
    price: 22.00,
    originalPrice: 25.00,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop"],
    category: "cosmetics",
    description: "A lightweight moisturizer enriched with vitamins to keep skin soft, smooth, and radiant.",
    inStock: true,
    stock: 200,
    featured: true,
    sku: "COS-HG-006",
    brand: "SkinCare+",
    tags: ["skincare", "hydration", "face"]
  },
  {
    id: 7,
    name: "Matte Finish Foundation",
    price: 27.00,
    originalPrice: 30.00,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop"],
    category: "cosmetics",
    description: "Provides smooth coverage with oil control for a flawless matte finish.",
    inStock: true,
    stock: 140,
    featured: false,
    sku: "COS-MF-007",
    brand: "BeautyPro",
    tags: ["makeup", "foundation", "matte"]
  },
  {
    id: 8,
    name: "Velvet Touch Lipstick",
    price: 13.00,
    originalPrice: 15.00,
    image: "https://images.unsplash.com/photo-1631214540242-6b5b3e4e7d4b?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1631214540242-6b5b3e4e7d4b?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop"],
    category: "cosmetics",
    description: "Highly pigmented lipstick offering smooth application and long wear.",
    inStock: true,
    stock: 300,
    featured: false,
    sku: "COS-VT-008",
    brand: "LipLux",
    tags: ["lipstick", "makeup", "beauty"]
  },
  {
    id: 9,
    name: "Nourish Hair Serum",
    price: 18.00,
    originalPrice: 20.00,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop"],
    category: "cosmetics",
    description: "Strengthens hair, reduces frizz, and adds natural shine.",
    inStock: true,
    stock: 160,
    featured: false,
    sku: "COS-NH-009",
    brand: "HairCare",
    tags: ["hair", "serum", "repair"]
  },
  {
    id: 10,
    name: "Smokey Eye Palette",
    price: 25.00,
    originalPrice: 28.00,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop"],
    category: "cosmetics",
    description: "12-color palette with matte and shimmer shades for versatile makeup styles.",
    inStock: true,
    stock: 100,
    featured: true,
    sku: "COS-SE-010",
    brand: "GlamStudio",
    tags: ["eyeshadow", "palette", "makeup"]
  },
  {
    id: 11,
    name: "Pure Clean Face Wash",
    price: 10.00,
    originalPrice: 12.00,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop"],
    category: "cosmetics",
    description: "Removes dirt and oil while keeping skin soft and refreshed.",
    inStock: true,
    stock: 220,
    featured: false,
    sku: "COS-PC-011",
    brand: "SkinCare+",
    tags: ["cleanser", "face", "skincare"]
  },
  {
    id: 12,
    name: "Sun Shield SPF 50",
    price: 20.00,
    originalPrice: 22.00,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop"],
    category: "cosmetics",
    description: "Broad-spectrum SPF 50 sunscreen protecting skin from harmful UV rays.",
    inStock: true,
    stock: 180,
    featured: true,
    sku: "COS-SS-012",
    brand: "SunCare",
    tags: ["sunscreen", "spf50", "skincare"]
  }
]

export const mockCategories = [
  { id: 1, name: "Perfume", slug: "perfume", description: "Luxury fragrances for men and women" },
  { id: 2, name: "Cosmetics", slug: "cosmetics", description: "Premium makeup and beauty products" }
]

export const mockMessages = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    subject: "Product Inquiry",
    message: "I'm interested in the Radiant Glow Serum. Can you tell me more about it?",
    createdAt: new Date().toISOString(),
    replied: false
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike@example.com",
    subject: "Shipping Question",
    message: "How long does shipping usually take?",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    replied: true
  }
]

// Mock API functions
export const mockApi = {
  // Products
  getProducts: async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 300)) // Simulate network delay
    
    let filteredProducts = [...mockProducts]
    
    // Apply filters
    if (params.category && params.category !== 'all') {
      filteredProducts = filteredProducts.filter(p => p.category === params.category)
    }
    
    if (params.search) {
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(params.search.toLowerCase()) ||
        p.description.toLowerCase().includes(params.search.toLowerCase())
      )
    }
    
    // Apply sorting
    if (params.sort) {
      switch (params.sort) {
        case 'price-low':
          filteredProducts.sort((a, b) => a.price - b.price)
          break
        case 'price-high':
          filteredProducts.sort((a, b) => b.price - a.price)
          break
        case 'name':
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
          break
      }
    }
    
    // Apply pagination
    const limit = params.limit || 10
    const page = params.page || 1
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex)
    
    return {
      products: paginatedProducts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredProducts.length / limit),
        totalItems: filteredProducts.length,
        hasNext: endIndex < filteredProducts.length,
        hasPrev: page > 1
      }
    }
  },

  getProduct: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200))
    const product = mockProducts.find(p => p.id === parseInt(id))
    if (!product) throw new Error('Product not found')
    return product
  },

  createProduct: async (productData) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const newProduct = {
      id: Math.max(...mockProducts.map(p => p.id)) + 1,
      ...productData,
      createdAt: new Date().toISOString()
    }
    mockProducts.push(newProduct)
    return newProduct
  },

  updateProduct: async (id, productData) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const index = mockProducts.findIndex(p => p.id === parseInt(id))
    if (index === -1) throw new Error('Product not found')
    mockProducts[index] = { ...mockProducts[index], ...productData }
    return mockProducts[index]
  },

  deleteProduct: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = mockProducts.findIndex(p => p.id === parseInt(id))
    if (index === -1) throw new Error('Product not found')
    mockProducts.splice(index, 1)
    return { success: true }
  },

  // Categories
  getCategories: async () => {
    await new Promise(resolve => setTimeout(resolve, 200))
    return mockCategories
  },

  createCategory: async (categoryData) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const newCategory = {
      id: Math.max(...mockCategories.map(c => c.id)) + 1,
      ...categoryData,
      createdAt: new Date().toISOString()
    }
    mockCategories.push(newCategory)
    return newCategory
  },

  updateCategory: async (id, categoryData) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = mockCategories.findIndex(c => c.id === parseInt(id))
    if (index === -1) throw new Error('Category not found')
    mockCategories[index] = { ...mockCategories[index], ...categoryData }
    return mockCategories[index]
  },

  deleteCategory: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200))
    const index = mockCategories.findIndex(c => c.id === parseInt(id))
    if (index === -1) throw new Error('Category not found')
    mockCategories.splice(index, 1)
    return { success: true }
  },

  // Messages
  getMessages: async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 200))
    const limit = params.limit || 10
    const page = params.page || 1
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedMessages = mockMessages.slice(startIndex, endIndex)
    
    return {
      messages: paginatedMessages,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(mockMessages.length / limit),
        totalItems: mockMessages.length
      }
    }
  },

  createMessage: async (messageData) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const newMessage = {
      id: Math.max(...mockMessages.map(m => m.id)) + 1,
      ...messageData,
      createdAt: new Date().toISOString(),
      replied: false
    }
    mockMessages.unshift(newMessage)
    return newMessage
  },

  replyToMessage: async (id, replyData) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const message = mockMessages.find(m => m.id === parseInt(id))
    if (!message) throw new Error('Message not found')
    message.replied = true
    message.reply = replyData.replyContent
    message.repliedAt = new Date().toISOString()
    return message
  },

  // Auth (mock)
  login: async (username, password) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    if (username === 'admin' && password === 'admin123') {
      const token = 'mock-jwt-token'
      const admin = { id: 1, username: 'admin', name: 'Admin User' }
      localStorage.setItem('token', token)
      localStorage.setItem('admin', JSON.stringify(admin))
      return { token, admin }
    }
    throw new Error('Invalid credentials')
  },

  checkAuth: async () => {
    await new Promise(resolve => setTimeout(resolve, 200))
    const token = localStorage.getItem('token')
    const admin = localStorage.getItem('admin')
    if (token && admin) {
      return { admin: JSON.parse(admin) }
    }
    throw new Error('Not authenticated')
  },

  logout: async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    return { success: true }
  },

  // Page content (mock)
  getPageContent: async (page) => {
    await new Promise(resolve => setTimeout(resolve, 200))
    return [] // Return empty array - pages will use static content
  },

  // Settings (mock)
  getSettings: async () => {
    await new Promise(resolve => setTimeout(resolve, 200))
    return {
      siteName: 'ShopX Beauty',
      siteDescription: 'Premium beauty products for everyone',
      contactEmail: 'contact@shopx.com',
      phone: '+1 (555) 123-4567'
    }
  },

  // File upload (mock)
  uploadImage: async (file, folder = 'products') => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Return a mock URL - in real app this would be uploaded to cloud storage
    return {
      url: `https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400`,
      filename: file.name
    }
  },

  uploadImages: async (files, folder = 'products') => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    return files.map(file => ({
      url: `https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400`,
      filename: file.name
    }))
  }
}