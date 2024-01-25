import React from "react";
import "./Dashboard.css";
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <input type="checkbox" id="nav-toggle" />
        <div className="sidebar-brand ">
          <h2>
            <span className="ml-14 p-4"></span>Haul in
          </h2>
          <h1 className="mt-6 text-lg pl-4 p-1 bg-gray-600 ">Dashboard</h1>
        </div>
      <div className="sidebar mt-24">
        <div className="sidebar-menu">
        <h1 className="ml-20 text-lg  p-1 ">Dashboard</h1>
          <ul>
            <li>
              <a href="" className="active">
                <span className="las la-igloo"></span>
                <span>As Service Provider</span>
              </a>
            </li>
            <li>
              <Link to={'/'}>
                <span className="las la-users"></span>
                <span>Service Monitoring</span>
              </Link>
            </li>
            <li>
              <Link to = {'/dashboard/servicecategory'}>
                <span className="las la-users"></span>
                <span>Service Category</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/driverregistration'}>
                <span className="las la-clipboard-list"></span>
                <span>Driver Registration</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/OrderList'}>
                <span className="las la-shopping-bag"></span>
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/myorders'}>
                <span className="las la-shopping-bag"></span>
                <span>My Orders</span>
              </Link>
            </li>
            <li>
              <a href="" className="active">
                <span className="las la-igloo"></span>
                <span>As Customer</span>
              </a>
            </li>
            <li>
              <Link to={'/dashboard/bookingTruck'}>
                <span className="las la-user-circle "></span>
                <span>Truck Booking</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/productdetails'}>
                <span className="las la-clipboard-list"></span>
                <span>Product Details</span>
              </Link>
            </li>
            <li>
              <Link to= {'/dashboard/customercart'}>
                <span className="las la-user-circle "></span>
                <span>Orders</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header className="-mt-10">
          <h2>
            <label htmlFor="nav-toggle">
              <span className="las la-bars"></span>
            </label>
          </h2>
          <div className="flex flex-row">
            <div>
              <label htmlFor="" className="p-2">
                Order Tracking
              </label>
            </div>
            <div className="border w-72 rounded-lg border-pink-900 ">
              <input
                className=" p-2.5 pl-3"
                type="search"
                placeholder="Enter order ID"
              />
            </div>
          </div>
        </header>

        <main>
          <div className="cards">
            <div className="card-single">
              <div>
                <h1>6</h1>
                <span>Orders</span>
              </div>
              <div>
                <span className="las la-users"></span>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>79</h1>
                <span>Customers</span>
              </div>
              <div>
                <span className="las la-clipboard-list"></span>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>124</h1>
                <span>Delivery</span>
              </div>
              <div>
                <span className="las la-shopping-bag"></span>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>6</h1>
                <span>Booking</span>
              </div>
              <div>
                <span className="lab la-google-wallet"></span>
              </div>
            </div>
          </div>
          <div className="recent-grid">
            <div className="projects">
              <div className="card">
                <div className="card-header">
                  <h3>Details</h3>
                  <button>
                    See all <span className="las la-arrow-right"></span>
                  </button>
                </div>

                <div className="card-body">
                  <div className="table-responsive">
                    <table width="100%">
                      <thead>
                        <tr className="flex flex-row gap-48">
                          <div>
                            <td>Orders</td>
                          </div>
                          <div>
                            <td>Drivers</td>
                          </div>
                          <div>
                            <td>Status</td>
                          </div>
                        </tr>
                      </thead>
                      <div>
                        <tbody>
                          <tr className="flex flex-row gap-40">
                            <td>UI/UX Design</td>
                            <div>
                              <td>hhhhhhh</td>
                            </div>
                            <div>
                              <td>
                                <span className="status purple"></span> review
                              </td>
                            </div>
                          </tr>
                          <tr className="flex flex-row gap-40">
                            <td>UI/UX Design</td>
                            <div>
                              <td>hhhhhhh</td>
                            </div>
                            <div>
                              <td>
                                <span className="status pink"></span> review
                              </td>
                            </div>
                          </tr>
                          <tr className="flex flex-row gap-40">
                            <td>UI/UX Design</td>
                            <div>
                              <td>hhhhhhh</td>
                            </div>
                            <div>
                              <td>
                                <span className="status orange"></span> review
                              </td>
                            </div>
                          </tr>
                          <tr className="flex flex-row gap-40">
                            <td>UI/UX Design</td>
                            <div>
                              <td>hhhhhhh</td>
                            </div>
                            <div>
                              <td>
                                <span className="status purple"></span> review
                              </td>
                            </div>
                          </tr>
                          <tr>
                            <tr className="flex flex-row gap-40">
                              <td>UI/UX Design</td>
                              <div>
                                <td>hhhhhhh</td>
                              </div>
                              <div>
                                <td>
                                  <span className="status pink"></span> review
                                </td>
                              </div>
                            </tr>
                          </tr>
                          <tr className="flex flex-row gap-40">
                            <td>UI/UX Design</td>
                            <div>
                              <td>hhhhhhh</td>
                            </div>
                            <div>
                              <td>
                                <span className="status orange"></span> review
                              </td>
                            </div>
                          </tr>

                          <tr className="flex flex-row gap-40">
                            <td>UI/UX Design</td>
                            <div>
                              <td>hhhhhhh</td>
                            </div>
                            <div>
                              <td>
                                <span className="status purple"></span> review
                              </td>
                            </div>
                          </tr>

                          <tr className="flex flex-row gap-40">
                            <td>UI/UX Design</td>
                            <div>
                              <td>hhhhhhh</td>
                            </div>
                            <div>
                              <td>
                                <span className="status pink"></span> review
                              </td>
                            </div>
                          </tr>
                          <tr className="flex flex-row gap-40">
                            <td>UI/UX Design</td>
                            <div>
                              <td>hhhhhhh</td>
                            </div>
                            <div>
                              <td>
                                <span className="status purple"></span> review
                              </td>
                            </div>
                          </tr>
                        </tbody>
                      </div>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="customers">
              <div className="card">
                <div className="card-header">
                  <h3>New customer</h3>

                  <button>
                    See all <span className="las la-arrow-right"></span>
                  </button>
                </div>

                <div className="card-body">
                  <div className="customer">
                    <div className="info">
                      <img src="img2.jpg" width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S. cunningham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle"></span>
                      <span className="las la-comment"></span>
                      <span className="las la-phone"></span>
                    </div>
                  </div>
                  <div className="customer">
                    <div className="info">
                      <img src="img2.jpg" width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S. cunningham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle"></span>
                      <span className="las la-comment"></span>
                      <span className="las la-phone"></span>
                    </div>
                  </div>
                  <div className="customer">
                    <div className="info">
                      <img src="img2.jpg" width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S. cunningham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle"></span>
                      <span className="las la-comment"></span>
                      <span className="las la-phone"></span>
                    </div>
                  </div>
                  <div className="customer">
                    <div className="info">
                      <img src="img2.jpg" width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S. cunningham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle"></span>
                      <span className="las la-comment"></span>
                      <span className="las la-phone"></span>
                    </div>
                  </div>
                  <div className="customer">
                    <div className="info">
                      <img src="img2.jpg" width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S. cunningham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle"></span>
                      <span className="las la-comment"></span>
                      <span className="las la-phone"></span>
                    </div>
                  </div>
                  <div className="customer">
                    <div className="info">
                      <img src="img2.jpg" width="40px" height="40px" alt="" />
                      <div>
                        <h4>Lewis S. cunningham</h4>
                        <small>CEO Excerpt</small>
                      </div>
                    </div>
                    <div className="contact">
                      <span className="las la-user-circle"></span>
                      <span className="las la-comment"></span>
                      <span className="las la-phone"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
