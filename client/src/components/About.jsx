import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    <div>
        <Navbar />
        <br />
        <h1 className='text-center'>Documentation of SmartLearn</h1>

        <div className='container'>
            <h3>Project Overview</h3>
            <p>created full stack project using MERN stack </p>
            <p>The Idea is to provide basic knowlege to students</p>

            <section>
                <h3>Installation and Setup</h3>
                <p>To run the project we need a code editor and need to install required packages</p>
                <p>Need to install dependencies of react , bootstrap and node </p>
                <p>we need to run project via using command "npm start"</p>
            </section>
            <section>
                <h3>Code Structure</h3>
                <p>I have created folder as per the project need</p>
                <p>I have created 2 folder firat 1. Client , 2. Server</p>
                
            </section>
            <section>
                <h3>API Documentation</h3>
                <p>I have created 2 API here to store the user data</p>
                <p>When user do signup we are sending the data to backend using API</p>
                <p>To login user we are using second API and posting data from login form and validating same</p>
            </section>
            <section>
                <h3>Tech Stack</h3>
                <p>we have used Node Js for backend and creating API</p>
                <p>For frontend we have used React JS</p>
                <p>we have used Bootstrap for page responsive</p>
                <p>we have used MongoDB to store user data</p>
                <p>We have used Express to create API in Node JS</p>
            </section>
            <section>
                <h3>Tools</h3>
                <ul>
                    <li>VS Code</li>
                    <li>Postman</li>
                    <li>Studio 3T</li>
                    <li>Google Chrome</li>
                </ul>
            </section>
            <section>
                <h3>Why MERN?</h3>
                <p>Node is sigle threaded which is faster and provides easy way to work with API</p>
                <p>React provides us single page feature which makes web app faster itself because It dosen't relode the page</p>
                <p>Mongo DB one of the fast Database in NOSQL where we can deal the data in Key Value Pair</p>
                <p>Bootstrap is used to provide a responsive user interface</p>
            </section>
        </div>
        
    </div>
  )
}

export default About