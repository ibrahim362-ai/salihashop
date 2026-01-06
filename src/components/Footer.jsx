import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-cream-50">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Sahila Shop</span>
            </div>
            <p className="text-cream-200">
              Your premier destination for luxury perfumes, cosmetics, and exceptional beauty experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-300 hover:text-gold-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream-300 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-cream-300 hover:text-gold-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-300 hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-300 hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Beauty Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=perfume" className="text-cream-300 hover:text-gold-400 transition-colors">
                  Luxury Perfumes
                </Link>
              </li>
              <li>
                <Link to="/products?category=cosmetics" className="text-cream-300 hover:text-gold-400 transition-colors">
                  Premium Cosmetics
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-cream-300 hover:text-gold-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?featured=true" className="text-cream-300 hover:text-gold-400 transition-colors">
                  Featured Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-400" />
                <span className="text-cream-300">hello@sahilashop.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-400" />
                <span className="text-cream-300">+1 (555) SAHILA-SHOP</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold-400" />
                <span className="text-cream-300">123 Beauty Boulevard, Luxury District, LD 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-800 mt-8 pt-8 text-center">
          <p className="text-cream-300">
            © 2024 Sahila Shop. All rights reserved. | Crafted with elegance for beauty enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer