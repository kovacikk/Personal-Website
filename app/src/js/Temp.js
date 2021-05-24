mport React, { Component } from 'react';
//import '../css/About.css';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    render() {
        return (
            <div>
            <div class="container" style={{width: "50vw"}}>
                <div class="row">
                    <div class="col" style={{backgroundColor: "blue"}}>
                        <p>1</p>
                        <div class="row"><p>row1</p></div>
                        <div class="row"><p>row2</p></div>
                        <div class="row"><p>row3</p>
                            <div class="col"><p>col1</p></div>
                            <div class="col"><p>col2</p></div>
                        </div>
                    </div>
                    <div class="col-6" style={{backgroundColor: "red"}}>
                        <p>2</p>
                    </div>
                    <div class="col" style={{backgroundColor: "green"}}>
                        <p>3</p>
                    </div>
                </div>
            </div>

<h1 class="visually-hidden">Sidebars examples</h1>

<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px"}}>
  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
    <span class="fs-4">Sidebar</span>
  </a>
  <hr/>
  <ul class="nav nav-pills flex-column mb-auto">
    <li class="nav-item">
      <a href="#" class="nav-link active" aria-current="page">
        <svg class="bi me-2" width="16" height="16"><use href="#home"/></svg>
        Home
      </a>
    </li>
    <li>
      <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use href="#speedometer2"/></svg>
        Dashboard
      </a>
    </li>
    <li>
      <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use href="#table"/></svg>
        Orders
      </a>
    </li>
    <li>
      <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use href="#grid"/></svg>
        Products
      </a>
    </li>
    <li>
      <a href="#" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use href="#people-circle"/></svg>
        Customers
      </a>
    </li>
  </ul>
  <hr/>
  <div class="dropdown">
    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
      <strong>mdo</strong>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
      <li><a class="dropdown-item" href="#">New project...</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Profile</a></li>
      <li><hr class="dropdown-divider"/></li>
      <li><a class="dropdown-item" href="#">Sign out</a></li>
    </ul>
</div>
        </div>

    </div>
        );
    }
}

export default About;