import './FilterAndSearch.css'
import ResultsDisplay from './ResultsDisplay.jsx'
import search from '../public/sample-responses/search.json'
import React, { useState, useEffect } from 'react';

export default function FilterAndSearch() {
  const [fishFree, setFishFree] = useState(false)
  const [dairyFree, setDairyFree] = useState(false)
  const [soyFree, setSoyFree] = useState(false)
  const [eggFree, setEggFree] = useState(false)
  const [nutFree, setNutFree] = useState(false)
  const [peanutFree, setPeanutFree] = useState(false)
  const [grainFree, setGrainFree] = useState(false)
  
  const [groceryItem, setGroceryItem] = useState("")
  const [searchData, setSearchData] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitted(true)
    setLoading(false)
  } 
  
  return (
    <div>
    <form className='mainform' onSubmit={handleSubmit}>
      <label htmlFor="checkboxes" className='select'>Select Allergies To Filter By</label>

      <div className='tablewrap'>
        <div id="checkboxes" className='table'>
          <div className='option'>
            <input type="checkbox" id="allergy-nuts" className='check' onChange={event => setNutFree(!nutFree)} value={nutFree} />
            <label htmlFor="allergy-nuts" className='slabel'>Nuts</label>
          </div>

          <div className='option'>
            <input type="checkbox" id="allergy-fish" className='check' onChange={event => setFishFree(!fishFree)} value={fishFree}/>
            <label htmlFor="allergy-fish" className='slabel'>Fish</label>
          </div>

          <div className='option'>
            <input type="checkbox" id="allergy-dairy" className='check' onChange={event => setDairyFree(!dairyFree)} value={dairyFree} />
            <label htmlFor="allergy-dairy" className='slabel'>Dairy</label>
          </div>

          <div className='option'>
            <input type="checkbox" id="allergy-soy" className='check' onChange={event => setSoyFree(!soyFree)} value={soyFree} />
            <label htmlFor="allergy-soy" className='slabel'>Soy</label>
          </div>

          <div className='option'>
            <input type="checkbox" id="allergy-eggs" className='check' onChange={event => setEggFree(!eggFree)} value={eggFree} />
            <label htmlFor="allergy-eggs" className='slabel'>Eggs</label>
          </div>

          <div className='option'>
            <input type="checkbox" id="allergy-peanut" className='check' onChange={event => setPeanutFree(!peanutFree)} value={peanutFree} />
            <label htmlFor="allergy-peanut" className='slabel'>Peanut</label>
          </div>

          <div className='option'>
            <input type="checkbox" id="allergy-grain" className='check' onChange={event => setGrainFree(!grainFree)} value={grainFree} />
            <label htmlFor="allergy-grain" className='slabel'>Grain</label>
          </div>

        </div>
      </div>

      <div className='search'>
        <input id="searchbar" type="text" placeholder="Search for food products..." onChange={event => setGroceryItem(event.target.value)} value={groceryItem} />
      </div>

      <div className='subbut'>
        <input type="submit" id='subbutton'></input>
      </div>
    </form>

    <div>
      {!loading && <ResultsDisplay data={JSON.stringify(search)} />}
    </div>
      
  </div>
  );
}