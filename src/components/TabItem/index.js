import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateTabId} = props
  const {tabId, displayText} = tabDetails

  const activeTabItem = isActive ? 'button active' : 'button'

  const onClickTab = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={`${activeTabItem}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
