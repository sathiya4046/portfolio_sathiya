import './index.css';
import React, { useState } from 'react'
import sathiya from './sath.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMongodb, SiMysql } from 'react-icons/si';
import axios from 'axios';

function App() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/details',{username,email,message})
    .then(res=>{
      console.log(res)
      setUsername("")
      setEmail("")
      setMessage("")
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="container-fluid" id='app'>
      <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor:"#FFF1DB"}} id="navbar">
        <div className="container">
          <a className="navbar-brand ms-5 text-uppercase fs-1" href="#home" style={{color:"#180161",letterSpacing:"3px"}}>Sathiyaseelan</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-100 d-flex justify-content-end">
              <a className="nav-link p-lg-3" aria-current="page" href="#home">Home</a>
              <a className="nav-link p-lg-3" href="#education">Education</a>
              <a className="nav-link p-lg-3" href="#experience">Experience</a>
              <a className="nav-link p-lg-3" href="#projects">Projects</a>
              <a className="nav-link p-lg-3" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container p-lg-5 mb-5 height-100vh" id="home">
        <main className="row d-flex ms-auto ">
            <div className="col-md-6 col-lg-6 text-center mt-md-5 p-md-5 align-items-md-center">
                <small  className='mb-4'>Hello, This is</small>
                <h1 className='mb-3'>Sathiyaseelan</h1>
                <strong>Full stack web developer</strong>
                <div className='mt-2 fs-4'>&larr;<FaHtml5 /> <FaCss3Alt/> <IoLogoJavascript/> <FaBootstrap/> <FaReact/> <FaNodeJs/> <SiMysql/> <SiMongodb/>&rarr;</div>
                <p className='mt-4'>I am ready to contribute my innovative ideas to the dynamic field and improve my knowledge through continuous learning and team work...</p>
              <button className="btn btn-outline-success">Hire me</button>
              <div className='d-flex justify-content-center fs-3'>
                    <Link to={'https://www.linkedin.com/in/sathiya4046/'} className='ms-2 p-1 icons'><FaLinkedin/></Link>
                    <Link to={'https://github.com/sathiya4046'} className='ms-2 p-1 icons'><FaGithub/></Link>
                    <Link to={'https://www.instagram.com/__sathiya__4046?igsh=dGlicjRubzN2Z3M5'} className='ms-2 p-1 icons'><FaInstagram/></Link>
                    <Link to={'https://www.facebook.com/sathiya.s.mech?mibextid=ZbWKwL'} className='ms-2 p-1 icons'><FaFacebook/></Link>
                </div>
              <div>
              
              </div>
            </div>
            <div className="col-md-4 text-center my-5 m-md-auto d-lg-flex align-items-md-center">
                <img className="rounded-circle ms-md-auto" src={sathiya} alt="sathiyaseelan" height="310px" width="300px"/>
            </div>
          </main>
      </div>
      <div className="container my-5 p-lg-5" id="education">
        <h1 className='text-center py-4 my-5 education' style={{textDecoration:"underline"}}>Education</h1>
        <table className="table table-hover table-sm text-center">
          <thead>
            <tr>
              <th className="p-3 p-md-4" scope="col">Course</th>
              <th className="p-3 p-md-4" scope="col">College / School</th>
              <th className="p-3 p-md-4" scope="col">Percentage</th>
              <th className="p-3 p-md-4" scope="col">Passed out</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 p-md-4">Mechanical Engineering</td>
              <td className="p-3 p-md-4">University College Of Engineering, Thirukkuvalai, Nagappattinam</td>
              <td className="p-3 p-md-4">69.4%</td>
              <td className="p-3 p-md-4">2015</td>
            </tr>
            <tr>
              <td className="p-3 p-md-4">HSC</td>
              <td className="p-3 p-md-4">St. Antony’s Higher Secondary School, Thanjavur</td>
              <td className="p-3 p-md-4">83%</td>
              <td className="p-3 p-md-4">2011</td>
            </tr>
            <tr>
              <td className="p-3 p-md-4">SSLC</td>
              <td className="p-3 p-md-4">St. Antony’s Higher Secondary School, Thanjavur</td>
              <td className="p-3 p-md-4">89%</td>
              <td className="p-3 p-md-4">2009</td>
            </tr>
          </tbody>
        </table>
      </div> 
      <div className="container m-auto p-4" id="experience">
      <h1 className='text-center mb-4 py-4 experience' style={{textDecoration:"underline"}}>Experience</h1>
        <div className="row row-cols-1 row-cols-md-3 mx-md-5" id="experience">
        <dl className="col col-md-4 mt-3 p-2 p-md-2 text-center">
            <dt className="p-md-2">Customer Service,Cambodia</dt>
            <dd className="p-md-2">Trainee</dd>
            <dd className="p-md-2">Mar 2022 - Sep 2023</dd>
            <dd>
              <ul>
                <li className="p-md-2 text-start">Coordinate with my team members and implement new ideas for the project</li>
                <li className="p-md-2 text-start">Together with my manager and team head, we listen to their ideas and complete the work very quickly</li>
              </ul>
            </dd>
          </dl>
          <dl className="col col-md-3 mt-3 mx-md-3 p-2 p-md-2 text-center">
            <dt className="p-md-2">Logistics Company, Thanjavur</dt>
            <dd className="p-md-2">Front Office</dd>
            <dd className="p-md-2">Jan 2020 - Dec 2021</dd>
            <dd>
              <ul>
                <li className="p-md-2 text-start">Organized events, meetings and conferences, managing logistics, budgets and vendor relations</li>
                <li className="p-md-2 text-start">Coordinated travel arrangements and accommontations for staff and guests</li>
              </ul>
            </dd>
          </dl>
          <dl className="col col-md-4 p-2 mt-3 p-md-2 text-center">
            <dt className="p-md-2">Pesko Engineering Pte Ltd, Singapore</dt>
            <dd className="p-md-2">Electrical Fitter</dd>
            <dd className="p-md-2">Dec 2018 - Dec 2019</dd>
            <dd>
              <ul>
                <li className="p-md-2 text-start">Install  and Maintenance of the all electrical work and ﬁtting works</li>
                <li className="p-md-2 text-start">Attending management meetings & work related issues</li>
              </ul>
            </dd>
          </dl>
          <dl className="col col-md-4 mt-3 p-md-2 text-center p-2 ">
            <dt className="p-md-2">NVH India Auto Parts Pvt Ltd, Chennai</dt>
            <dd className="p-md-2">Graduate Engineering  Trainee</dd>
            <dd className="p-md-2">Mar 2016 - Mar 2018</dd>
            <dd>
            <ul>
                <li className="p-md-2 text-start">To follow the TPM process(5s&3c)</li>
                <li className="p-md-2 text-start">Provide day to day guidance, management & training for the  inspection team</li>
                <li className="p-md-2 text-start">Maintain team discipline in conjunction with HR legal obligations,  compliance & risk management</li>
                <li className="p-md-2 text-start">Implement and manage documentation</li>
              </ul>
            </dd>
          </dl>
          </div>
      </div>   
      <div className="container-fluid m-md-3 p-md-3" id="projects">
        <h1 className='text-center mb-4 py-4 project' style={{textDecoration:"underline"}}>Projects</h1>
        <div className='d-md-flex'>
            <div className="card m-3 p-2">
              <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                <i><small>Using : Reactjs,Bootstrap,Nodejs,Mongodb</small></i>
                <hr />
                <p className="card-text">I developed my portfolio website using React.js and Bootstrap combining the innovative of React's component-based architecture with Bootstrap's responsive design capabilities...</p>
                <a href="#home" className="btn btn-outline-primary">View code</a>
              </div>
            </div>
            <div className="card m-3 p-2">
              <div className="card-body">
                <h5 className="card-title">Crud Operation with Mysql</h5>
                <i><small>Using : Reactjs,Nodejs,Expressjs,Mysql</small></i>
                <hr />
                <p className="card-text">This project showcases my proficiency in building a CRUD application using React.js for the frontend, Node.js for backend and the MySQL for database operations, and i applied basic styles</p>
                <a href="https://github.com/sathiya4046/crud_keeper_mysql" className="btn btn-outline-primary">View code</a>
              </div>
            </div>
            <div className="card m-3 p-2">
              <div className="card-body">
                <h5 className="card-title">Crud Operation with Mongodb</h5>
                <i><small>Using : Reactjs,Nodejs,Expressjs,Mongodb</small></i>
                <hr />
                <p className="card-text">This project is same as a previous CRUD project for frontend, but the backend is different, i would like to use Mongdb for database operations, styles are same</p>
                <a href="https://github.com/sathiya4046/crud_keeper_mern" className="btn btn-outline-primary">View code</a>
              </div>
            </div>
            <div className="card m-3 p-2">
              <div className="card-body">
                <h5 className="card-title">Register and login authentication</h5>
                <i><small>Using : Reactjs,Nodejs,Expressjs,Mysql</small></i>
                <hr />
                <p className="card-text">I created login and register page with Reactjs for frontend, in backend I use jwt for cookies, bcrypt for password hashing and database is Mysql, it looks like a simple project, I want to implement this idea in future projects.</p>
                <a href="https://github.com/sathiya4046/crud_keeper_mern" className="btn btn-outline-primary">View code</a>
              </div>
            </div>
        </div>
      </div>
      <div className="container my-5 py-4" id="contact">
        <div className='row m-auto'>
          <h1 className='text-center mb-3 py-md-4 contact' style={{textDecoration:"underline"}}>Contact Details</h1>
          <div className='col-md-7 text-md-center'>
            <div className='my-md-3 py-md-3'>
              <h4 className='py-2 mt-md-4'>Location</h4>
              <address>
                No.11, Sanmuga nagar,
                Nanjikottai,
                Thanjavur
              </address>
              <h4 className='py-2'>Phone Number</h4>
              <p>+919003981071</p>
              <h4 className='py-2'>Email</h4>
              <a href="mailto:sathiya.4046@gmail.com"><p>sathiya.4046@gmail.com</p></a>
            </div>
          </div>
          <div className='col w-100 d-flex align-items-center'>
            <form onSubmit={handleSubmit} className='d-flex flex-column w-100'>
              <h3 className="text-center">Send Us a Message</h3>
              <input 
                className='mt-3 p-2 input' 
                type="text" 
                placeholder='Full Name' 
                name='username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
              <input 
                className='mt-3 p-2 input' 
                type="email" 
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <textarea 
                className='mt-3 p-2 input' 
                placeholder='Message'
                name='message'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              />
              <button type="submit" className="btn btn-outline-success mt-3 p-2 w-50">Submit</button>
            </form>
          </div>
        </div> 
      </div>
      <footer className="text-center text-lg-start">
        <div className="text-center p-3">
          Copyrights &copy; {new Date().getFullYear()} &rarr;
          <a className="text-body" href="#home" style={{textDecoration:"none"}}> Sathiyaseelan</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
