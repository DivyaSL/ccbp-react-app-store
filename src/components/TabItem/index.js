import './index.css'

const TabItem = props => {
  const {eachTabDetails, onSelectingTab, activeBtnEffect} = props
  const {tabId, displayText} = eachTabDetails

  const onClicking = () => {
    onSelectingTab(tabId)
  }

  return (
    <li>
      <button className={activeBtnEffect} type="button" onClick={onClicking}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
