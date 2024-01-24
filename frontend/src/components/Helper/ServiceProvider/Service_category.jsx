import React from 'react'
import "./serviceCategory.css"


const Service_category = () => {
  return (
    <>
    <div>
      <h1 className='service'>Service Category</h1>
    </div>
    <hr />
    <div className='firstSection'>
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
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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
  <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
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
  </div>

        </>
  )
}

export default Service_category
