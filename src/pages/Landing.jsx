import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    {/* part 1 */}
    <section id='part1'>
      <div className='row pt-5'>
        <div className='col-12 col-md-4'></div>

        <div className='col-12 col-md-4 box  py-5 rounded my-5 text-center' style={{
              backgroundColor: 'rgba(20, 35, 50, 0.90)', color: 'rgb(255, 255, 255)', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.20)'}}>
          <h3>Designed to get hired.</h3>
          <h5>Your skills, Your story, Your next job - All in one.</h5>
          <Link className='btn text-light mt-4' style={{ backgroundColor: 'rgb(45, 105, 150)' }} to={'/resume'}>Make Your Resume</Link>
        </div>

        <div className='col-12 col-md-4'></div>
      </div>
    </section>

    {/* part 2 */}
    <section className='p-5'>
      <h1 className='text-center'>Tools</h1>
      <div className='row m-4'>

        <div className='col-lg-6'>
          <h3 className='mt-5'>Resume</h3>
          <p>Create unlimited new resumes and easily edit them afterwards.</p>
          <h3 className='pt-3'>Cover Letter</h3>
          <p>Easily write professional cover letters.</p>
          <h3 className='pt-3'>Jobs</h3>
          <p>Automatically receive new relevant job postings.</p>
          <h3 className='pt-3'>Applications</h3>
          <p>Effortesly manage & track your job applications in an organized manner.</p>

        </div>

        <div className='col-lg-6'>
          <img src="https://fellowshipbard.com/wp-content/uploads/2023/05/Premium-Resume-Builders.jpg" alt="" className='img-fluid'/>
        </div>

      </div>
    </section>

    {/* part 3 */}
    <section style={{height:'600px', backgroundImage:"url('https://www.discuss.io/wp-content/uploads/2022/07/shutterstock_1503919103-scaled.jpg')",
       backgroundSize:'cover',backgroundPosition:'top',backgroundAttachment:'fixed'}}></section>
    </>
  )
}

export default Landing