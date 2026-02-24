import Card from "./Card";
import FormField from './FormField';

import '../styles/GeneralInfo.css';
import { useState } from "react";

function GeneralInfo() {
    const [name, setName] = useState("");

    return (
    <Card title = "Personal Information" subhead= "This is what the employers need to know about you">

    <FormField 
    label='Full Name'
    type='text' 
    value={name} 
    onChange={(e)=> setName(e.target.value)} 
    placeholder = "Full Name"/>

    </Card>
    )
};

export default GeneralInfo;