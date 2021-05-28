import React, { Component } from 'react';
import '../css/Projects.css';
import Project from './Project.js'


// Main Project Body Class
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tick : <i class="bi bi-chevron-down"></i>,
            projects : null,
            post : "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateDropdown = this.updateDropdown.bind(this);
    };

    // Load all projects to start
    componentDidMount = async e => {
        this.firstSubmit();
    }


    updateDropdown(direction) {
        console.log(direction)
        if (direction == "ascending") {
            this.setState(prevState => ({
                tick: <i class="bi bi-chevron-up"></i>,
            }));
        }
        else {
            this.setState(prevState => ({
                tick: <i class="bi bi-chevron-down"></i>,
            }));
        }
    }

    // Submit
    firstSubmit = async e => {
        const response = await fetch('/server/python/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post: "" }),
        });
        // Wait for Promise to Resolve
        (await response).json().then(data => {
            this.updateProjects(JSON.parse(data));
        })
    };

    // Submit
    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/server/python/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.post }),
        });
        // Wait for Promise to Resolve
        (await response).json().then(data => {
            this.updateProjects(JSON.parse(data));
        })
      };

    // Update Projects
    updateProjects(data) {
        console.log(data);
        const projectsList = []
        for (let i in data) {
            
            projectsList.push(<Project 
                name={data[i]["name"]}
                languages={data[i]["languages"]}
                description={data[i]["description"]}
                link = {data[i]["link"]}
            />);
        }

        this.setState({
            projects : projectsList,
        });
    }

    render() {
        return (
            <div class="container text-dark">

                <div class="row mt-4 mb-4">
                    <div class="col">
                        <div class="card text-white bg-secondary">
                            <div class="card-body align-items-center d-flex justify-content-center p-1">
                                <form class="input-group" onSubmit={this.handleSubmit}>
                                    <h3 class="ms-1">Projects</h3>
                                    <input value={this.state.post} onChange={e => this.setState({ post: e.target.value})} type="text" class="form-control ms-3 me-2" placeholder="Search"  aria-label="Search" aria-describedby="Project Search"/>
                                    <button class="btn btn-outline-dark text-white rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort By: Date {this.state.tick}</button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" onClick={() => this.updateDropdown("ascending")} style={{cursor: "pointer"}}>Date Ascending</a></li>
                                        <li><a class="dropdown-item" onClick={() => this.updateDropdown("descending")} style={{cursor: "pointer"}}>Date Descending</a></li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
 
                {this.state.projects}

                
                
                <div class="row mt-3 mb-2">
                    <div class="col-sm-7 col-md-5 col-lg-3">
                        <div class="card text-white bg-secondary">
                            <div class="card-body align-items-center d-flex justify-content-center p-1">
                                <a class="text-decoration-none text-light" href="#overall"><h3>Back to Top</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;