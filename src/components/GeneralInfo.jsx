import Card from "./Card";
import FormField from './FormField';

import '../styles/GeneralInfo.css';
import { useState } from "react";

function GeneralInfo() {
    const [form, setForm] = useState({
        fullName: "",
        address: "",
        city: "",
        zip: "",
        email: "",
        phone: "",
        github: "",
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
        ...prev, [name]: value}));
    };

    return (
    <Card title = "Personal Information" subhead= "This is what the employers need to know about you">

    <div className="fields-container">
    <FormField 
    label='Full Name'
    type='text' 
    value={form.fullName}
    name={'fullName'} 
    onChange={handleChange} 
    />
    <div className="location-row">
    <FormField 
    label='Address'
    type='text' 
    value={form.address} 
    name={'address'} 
    onChange={handleChange} 
    />

    <FormField 
    label='City'
    type='text' 
    value={form.city} 
    name={'city'} 
    onChange={handleChange}  
    />

    <FormField 
    label='Zip Code'
    type='text' 
    value={form.zip} 
    name={'zip'} 
    onChange={handleChange} 
    />
</div>

<div className="contact-row">
    <FormField 
    label='Email'
    type='text' 
    value={form.email} 
    name={'email'} 
    onChange={handleChange}  
    />

    <FormField 
    label='Phone'
    type='text' 
    value={form.phone} 
    name={'phone'} 
    onChange={handleChange}  
    />
</div>

    <FormField 
    label='GitHub'
    type='text' 
    value={form.github} 
    name={'github'} 
    onChange={handleChange} 
    />
</div>

    </Card>
    )
};

export default GeneralInfo;