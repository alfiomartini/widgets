import React, {useEffect, useState } from 'react';
import './css/Translate.css';
import ReactHtmlParser from 'react-html-parser';

const API_KEY = process.env.REACT_APP_TRANS_API;

const doTranslation = (input, languageCode) => {
  // try to detect source language automatically
  return fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${input}&target=${languageCode}`, {method:'POST'}) 
  .then(resp => {
    return resp.json();
  })
  .then(function (response) {
    const translatedText= response.data.translations[0].translatedText;
    return ReactHtmlParser(translatedText);
  })
  .catch(function (error) {
    console.log(error.message);
    return "";
  });
}

const Translation = ({ langCode, text }) => {
  const [ translated, setTranslated ] = useState('');
  useEffect(() =>{
     if (!text){
       return;
     }
     doTranslation(text, langCode).then(data => {
         setTranslated(data);
     })
  },[text, langCode]);

  return(
    <div>
      <h3 className='mt-3'>Output</h3>
      <div className='translated'>
          {translated}
      </div>
    </div>
  )
}

export default Translation;
