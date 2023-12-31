import './index.css'

const BannerCardItem = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
