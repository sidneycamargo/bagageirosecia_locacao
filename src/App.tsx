/* Main App Component - Handles routing (using react-router-dom), query client and other providers */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Index from './pages/Index'
import Blog from './pages/Blog'
import Portifolio from './pages/Portifolio'
import Contato from './pages/Contato'
import Termos from './pages/Termos'
import Obrigado from './pages/Obrigado'
import BlogPostPage from './pages/BlogPostPage'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <ScrollToTop />
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          {/* Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/obrigado" element={<Obrigado />} />
          <Route path="/contato/confirma" element={<Obrigado />} />

          {/* Individual Blog / Vehicle posts */}
          <Route path="/cherry-tiggo-8-com-bagageiros" element={<BlogPostPage />} />
          <Route path="/i30-com-bagageiros" element={<BlogPostPage />} />
          <Route path="/fiesta-com-bagageiros" element={<BlogPostPage />} />
          <Route path="/civic-com-bagageiros" element={<BlogPostPage />} />
          <Route path="/hyundai-santa-fe-com-bagageiros" element={<BlogPostPage />} />
          <Route path="/onix-com-bagageiros" element={<BlogPostPage />} />
          <Route path="/peugeot-206-e-207-com-bagageiros" element={<BlogPostPage />} />
          <Route path="/spin-com-bagageiros" element={<BlogPostPage />} />
          <Route path="/trailblazer-com-bagageiros" element={<BlogPostPage />} />

          {/* Dynamic fallback for any other slug */}
          <Route path="/:slug" element={<BlogPostPage />} />
        </Route>

        {/* 404 Standalone page with background */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
