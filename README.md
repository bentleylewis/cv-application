# CV Application

A modern, interactive resume builder built with React. Create, edit, and preview your professional CV with real-time updates.

## Features

**Comprehensive Form Sections**
- Personal Information (name, email, phone, LinkedIn, GitHub)
- Education (school name, degree type, field of study, dates, location)
- Work Experience (company, position, responsibilities, technologies, dates)
- Projects (project name, technologies, description)
- Technical Skills (languages, technologies)

**Full CRUD Operations**
- Add new entries to any section
- Edit existing information in real-time
- Delete entries with proper state management
- Auto-expand newly created entries

**Live Preview**
- Dynamic CV preview that updates as you type
- Professional resume formatting
- Print-friendly design
- Clean, readable layout

**User Experience**
- Expandable/collapsible form sections for easy navigation
- Intuitive form fields with proper validation
- Responsive design with hidden scrollbars
- Smooth transitions and hover effects

## Tech Stack
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with flexbox layout
- **FontAwesome** - Icons (chevrons, trash, graduation cap, briefcase, code)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/bentleylewis/cv-application.git
cd cv-application
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to the provided local URL (typically `http://localhost:5173`)

## Usage

1. **Welcome Screen** - Click "Next" to begin
2. **General Info** - Enter your personal information
3. **Education** - Add your educational background
4. **Experience** - List your work experience
5. **Projects** - Showcase your portfolio projects
6. **Skills** - Highlight your technical abilities
7. **Preview** - View your formatted CV and print if needed

### Adding Entries
Click the **+** icon in any section to add a new entry. The new entry will automatically expand for editing.

### Editing Entries
Click any entry header to expand/collapse its form fields. Edit directly in the fields.

### Deleting Entries
Click the **trash icon** on any entry to remove it.

### Printing
Click the **print icon** in the preview view to open your browser's print dialog. Design is optimized for clean, professional printing.

## Project Structure

```
src/
├── components/
│   ├── Card.jsx              # Reusable card wrapper
│   ├── CvDisplay.jsx         # CV preview component
│   ├── Education.jsx         # Education form section
│   ├── Experience.jsx        # Experience form section
│   ├── FormField.jsx         # Reusable form field component
│   ├── GeneralInfo.jsx       # Personal info form section
│   ├── Projects.jsx          # Projects form section
│   ├── Skills.jsx            # Skills form section
│   └── Welcome.jsx           # Welcome screen
├── styles/
│   ├── shared.css            # Shared button and header styles
│   ├── App.css               # App container styles
│   ├── Card.css              # Card component styles
│   ├── Education.css         # Education section styles
│   ├── Experience.css        # Experience section styles
│   ├── FormField.css         # Form field styles
│   ├── GeneralInfo.css       # General info styles
│   ├── Projects.css          # Projects section styles
│   ├── Skills.css            # Skills section styles
│   ├── Welcome.css           # Welcome screen styles
│   └── CvDisplay.css         # CV preview styles
├── App.jsx                   # Main app component
└── main.jsx                  # Entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Future Enhancements

- [ ] Save/load from local storage
- [ ] Export to PDF
- [ ] Multiple CV templates
- [ ] Drag-and-drop to reorder entries
- [ ] Custom color themes
- [ ] Import from LinkedIn

## License

This project is open source and available under the MIT License.

## Author

**Bentley Lewis**
- GitHub: [@bentleylewis](https://github.com/bentleylewis)
- LinkedIn: [Connect with me](https://linkedin.com/in/bentley-lewis)

---

**Built with ❤️ as a learning project for React fundamentals**
