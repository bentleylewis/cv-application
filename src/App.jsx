import { useState } from 'react'
import './styles/App.css'
import Welcome from './components/Welcome'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import CvDisplay from './components/CvDisplay'
import Skills from './components/Skills'
import Projects from './components/Projects'


function App() {
  const [currentView, setCurrentView] = useState('welcome');
  const [form, setForm] = useState({
    GeneralInfo: { 
      fullName: "",
      // address: "",
      // city: "",
      // zip: "",
      linkedIn: "",
      email: "",
      phone: "",
      github: "",
    },
    Education: [{
        schoolName: "",
        fieldOfStudy: "",
        degreeType: "",
        startOfStudy: "",
        endOfStudy: "",
        location: "",
    }],
    Experience: [{
        companyName: '',
        positionTitle: '',
        location: '',
        responsibilities: '',
        dateFrom: '',
        dateEnd: '',
        technologies: '',
    }],
    Projects: [{
      projectName: '',
      technologies: '',
      description: '',
    }],
    Skills: {
      languages: '',
      technologies: '',
    }
  })


  const addEducation = () => {
    setForm((prev) => ({
      ...prev, Education: [...prev.Education, {}]
    }));
  };

  const removeEducation = (index) => {
    setForm((prev) => ({
      ...prev, Education: prev.Education.filter((entry, i) => i !== index)
    }))
  }

  const addExperience = () => {
    setForm((prev) =>({
    ...prev, Experience: [...prev.Experience, {}]
    }))
  }

 const removeExperience = (index) => {
  setForm((prev) => ({
    ...prev, Experience: prev.Experience.filter((entry, i) => i !== index)
  }))
 }

  const addProject = () => {
    setForm((prev) => ({
      ...prev, Projects: [...prev.Projects, {}]
    }))
  }

   const removeProject = (index) => {
  setForm((prev) => ({
    ...prev, Projects: prev.Projects.filter((entry, i) => i !== index)
  }))
 }

  let content;

  if(currentView === "welcome") {
    content = <Welcome onNext = {() => setCurrentView("general")} />
  }


  if(currentView === 'general') {
    content = <GeneralInfo data={form.GeneralInfo} updateData = {(updatedGeneralInfo) => setForm((prev) => ({
      ...prev, GeneralInfo: updatedGeneralInfo,
    }))
  } 
  onNext= {() => setCurrentView("education")} />
  }
 
  if(currentView === 'education') {
    content = <Education 
    addEducation={addEducation} 
    removeEducation={removeEducation} 
    data={form.Education}
     updateData={(index, updatedEducation) => setForm((prev) => ({ ...prev, Education: prev.Education.map((entry, i) =>
      i === index ? updatedEducation: entry
    ),
  }))
}
    //  updateData={(updatedEducation) => setForm((prev) => ({
    //   ...prev, Education: updatedEducation,
    //  }))
    // }

     onBack= {() => setCurrentView("general")}
     onNext= {() => setCurrentView("experience")}/>
  }

  if(currentView === 'experience') {
    content = 
    <Experience 
    addExperience={addExperience}
    removeExperience={removeExperience}
    data={form.Experience} 
    updateData={(index, updatedExperience) => setForm((prev) => ({...prev, Experience: prev.Experience.map((entry, i) =>
    i === index ? updatedExperience: entry
  ),
}))
  }
    onBack = {() => setCurrentView("education")}
    onNext = {() => setCurrentView("projects")}
  />
}

if(currentView === 'projects') {
  content = 
  <Projects
  addProject={addProject}
  removeProject={removeProject}
  data={form.Projects}
  updateData={(index, updatedProjects) => setForm((prev) => ({...prev, Projects: prev.Projects.map((entry, i) => 
    i === index ? updatedProjects: entry
  ),
}))
  }
  onBack={() => setCurrentView("experience")}
  onNext={() => setCurrentView("skills")}
  
  />
}


if(currentView === 'skills') {
  content = 
  <Skills
  data={form.Skills}
  updateData={(updatedSkills) => setForm((prev) => ({
    ...prev, Skills: updatedSkills, 
  }))
}

onBack={() => setCurrentView("projects")}
onNext={() => setCurrentView("preview")}
/>
}


if(currentView === 'preview') {
  content = <CvDisplay data={form} onBack={() => setCurrentView("skills")} />
}

  return (
    <div className={`app-shell ${currentView === 'preview' ? 'preview-view' : 'cards-view'}`}>
      {content}
    </div>
  );

}

export default App;
