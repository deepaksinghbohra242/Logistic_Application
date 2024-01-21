import React from 'react'
import  "./Dashboard.css"

const Dashboard = () => {
  return (
    <>
   
    <input type="checkbox" id="nav-toggle" />
<div className="sidebar">
    <div className="sidebar-brand">
        <h2><span className="lab la-accusoft"></span><span>Accusoft</span></h2>
    </div>
    <div className="sidebar-menu">
        <ul>
            <li>
                <a href="" className="active"><span className="las la-igloo"></span><span>dashboard</span></a>
            </li>
            <li>

                <a href=""><span className="las la-users"></span><span>customer</span></a>
            </li>
            <li>

                <a href=""><span className="las la-clipboard-list"></span><span>projects</span></a>
            </li>
            <li>

                <a href=""><span className="las la-shopping-bag"></span><span>orders</span></a>
            </li>
            <li>

                <a href=""><span className="las la-receipt"></span><span>inventory</span></a>
            </li>
            <li>

                <a href=""><span className="las la-user-circle "></span><span>accounts
                    </span></a>
            </li>
            <li>

                <a href=""><span className="las la-clipboard-list"></span><span>tasks</span></a>
            </li>
        </ul>
    </div>
</div>
<div className="main-content">
    <header>
        <h2>
            <label htmlFor="nav-toggle">
                <span className="las la-bars"></span>
            </label>
            Deshboard
        </h2>
        <div className="search-wrapper">
            <span className="las la-search"></span>
            <input type="srarch" placeholder="Search here" />
        </div>
        <div className="user-wrapper">
            <img src="img2.jpg" width="30px" height="30px" alt="" />
            <div>

                <h4>Ashish kathait </h4>
                <small>Super admin </small>
            </div>
        </div>
    </header>

    <main>
        <div className="cards">
            <div className="card-single">
                <div>
                    <h1>54</h1>
                    <span>Customers</span>
                </div>
                <div>
                    <span className="las la-users"></span>
                </div>
            </div>

            <div className="card-single">
                <div>
                    <h1>79</h1>
                    <span>projects</span>
                </div>
                <div>
                    <span className="las la-clipboard-list"></span>
                </div>
            </div>

            <div className="card-single">
                <div>
                    <h1>124</h1>
                    <span>Orders</span>
                </div>
                <div>
                    <span className="las la-shopping-bag"></span>
                </div>
            </div>

            <div className="card-single">
                <div>
                    <h1>$6k</h1>
                    <span>Income</span>
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
                        <h3>Recent projects</h3>
                        <button>See all <span className="las la-arrow-right">
                            </span></button>
                    </div>


                    <div className="card-body">
                        <div className="table-resposive">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <td>Project Title</td>
                                        <td>Department</td>
                                        <td>Status</td>
    
                                    </tr>
                                </thead>
                                <div>
                                    <tbody>
    
    
                                        <tr>
                                            <td>UI/UX Design</td>
                                            <td>UI Team</td>
                                            <td>
                                                <span className="status purple"></span> review
    
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Web development</td>
                                            <td>frontend</td>
                                            <td>
                                                <span className="status pink"></span>
                                                in progress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop app</td>
                                            <td>mobile Team</td>
                                            <td>
                                                <span className="status orange"></span>
                                                pending
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX Design</td>
                                            <td>UI Team</td>
                                            <td>
                                                <span className="status purple"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Web development</td>
                                            <td>frontend</td>
                                            <td>
                                                <span className="status pink"></span>
                                                in progress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop app</td>
                                            <td>mobile Team</td>
                                            <td>
                                                <span className="status orange"></span>
                                                pending
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX Design</td>
                                            <td>UI Team</td>
                                            <td>
                                                <span className="status purple"></span>
                                                review
                                            </td>
                                        </tr>
    
    
    
                                        <tr>
                                            <td>Web development</td>
                                            <td>frontend</td>
                                            <td>
                                                <span className="status pink"></span>
                                                in progress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop app</td>
                                            <td>mobile Team</td>
                                            <td>
                                                <span className="status orange"></span>
                                                pending
                                            </td>
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

                        <button>See all <span className="las la-arrow-right">
                            </span></button>
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
  )
}

export default Dashboard