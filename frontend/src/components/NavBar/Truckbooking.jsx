import React from 'react'
import truckOrder from '../../assets/image/truckOrder.jpg';
import Boxx from '../../assets/image/Boxx.jpg';
import "./Truckbooking.css";

const Truckbooking = () => {
  return (
    <>
    <div className='seaching'>
        <label htmlFor="Search" className='labell'>Search</label>
        <input type="text" name="" id="" className='input' placeholder='search for trucks'/>

    </div>

    <hr />
<div className="row booking ">
    <div className="col-md-5 ">
      <div className="row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
          Read More
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={truckOrder} alt="" className='mb-1' width="200" height="250" preserveAspectRatio="xMidYMid slice" />
        </div>
      </div>
    </div>
    <div className="col-md-5 ">
      <div className="row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
          Read More
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={truckOrder} alt="" className='mb-1' width="200" height="250" preserveAspectRatio="xMidYMid slice" />
        </div>
      </div>
    </div>
    <div className="col-md-5 ">
      <div className="row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
          Read More
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={truckOrder} alt="" className='mb-1' width="200" height="250" preserveAspectRatio="xMidYMid slice" />
        </div>
      </div>
    </div>
    <div className="col-md-5 ">
      <div className="row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
          Read More
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={truckOrder} alt="" className='mb-1' width="200" height="250" preserveAspectRatio="xMidYMid slice" />
        </div>
      </div>
    </div>
    <div className="col-md-5 ">
      <div className="row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
          Read More
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={truckOrder} alt="" className='mb-1' width="200" height="250" preserveAspectRatio="xMidYMid slice" />
        </div>
      </div>
    </div>
    <div className="col-md-5 ">
      <div className="row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
          Read More
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={truckOrder} alt="" className='mb-1' width="200" height="250" preserveAspectRatio="xMidYMid slice" />
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Truckbooking;
;