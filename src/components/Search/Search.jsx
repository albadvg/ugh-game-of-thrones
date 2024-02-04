import { t } from "i18next";
import "./Search.scss";
import { useContext} from "react";
import { Context } from "../../context/context";

export default function Search() {

  const {setSearch} = useContext(Context);

  let searchTerm = '';

  const handleInput = (e) => {
    searchTerm = e.target.value
  }

  const capitalize = str => {
    return str.split(' ')
      .map(word => word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
      .join(' ');
  }


  const submitChange = (e) => { 
    e.preventDefault();
    const capitalized = capitalize(searchTerm);
    setSearch(capitalized);
  }


    return (
      <form className='form' onSubmit={submitChange}> 
        <input placeholder={t("search")} type="text" className='form--buscador' onChange = {handleInput}></input>
      </form>
    )

  }
