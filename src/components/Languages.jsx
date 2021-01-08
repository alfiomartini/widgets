import React from 'react';
import './css/Languages.css';
const LANGUAGES = [
  { label:"Afrikaans", value:'af' },
  { label:"Arabic", value:'ar' },
  { label:"French", value:'fr' },
  { label:"German", value:'de' },
  { label:"Italian", value:'it' },
  { label:"Japanese", value:'ja' },
  { label:"Latin", value:'la'},
  { label:"Portuguese", value:'pt' },
  { label:"Russian", value:'ru' },
  { label:"Simplified Chinese", value:'zh-CN' },
  { label:"Spanish", value:'es' }
]

const Languages = (props) => {
   
  const { langCode, onLanguageChange } = props;
  const currentLang = LANGUAGES.find(l => l.value === langCode).label;

  const onSelect = language => {
    onLanguageChange(language);
  }
  const optionsList = LANGUAGES.map((item, index) => {
    return (
        <li key={index}>
          <span className="dropdown-item" 
             onClick={() => onSelect(item.value)}
          >{item.label}
          </span>
        </li>
    )
  })
  return(
    <div className="dropdown">
      <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" 
        id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        Select Language
      </button>
      <span className="badge bg-secondary">
        {currentLang}
      </span>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {optionsList}
      </ul>
    </div>
  )
}

export default Languages;