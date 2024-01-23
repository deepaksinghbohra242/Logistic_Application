import React from 'react'
import "./DriverReg.css";

const Driver_registration = () => {
  return (
<>
<div>
    <h1 className='Driver'>Driver Details</h1>
</div>
<hr />
<div className='main'>
<div className="row name" >
  <div className="col">
    <label htmlFor="">Enter your Name</label>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
  </div>
  <div className="col">
  <label htmlFor="">Enter your last name</label>
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
</div>
  <div className="col dob">
  <label htmlFor="">Date of Birth</label>
    <input type="date" className="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
<div><div className='Gender'> Gender</div>
<label className='radio'>
      <input type="radio" name="gender" value="male" />
      Male
    </label>

    <label className='radio'>
      <input type="radio" name="gender" value="female" />
      Female
    </label>

    <label className='radio'>
      <input type="radio" name="gender" value="other"/>
      Other
    </label>
    </div>

<div className="row g-3 mail">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Phone No.</label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
</div>
<div className='document'>Document Details</div>
<div className="col-md-6 license" >
  <label htmlFor="input" className="form-label">Driving licenses number</label>
    <input type="text" className="form-control" id="input" />
  </div>
  <div className="col-md-6 Addhar" >
  <label htmlFor="input" className="form-label">Addhar number</label>
    <input type="text" className="form-control" id="input" />
  </div>
  <div className='doc col-md-8'>
  <label className=" col-md-12" htmlFor="inputGroupFile01">Upload license</label>
  <input type="file" className="form-control col-md-8" id="input" />
  </div>
<div className='Addhar col-md-8'>
   <label className=" col-md-12" htmlFor="inputGroupFile01">Upload Addhar</label>
  <input type="file" className="form-control col-md-8" id="input" />
  </div>

<div className="row name" >
<div className="dropdown dp">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   License types
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">Light motor Vehicle</button></li>
    <li><button className="dropdown-item" type="button">Heavy motor Vehicle</button></li>
    <li><button className="dropdown-item" type="button">MCWG</button></li>
    <li><button className="dropdown-item" type="button">MCWOG</button></li>
  </ul>
</div>
  <div className="col">
    <label htmlFor="">Driving Experiences</label>
    <input type="select" className="form-control" placeholder="In year" aria-label="" />
  </div>
    
</div>
  <button type="submit" className='buttn'>Submit</button>
  
</div>
</>
  )
}

export default Driver_registration;