// Write your code here
import './index.css'

const AppItem = props => {
  const {eachItemDetails} = props
  const {imageUrl, appName} = eachItemDetails

  return (
    <li className="item-container">
      <div className="img-container">
        <img className="app-img" src={imageUrl} alt={appName} />
      </div>
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
