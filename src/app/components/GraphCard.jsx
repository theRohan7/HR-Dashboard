import '../CSS/Card.css'

function GraphCard({data}) {
    const {title, value, demography, remark} = data
  return (
    <div className="graphcard-cotainer">
      <h2 className="graphcard-title" >{title}</h2>
      <p className="graphcard-value" >{value}</p>
      <p className="graphcard-demography" >
        <span>{demography.men} Men</span><br />
        <span>{demography.women} Women</span><br />
      </p>
    </div>
  )
}

export default GraphCard
