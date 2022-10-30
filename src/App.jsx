import './App.css'
import FilterAndSearch from './FilterAndSearch.jsx'
import ResultsDisplay from './ResultsDisplay.jsx'

export default function App() {

  return (
    <div className="App">
      <header className="header">
        <img src='/icons/8.png' />
      </header>

      <div className='divider'>
        <hr></hr>
      </div>

      <div className='body'>
        <FilterAndSearch />

        <div className='results'>
        </div>
      </div>
      <div className='footer'>
        <p>Team: Turkey Sandwich</p>
        <p>Credits:</p>
        <p>API: https://spoonacular.com/food-api</p>
      </div>

    </div>
  )

}
