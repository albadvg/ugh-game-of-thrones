import React, { useContext } from 'react';
import "./Search.scss";

export default function Search() {

  return (
    <form className='form'> 
      <input placeholder={("buscar")} type="text" className='form--buscador'></input>
    </form>
  )

  }
