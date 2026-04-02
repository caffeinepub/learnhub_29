# LearnHub - Online Course Website

## Current State
Fresh project with scaffolded React/TypeScript/Tailwind frontend and empty Motoko backend.

## Requested Changes (Diff)

### Add
- Multi-page React SPA with React Router: Home, Courses, About, Contact
- Navbar with logo and navigation links, mobile-responsive hamburger menu
- Home page: hero section, featured courses carousel, CTA buttons
- Courses page: course card grid with images, titles, descriptions, enroll buttons, modal popup for course details
- About page: mission section, instructor/team cards with images
- Contact page: form with name, email, message fields and validation
- Footer with links, social icons, copyright
- Backend: store contact form submissions and course data

### Modify
- Replace default App.tsx with multi-page routing structure

### Remove
- Default placeholder content

## Implementation Plan
1. Generate Motoko backend for courses data and contact form submissions
2. Build React frontend with React Router for multi-page navigation
3. Implement all 4 pages with full responsive design using Tailwind
4. Add carousel for featured courses on Home page
5. Add modal for course details on Courses page
6. Add contact form with validation
7. Wire frontend to backend APIs
