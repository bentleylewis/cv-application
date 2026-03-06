import Card from "./Card";
import FormField from './FormField';

import '../styles/GeneralInfo.css';


function GeneralInfo( { onNext, data, updateData }) {

    const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({
        ...data, [name]: value
    });
    };

    return (
    <Card title = "Personal Information" subhead= "This is what the employers need to know about you" onNext={onNext}>

    <div className="fields-container">
    <FormField 
    label='Full Name'
    type='text' 
    value={data.fullName}
    name={'fullName'} 
    onChange={handleChange} 
    />
    
{/* <div className="location-row"></div> */}
    {/* <FormField 
    label='Address'
    type='text' 
    value={data.address} 
    name={'address'} 
    onChange={handleChange} 
    />

    <FormField 
    label='City'
    type='text' 
    value={data.city} 
    name={'city'} 
    onChange={handleChange}  
    />

    <FormField 
    label='Zip Code'
    type='text' 
    value={data.zip} 
    name={'zip'} 
    onChange={handleChange} 
    /> */}
{/* </div> */}

<div className="contact-row">
    <FormField 
    label='Email'
    type='text' 
    value={data.email} 
    name={'email'} 
    onChange={handleChange}  
    />

    <FormField 
    label='Phone'
    type='text' 
    value={data.phone} 
    name={'phone'} 
    onChange={handleChange}
    placeholder="xxx-xxx-xxxx"
    />
</div>

<div className="location-row">
        
        <FormField 
        label='linkedIn'
        type='text' 
        value={data.linkedIn} 
        name={'linkedIn'} 
        onChange={handleChange}  
        placeholder= "linkedin.com/in/<name>"
        />
 </div>

    <FormField 
    label='GitHub'
    type='text' 
    value={data.github} 
    name={'github'} 
    onChange={handleChange} 
    placeholder="github.com/<name>"
    />
</div>

    </Card>
    )
};

export default GeneralInfo;