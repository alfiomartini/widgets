import React, {useEffect, useState } from 'react';
import './Translate.css';
import ReactHtmlParser from 'react-html-parser';
import {URL_PROD} from '../settings';

const doTranslation = (input, languageCode) => {
 
  let options = {input:input, code:languageCode};
  return fetch(`${URL_PROD}/translate`,{
    method:'post',
    body: JSON.stringify(options),
    headers: {
      "Content-Type": "application/json"
    }
  }) 
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
