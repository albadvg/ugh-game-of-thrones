import { t } from "i18next";
import "./Search.scss";
import { useContext} from "react";
import { Context } from "../../context/context";

export default function Search() {

  const {search , setSearch} = useContext(Context);

  let searchTerm = '';

  const handleInput = (e) => {
    searchTerm = e.target.value
    console.log(searchTerm);
  }

  const submitChange = (e) => { 
    e.preventDefault();
    setSearch(searchTerm);
  }


  return (
    <form className='form' onSubmit={submitChange}> 
      <input placeholder={t("search")} type="text" className='form--buscador' onChange = {handleInput}></input>
    </form>
  )

  }
