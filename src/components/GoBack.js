import React from 'react'
import { useHistory } from 'react-router-dom'

export function GoBack(props) {
  const history = useHistory();

  function onBack() {
    history.goBack();
  }

  function onQuickLink(targetUrl) {
    history.push(targetUrl);
  }

  return (
    <div>
      Short Links:&nbsp;
      <a href='#' onClick={onBack}>BACK</a>
    </div>
  )
}
