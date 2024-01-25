import React from 'react'
import "./serviceCategory.css"
import truck6 from '../../../assets/image/truck6.png'
import truck from '../../../assets/image/truck.png'
import lorri from '../../../assets/image/lorri.png'
import khachar from '../../../assets/image/khachar.jpeg'
import smalltruck from '../../../assets/image/smalltruck.jpeg'
import bigtruck from '../../../assets/image/bigtruck.jpeg'

const Service_category = () => {
  return (
    <>
    <div>
      <h1 className='service'>Service Category</h1>
    </div>
    <hr />
    <div className='firstSection '>
      <div className='input-section'>
        <label htmlFor="">Search</label>
        <input type="text" placeholder='search' className='input'/>
      </div>
      <div>
      <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Search types
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">Light motor Vehicle</button></li>
    <li><button className="dropdown-item" type="button">Heavy motor Vehicle</button></li>
    <li><button className="dropdown-item" type="button">Mules</button></li>
  </ul>
</div>
</div>
    </div>
<br />
<hr />
<br />
<br />

    <div className="container">

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  <div className="col">
    <div className="card shadow-sm">
      <img src={truck6} className='h-56 w-full' />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-lg btn-outline-secondary">Add</button>
          </div>
          <div className='name_cat'>
            <span>Truck</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card shadow-sm">
      <img src={truck} className='h-56 w-3/4 ml-8' />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-lg btn-outline-secondary">Add</button>
          </div>
          <div className='name_cat'>
            <span>Truck</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card shadow-sm">
  <img src={lorri} className='h-56 w-11/12 ml-3' />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-lg btn-outline-secondary">Add</button>
          </div>
          <div className='name_cat'>
            <span>Truck</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
  <div className="card shadow-sm col mb-20">
  <img src={smalltruck} className='h-56 w-full' />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-lg btn-outline-secondary">Add</button>
          </div>
          <div className='name_cat'>
            <span>Truck</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card shadow-sm">
  <img src={bigtruck} className='h-56 w-full' />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-lg btn-outline-secondary">Add</button>
          </div>
          <div className='name_cat'>
            <span>Truck</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card shadow-sm col mb-20">
  <img src={khachar} className='h-56 w-10/12 ml-3' />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-lg btn-outline-secondary">Add</button>
          </div>
          <div className='name_cat'>
            <span>mules</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

        </>
  )
}

export default Service_category
