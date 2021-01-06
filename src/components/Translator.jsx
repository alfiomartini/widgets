import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/Translator.css';
import Field from './Field';
import Languages from './Languages';
import Translate from './Translate';

function Translator() {

  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('pt')
  return (
    <div className="translator">
       <Field value={input} onChange={setInput}/>
       <Languages langCode={language} onLanguageChange={setLanguage}/>
       <Translate langCode={language} text={input}/> 
    </div>
  );
}

export default Translator;
