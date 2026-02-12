# Melodic Flow Dark Mode UI Documentation

## Overview
This document describes the complete dark mode UI system created for the AMP Marketing website clone. The design transforms a light theme marketing website into a modern, professional dark theme while maintaining exact content parity.

## Color System

### Primary Color Palette
```css
/* Tailwind Custom Colors Configuration */
colors: {
  amp: {
    bg: '#050508',        /* Deep space black - main background */
    card: '#0F121C',      /* Slightly raised dark - cards, sections */
    primary: '#6366f1',    /* Indigo - primary CTAs, accents */
    secondary: '#3b82f6',  /* Blue - secondary accents */
    accent: '#8b5cf6',     /* Purple - tertiary accents */
    text: '#E2E8F0',      /* Light gray - main text */
    muted: '#94a3b8',      /* Medium gray - secondary text */
  }
}
```

### Semantic Usage
- `bg-amp-bg`: Main page background (#050508)
- `bg-amp-card`: Card/section backgrounds (#0F121C)
- `bg-black/[opacity]`: Overlay effects for depth
- `text-white`: Primary text on dark backgrounds
- `text-gray-400`: Secondary/muted text
- `text-amp-primary`: Primary CTAs and highlights
- `text-amp-secondary`: Secondary accents

## Design Principles

### 1. Layered Dark Theme
```tsx
// Base dark background
<div className="bg-amp-bg">
  // Elevated cards/sections
  <div className="bg-amp-card border border-white/10">
    // Content with proper contrast
    <p className="text-white">...</p>
    <p className="text-gray-400">...</p>
  </div>
</div>
```

### 2. Glassmorphism Effects
```tsx
// Subtle blur and transparency for depth
<div className="bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="bg-white/[0.08] hover:bg-white/[0.12] transition-all">
```

### 3. Gradient Accents
```tsx
// Dynamic gradients for visual interest
<div className="bg-gradient-to-br from-slate-900 via-indigo-900/40 to-slate-900">
<div className="bg-gradient-to-r from-amp-primary/20 to-amp-secondary/20">
<div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
```

## Component Architecture

### Base Layout Structure
```tsx
function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen flex flex-col font-sans text-gray-100 selection:bg-amp-secondary selection:text-white overflow-x-hidden bg-amp-bg">
        
        <AnimatedBackground />
        <Navbar />

        <main className="relative z-10 flex-grow w-full flex flex-col">
          <Routes>
            {/* Page routes */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
```

### Animated Background Component
```tsx
// Creates dynamic floating particles/gradients
const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-amp-bg via-black to-amp-bg" />
    {/* Animated particles/gradients */}
  </div>
);
```

### Card Component Pattern
```tsx
const ServiceCard = ({ title, description, price, icon }) => (
  <div className="bg-[#0F121C] rounded-3xl p-8 border border-white/10 hover:border-amp-primary/50 transition-all group hover:-translate-y-2">
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-8">{description}</p>
    <div className="text-amp-primary font-bold">{price}</div>
  </div>
);
```

## Typography System

### Font Hierarchy
```tsx
// Display Headers
<h1 className="text-5xl md:text-8xl font-black text-white">...</h1>

// Section Headers  
<h2 className="text-4xl md:text-6xl font-black text-white">...</h2>

// Card Headers
<h3 className="text-2xl font-bold text-white">...</h3>

// Body Text
<p className="text-gray-400 leading-relaxed">...</p>
<p className="text-white">...</p>
```

### Text Utilities
- `font-black`: Extra bold weight for headers
- `uppercase tracking-widest`: Marketing copy emphasis
- `text-transparent bg-clip-text`: Gradient text effects
- `selection:bg-amp-secondary selection:text-white`: Custom text selection styling

## Interactive Elements

### Buttons/CTAs
```tsx
// Primary CTA
<Link to="/contact" className="bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)]">
  Book a Free Call
</Link>

// Secondary CTA
<button className="bg-amp-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-amp-secondary transition-all">
  Get Started
</button>

// Subtle CTA
<Link className="text-amp-primary hover:text-amp-secondary transition-colors">
  Learn More →
</Link>
```

### Hover States
```tsx
// Scale effects
className="hover:scale-105 transition-transform"

// Color transitions  
className="hover:text-amp-secondary transition-colors"

// Border animations
className="hover:border-amp-primary/50 transition-all"

// Background opacity changes
className="hover:bg-white/[0.08] transition-all"
```

## Layout Patterns

### Section Structure
```tsx
const StandardSection = ({ children, className = "" }) => (
  <section className={`py-24 px-6 relative z-10 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);
```

### Grid Systems
```tsx
// Services Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Feature Grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

// Testimonials Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

## Border Radius System
```tsx
rounded-3xl    // Large cards (24px)
rounded-2xl    // Buttons, small cards (16px)  
rounded-xl      // Medium elements (12px)
rounded-lg      // Small elements (8px)
rounded-full    // Avatars, badges
```

## Spacing System
```tsx
py-24 px-6     // Standard section padding
py-16 px-6     // Smaller section padding
gap-8          // Card grid gap
gap-6          // Element spacing
mb-8, mb-12    // Margin bottom hierarchy
```

## Shadow Effects
```tsx
shadow-2xl              // Elevated cards
shadow-[0_0_50px_rgba(255,255,255,0.2)]  // Glow effects
shadow-amp-primary/20    // Colored shadows
shadow-3xl              // Hero elements
```

## Animation Patterns

### Keyframes Configuration
```typescript
animation: {
  'gradient-x': 'gradient-x 15s ease infinite',
  'marquee': 'marquee 25s linear infinite',
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

### Usage Examples
```tsx
className="animate-gradient-x"        // Shifting gradient backgrounds
className="animate-pulse-slow"      // Slow pulsing elements
className="animate-marquee"         // Scrolling marquees
```

## Responsive Design
```tsx
// Responsive typography
text-4xl md:text-6xl font-black

// Responsive grids
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Responsive spacing
p-8 md:p-12
gap-4 md:gap-8

// Responsive layouts
flex-col md:flex-row
```

## Icon System
```tsx
import { 
  Rocket, Lightbulb, Phone, Bot, Mail, MapPin, Star, 
  CheckCircle2, Zap, Target, BarChart3, Users, Clock, 
  ArrowUpRight, MessageSquare, Search, PenTool, Share2, 
  Layout, GitMerge, Globe
} from 'lucide-react';

// Icon styling pattern
<div className="w-8 h-8 text-indigo-400">
  <Rocket className="w-full h-full" />
</div>
```

## Page Templates

### Hero Section Pattern
```tsx
const Hero = () => (
  <section className="bg-gradient-to-br from-[#0A0C14] via-indigo-900/20 to-[#0A0C14] pt-40 pb-24 px-6 text-center border-b border-white/5">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight">
        Marketing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Gets Results</span>
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
        More leads. Less busywork. We build AI tools that save you time and bring in customers.
      </p>
    </div>
  </section>
);
```

### Content Section Pattern
```tsx
const ContentSection = ({ title, description, children }) => (
  <section className="py-24 px-6 relative z-10 bg-black/40">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-amp-primary font-bold uppercase tracking-widest text-sm">Featured</span>
        <h2 className="text-4xl font-black text-white mt-4">{title}</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">{description}</p>
      </div>
      {children}
    </div>
  </section>
);
```

## Tailwind Configuration
```typescript
export default {
  content: [
    "./index.html",
    "./index.tsx", 
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amp: {
          bg: '#050508',
          card: '#0F121C', 
          primary: '#6366f1',
          secondary: '#3b82f6',
          accent: '#8b5cf6',
          text: '#E2E8F0',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  }
}
```

## Implementation Guidelines

### 1. Consistency Rules
- Always use semantic color classes (amp-bg, amp-card, etc.)
- Maintain consistent spacing patterns (py-24 for sections)
- Use proper text hierarchy with font-black for headers
- Apply hover states to all interactive elements

### 2. Accessibility
- Ensure proper contrast ratios (white on dark backgrounds)
- Use focus states on interactive elements
- Maintain semantic HTML structure
- Test keyboard navigation

### 3. Performance
- Use Tailwind's JIT classes for efficiency
- Implement proper lazy loading for images
- Optimize animations with CSS transforms
- Use semantic HTML5 elements

### 4. Dark Theme Best Practices
- Avoid pure black (#000000) - use deep dark (#050508)
- Ensure text remains readable with proper contrast
- Use subtle borders (border-white/10) for definition
- Implement proper shadow systems for depth

## File Structure
```
/components/
  - AnimatedBackground.tsx    // Dynamic background effects
  - Navbar.tsx               // Navigation with dark theme
  - Hero.tsx                 // Hero sections
  - Footer.tsx                // Site footer
/pages/
  - Home.tsx                 // Homepage with all sections
  - About.tsx               // About page content
  - Services.tsx             // Services listing
  - Pricing.tsx              // Pricing tables
  - Contact.tsx              // Contact form
  - ServiceDetail.tsx         // Individual service pages
```

## Usage Instructions for LLMs

To recreate this UI system:

1. **Install Dependencies**: 
   ```bash
   npm install react react-dom react-router-dom lucide-react tailwindcss
   ```

2. **Configure Tailwind**: Use the exact configuration provided above

3. **Copy Component Structure**: Use the documented file structure and component patterns

4. **Apply Color System**: Always use the amp color classes, never hardcode colors

5. **Follow Layout Patterns**: Use the established section and grid patterns

6. **Maintain Consistency**: Apply the documented spacing, typography, and interaction patterns

This system creates a cohesive, professional dark theme that maintains excellent readability and user experience while providing modern visual appeal.