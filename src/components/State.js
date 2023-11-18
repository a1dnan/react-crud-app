import React, { useContext } from 'react'
import { AppContext } from '../app/app'

function State() {
    const [state, setState] = useContext(AppContext);
  return (
    <button type="button" className="btn btn-primary">
        Caddy<span className="badge text-bg-danger ms-2">{state.products.length}</span>
    </button>
  )
}

export default State