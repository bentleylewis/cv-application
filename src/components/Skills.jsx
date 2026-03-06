import Card from "./Card";
import '../styles/Skills.css'
import FormField from "./FormField";

function Skills({ onNext, onBack, data, updateData }) {

    const handleChange= (e) => {
        const { name, value } = e.target;
        updateData({
            ...data, [name] : value
        });
    };


    return (

        <Card title="Technical Skills" subhead="A Chance to show Employers your skill set" onNext={onNext} onBack={onBack}>
            <div className="skills-container">
            <FormField 
            label='Languages'
            type='text' 
            value={data.languages}
            name={'languages'} 
            placeholder="Ex: Javascript, Python, C++"
            onChange={handleChange} 
            />
            
            <FormField 
            label='Technologies'
            type='text' 
            value={data.technologies}
            name={'technologies'} 
            onChange={handleChange} 
            placeholder="Ex: React.js, Angular, Django"
            />
            </div>    
            </Card>
    )
}

export default Skills;