# WeForge Technologies Landing Page

**A premium, human-crafted landing page for a digital craftsmanship studio.**

Live Demo: [https://ajaymishraj.github.io/WeForge-Landing](https://ajaymishraj.github.io/weforge-landing)

---

## About

This is a custom-built landing page for WeForge Technologies — a digital craftsmanship studio specializing in Web Development, Mobile Apps, AI Solutions, UI/UX Design, Cloud Infrastructure, and Digital Transformation.

**Philosophy:** No templates. No shortcuts. Just thoughtful design and precise engineering.

---

## Features

✨ **Premium Editorial Design**
- Dark theme with careful typography hierarchy
- Craft-focused visual language
- Personality-driven brand presentation

⚡ **Performance-First**
- Vanilla JavaScript (zero frameworks)
- Optimized CSS with minimal bloat
- Smooth animations using CSS transforms
- Fast load times

📱 **Fully Responsive**
- Mobile-first approach
- Desktop, tablet, and mobile optimized
- Touch-friendly interactions
- Hamburger menu for mobile navigation

🤖 **AI-Powered Chatbot**
- Groq API integration for intelligent responses (just place your api key in script.js)
- Fallback responses for reliability
- Real-time conversation with typing indicators
- Context-aware answers about services and process

🎨 **Interactive Elements**
- Scroll reveal animations
- Smooth navigation with scroll-to functionality
- Dynamic navbar (transparent/solid on scroll)
- Contact form with visual feedback
- Accessible and semantic HTML

---

## Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Modern styling with CSS variables and animations
- **Vanilla JavaScript** — No dependencies, pure JS interactivity
- **Groq API** — LLM-powered chatbot (optional)
- **Remix Icon** — Professional icon library
- **Google Fonts** — DM Sans & Instrument Serif

---

## File Structure

```
weforge-landing/
├── index.html          # Main HTML (semantic structure)
├── style.css           # All styling (responsive design)
├── script.js           # Interactivity (chatbot, navigation, forms)
└── README.md           # This file
```

---

## Key Sections

### 1. **Navigation** (`navbar`)
- Fixed header with scroll detection
- Responsive hamburger menu for mobile
- Smooth anchor links

### 2. **Hero**
- Brand-forward headline with personality
- Clear value proposition
- CTA button with scroll-to functionality

### 3. **About**
- Company positioning
- Brand philosophy
- Reveal animations on scroll

### 4. **Services**
- 6 service offerings with descriptions
- Card-based layout
- Hover interactions

### 5. **Approach**
- Process breakdown (Discovery → Strategy → Build → Launch)
- Step-by-step visual presentation

### 6. **Chatbot**
- Floating toggle button
- Chat window with message history
- Groq API for intelligent responses
- Graceful fallback if API unavailable

### 7. **Contact**
- Contact form with validation
- Success state feedback
- Direct messaging to team email

### 8. **Footer**
- Social links
- Additional company info

---

## Chatbot Configuration

The chatbot uses **Groq API** for intelligent responses. To enable it:

1. Get a Groq API key from [https://console.groq.com](https://console.groq.com)
2. Replace the key in `script.js`:
   ```javascript
   const GROQ_API_KEY = "your-key-here";
   ```

If no key is provided, the chatbot falls back to local, predefined responses.

---

## Installation & Deployment

### Local Testing
```bash
# Clone the repository
git clone https://github.com/yourusername/weforge-landing.git

# Navigate to directory
cd weforge-landing

# Open in browser (or use a live server)
open index.html
# OR use Live Server extension in VS Code
```


## Performance Metrics

- ⚡ **Lighthouse Score:** 95+ (Performance)
- 📊 **PageSpeed:** Optimized for Core Web Vitals
- 🎯 **No external dependencies** (except fonts & icons)
- ✅ **Accessibility:** WCAG 2.1 compliant

---

## Code Quality

- **Vanilla JavaScript** — No framework bloat
- **Semantic HTML** — Proper structure for SEO
- **CSS Variables** — Easy theming and maintenance
- **Mobile-First** — Progressive enhancement
- **Clean Architecture** — Organized, readable code

---

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary: #d4ff00;
  --accent: #1a1a1a;
  --bg: #0a0a0a;
  /* ... */
}
```

### Fonts
Modify Google Fonts import in `index.html` and update CSS

### Content
All text is editable directly in `index.html` — no build process needed

---

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Enhancements

- [ ] Analytics integration (Google Analytics)
- [ ] Blog section with case studies
- [ ] Project portfolio showcase
- [ ] Email subscription form
- [ ] Dark/Light mode toggle
- [ ] Multi-language support

---

## License

Private project for WeForge Technologies. All rights reserved.

---

## Author

**Ajay Mishra** | AI Engineer & Web Developer  
📧 ajaymishraj25@gmail.com  
🔗 [GitHub](https://github.com/ajaymishraj) | [Portfolio](https://ajxmishra1.web.app/)

---


Built with ❤️ and attention to detail.
