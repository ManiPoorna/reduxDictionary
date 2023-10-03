import React, { useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import { addToHistory } from '../redux/actions/historyActions.js';


const Home = () => {
  const dispatch = useDispatch();
  const historyData = useSelector(state => state);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(data)
  
  const implementSearch = (e) => {
    e.preventDefault();
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
      .then((response) => {
        // console.log(response.data[0])
        console.log(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        setData(response.data[0])
        setErrorMessage("");
      })
      .catch(err => {
        console.log("error: ", err.response.data.title)
        setErrorMessage(err.response.data.title);
        setData("")
      })
    const obj = {
      id: historyData.length + 1,
      link : `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`,
      searchTerm
    }
    dispatch(addToHistory(obj));
  }
  return (
    <div>
      <div className='input'>
        <form onSubmit={(e)=>implementSearch(e)} className='form'>
          <input type='text' placeholder='Search...' onChange={(e)=>setSearchTerm(e.target.value)}/>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='result'>
          {
            data !== "" ? 
              <div className='inner-div'>
                <h2>Word : {data.word}</h2>
                <p>Phonetic: {data.phonetic}</p>
                {
                  data.phonetics && data.phonetics.map((phonetic,index)=>(
                  <div className="audio" key={index}>
                    {
                    phonetic.audio!==undefined ?
                    <div>
                      <p>Text : {phonetic.text}</p>
                      <audio src ={phonetic.audio} alt ={phonetic.audio} controls/>
                    </div> : ""
                    }
                  </div>
                  ))
              }
              {
                data.meanings && data.meanings.map((meaning, index) => (
                  <div className="meaning" key={index}>
                    <h3 >Part of Speech : {meaning.partOfSpeech}</h3>
                    {
                      meaning.synonyms && <p key={index}>Synonym: {meaning.synonyms[0] !== undefined ? meaning.synonyms : "No Synonym found"}</p>
                    }
                    <div className='examples'>
                      Definition : {meaning.definitions[0].definition}
                    </div>
                  </div>
                ))
              }
              </div>
            : <h1 style={{textAlign:"center"}}>{ errorMessage}</h1>
          }          
        </div>
    </div>
  )
}

export default Home