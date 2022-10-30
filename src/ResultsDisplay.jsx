import './ResultsDisplay.css'

const ResultsDisplay = (props) => {
  const getProps = () => {
    console.log('starting parse ' + props.data)
    return (<div className='resultB'>{
      JSON.parse(props.data).products.map((element, index) => <p key={index}>{element.title}</p>)
      }</div>)
  }
  
  return (
    <div>
      {!props.data && '...' || getProps()}
      </div>
  );
}

export default ResultsDisplay;