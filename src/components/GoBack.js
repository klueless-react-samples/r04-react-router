import React from 'react'
import { useHistory } from 'react-router-dom'

export function GoBack(props) {
  const history = useHistory();

  function onBack() {
    history.goBack();
  }

  function onExtraLink(targetUrl) {
    history.push(targetUrl);
  }

  return (
    <div>

      <div>
        Short Links:&nbsp;
        <a href='#' onClick={onBack}>Back</a>

        {props.extra && (
        <>
          <span>|</span>
          <a href='#' onClick={ () => onExtraLink(props.extra.link) }>
            {props.extra.title}
          </a>
        </>
        )
        }
      </div>
    </div>


  )
}
