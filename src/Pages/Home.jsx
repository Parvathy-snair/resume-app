import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>

    {/* landing */}

<div
  style={{
    height: '100vh',
    backgroundImage: 'url("/landing.png")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }} 
  className="d-flex justify-content-center align-items-center"
>
  <div
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.39)' }}
    className="w-50 p-5 rounded text-light text-center"
  >
    <h1>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>

    <Link
      to="/steps"
      style={{ backgroundColor: '#755846' }}
      className="btn text-light mt-3"
    >
      Make your Resume with AI
    </Link>
  </div>
</div>

{/* about */}

<div className="container my-5">
  <h1 className="text-center mb-5">What's AI rBuilder</h1>
  <div className="row align-items-center">

  <div className="col-lg-1">
  </div>

  <div className="col-lg-5">

    <p style={{ textAlign: 'justify' }}>
      An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for 'freshers who may not know the correct format or keywords required for modern recruitment systems.
    </p>

    <p style={{ textAlign: 'justify' }}>
      The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.
      <p style={{ textAlign: 'justify' }}>
        The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.
      </p>
    </p>

    <p style={{ textAlign: 'justify' }}>
      This type of system is especially useful for students & freshers, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.
    </p>

  </div>

  <div className="col-lg-1">
  </div>

  <div className="col-lg-5">
    <img
      width={'100%'}
      height={'550px'}
      src="/resume.png"
      alt="resume"
    />
  </div>

</div>
      
</div>


{/* banner */}

<div
  style={{
    height: '80vh',
    backgroundImage: 'url("/team.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
>
</div>

{/* testimony */}

<div className="container my-5">

  <h1 className="text-center mb-5">Testimony</h1>
  <div className="row align-items-center">
    <div className="col-lg-1"></div>
    <div className="col-lg-5"></div>
    <div className="col-lg-1"></div>
    <div className="col-lg-5">
      <h5>Trusted by professionals worldwide.</h5>
      <p style={{textAlign:'justify'}}>
At rBuilder, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
</p>

            <p style={{textAlign:'justify'}}> In fact, users who used rBuilder reported getting hired an average of 48 days faster.
 </p>
            <p style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>

    </div>
    <div className="col-lg-1"></div>
    <div className="col-lg-5">
      <div className="row">
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmi5r2PsrjX2X8bLwAW_QP4auNAapJXIVNJOCzazoXufKz0-ErLOkiUYkS&s=10" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWJB4s-v8f3VMo2dnWXuz3Ntk0McMJriDZYb3u5nPhA&s=10" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://i.pinimg.com/736x/be/a3/49/bea3491915571d34a026753f4a872000.jpg" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLVTs6ywGJA8yDZNPB5zXqeLu5C8GFvT6kLKpnn1tDQ&s=10" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRC_UpAKHzfJ46mPU6odDuZZwp8LmLiaWca6eoujdDCUDn5Hy7agw-nBg&s=10" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyOkoDCehKSSftNz7oD_Dt56F7DifA_VPYZpjdihJP3pJL50OFdmUYIAO&s=10" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-KN1d_T1Memd2A3cbWu-EDd5XqbGuwZGSWp4O35aqp5bHHOmG-5OhVdo&s=10" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSem1MFzoh4GW0qc_m6amhEsZhqNDobHdxaoboxMHNKOBfjjOaxrAOL4&s=10" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzCgPP3yLP1Aj9Q0Bin06V0qVsHO6PFrVNJVJ4tghKAWuTDvGcTaq3sM&s=10" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb45wp04EpreBDk8Kgopo1ij2GFgBEn5tGZyRW0qihIghbhe3kXJUFdd-l&s=10" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7htRCnsN1PE0zjFBLH9G-4chu8nyVnZuhyFyaQojhLbU3LSLyqiwJqaR&s=10" alt="" />
        </div>
        <div className="col-md-3">
          <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSxfLMoa_8TTywarZwLjXjgcRV_GPgq5kwEFy6w62vuTpWjcFumxyNtk&s=10" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Home
