import React, { useState } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios';

const History = () => {
  const historyData = useSelector(state => state)
  console.log(historyData)
  const [data, setData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const implementSearch = (link) => {
    axios.get(link)
      .then((response) => {
        // console.log(response.data[0])
        setData(response.data[0])
        console.log(link)
        setErrorMessage("");
      })
      .catch(err => {
        console.log("error: ", err.response.data.title)
        setErrorMessage(err.response.data.title);
        setData("")
      })
  }


  return (
    <div>
      <h1 style={{ textAlign: "center", padding:"20px" }}>History</h1>
      <ul type='none' className='history-items'>
        {
          historyData && historyData.map((history,index) => (
            <li key={index} onClick={()=>implementSearch(history.link)}>{history.searchTerm }</li>     
          ))
        }
      </ul>

      
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

export default History