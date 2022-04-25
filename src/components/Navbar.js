import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div><nav class="navbar navbar-expand-xl navbar-dark bg-dark p-3">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse show" id="navbarDark">
        <ul class="navbar-nav mb-2 mb-xl-0">
          <li class="nav-item me-5">
            <Link class="nav-link " aria-current="page" to='/all-banks/'>Home</Link>
          </li>
          <li class="nav-item ">
          <Link class="nav-link " aria-current="page" to='/favourites/'>Favourites</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar