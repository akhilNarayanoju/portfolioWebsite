# Akhil Narayanoju - Portfolio Website

A modern, responsive personal portfolio website showcasing my work as an Angular / Frontend Developer.

## Features

- **Responsive Design**: Fully mobile-responsive layout that works on all devices
- **Smooth Animations**: Fade-in, slide-up, and hover animations for enhanced interactivity
- **Sticky Navigation**: Fixed navbar with smooth scrolling between sections
- **Modern UI**: Clean design with blue and gray accent colors
- **Interactive Elements**: Hover effects on buttons, cards, and icons
- **Scroll Animations**: Elements animate into view as you scroll
- **Contact Form**: Functional contact form with validation
- **Social Links**: Easy access to social media profiles

## Sections

1. **Hero Section**: Professional introduction with photo, name, and title
2. **About Me**: Overview of experience and skills
3. **Skills**: Showcase of technologies and tools
4. **Projects**: Portfolio of completed work
5. **Experience**: Timeline of professional background
6. **Contact**: Contact form and social links

## Technologies Used

- HTML5
- CSS3 (with modern features like Grid, Flexbox, and animations)
- JavaScript (ES6+)
- Font Awesome (for icons)
- Google Fonts (Poppins)

## Setup Instructions

1. **Add Your Profile Image**:
   - Replace `profile.jpg` in the root directory with your photo
   - Recommended size: 400x400px or larger (square format)

2. **Add Project Images** (Optional):
   - Add `project1.jpg`, `project2.jpg`, `project3.jpg`, `project4.jpg` to display project screenshots
   - Recommended size: 1200x800px

3. **Update Personal Information**:
   - Open `index.html` and update:
     - Social media links (GitHub, LinkedIn, Twitter)
     - Email address
     - Phone number
     - Project details and links
     - Any other personal information

4. **Customize Colors** (Optional):
   - Open `styles.css` and modify the CSS variables in the `:root` section:
     ```css
     --primary-color: #2563eb;
     --primary-dark: #1e40af;
     --secondary-color: #64748b;
     ```

5. **Open the Website**:
   - Simply open `index.html` in your web browser
   - Or deploy to a web server for online hosting

## Customization Guide

### Changing Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-color: #2563eb;  /* Main blue color */
    --primary-dark: #1e40af;   /* Darker shade for hover */
    --secondary-color: #64748b; /* Gray color */
}
```

### Adding More Projects
In `index.html`, duplicate a project card and update the content:
```html
<div class="project-card">
    <div class="project-image">
        <img src="your-project.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="#" class="btn btn-primary">View Live</a>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project...</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
    </div>
</div>
```

### Adding More Skills
In `index.html`, add a new skill card:
```html
<div class="skill-card">
    <div class="skill-icon"><i class="fab fa-your-icon"></i></div>
    <h3>Skill Name</h3>
    <p>Brief description</p>
</div>
```

## Contact Form Setup

The contact form currently shows a notification message. To make it functional:

1. **Using a Backend Service**:
   - Integrate with services like Formspree, EmailJS, or your own backend
   - Update the form submission logic in `script.js`

2. **Using EmailJS** (Example):
   ```javascript
   emailjs.send("service_id", "template_id", formData)
       .then(function(response) {
           showNotification('Message sent successfully!', 'success');
       });
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

- Optimize images before uploading (use WebP format for better compression)
- Consider lazy loading for images
- Minify CSS and JavaScript for production

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your folder to Netlify
2. Your site will be live instantly

### Vercel
1. Import your GitHub repository
2. Deploy with one click

## Optional Features

Uncomment in `script.js` to enable:
- **Typing Effect**: Animated typing for hero title
- **Dark Mode**: Toggle between light and dark themes

## License

This project is open source and free to use for personal purposes.

## Contact

- **Email**: akhil@example.com
- **LinkedIn**: [linkedin.com/in/akhilnarayanoju](https://linkedin.com/in/akhilnarayanoju)
- **GitHub**: [github.com/akhilnarayanoju](https://github.com/akhilnarayanoju)

---

Built with ❤️ by Akhil Narayanoju