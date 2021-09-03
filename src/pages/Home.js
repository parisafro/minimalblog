import React from 'react'
import linkdin from '../assets/images/linkedin.png'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import leaves from '../assets/images/1e3a8fda-53fb-46f0-87f3-2ad9cfafb67a.png'
import me from '../assets/images/Neutral line art print.png'

function Home() {
  return (
    <div>
      <div className='d-flex justify-content-between alig-items-center w-100'>
        <div style={{width:'30%'}} className='p-5'>
          <div>
            <span style={{fontSize:'20px', fontStyle:'bold', fontFamily: 'Lucida Sans'}}>Parisa </span>
            <span style={{fontSize:'18px'}}>fro</span> 
          </div>
          <span style={{fontSize:'16px', fontFamily: 'Lucida Sans'}}>Front-end developer</span> 
        </div>
        <div style={{background:'#F0CFAB', height:'400px', width:'40%', position:'relative'}}>
          <ul style={{gap:'45px', fontFamily: 'Lucida Sans'}} className='d-flex justify-content-center alig-items-center p-5'>
            <li>latest work</li>
            <li>blog </li>
            <li>contact</li>
          </ul>
          <div style={{position:'absolute', top:'0', right:'-50px'}}>
            <img height='700px' src={me}></img>
          </div>
          <div style={{position:'absolute', top:'200px', right:'-280px', width:'300px'}}>
            <span style={{fontStyle:'bold', display:'blok', fontFamily: 'Lucida Sans'}}>I AM A PASSIONATE, CREATIVE WOMAN</span>
            <p style={{fontSize:'12px', paddingTop:'15px'}}>
            {/* I’m a master coach, best-selling author and a passionate speaker. */}
            {/* I’m the founder of the first women-only hedge fund, special counsellor in many corporations across the globe. */}
            I’ve found balance between work and life, now I’m a totally happy person, loving mother, inspiring speaker and writer, and firm investor, but it didn’t come easily. 
            I've gone though hundreds of failures and complicated situations.
            You can use my previous experience in order not to fall into the same trap.
            </p>
          </div>
        </div>
        <div style={{width:'30%'}}>
          <ul style={{gap:'10px'}} className='d-flex justify-content-center p-5'>
            <li><img width='18px' height='18px' src={linkdin}></img></li>
            <li><img width='18px' height='18px' src={facebook}></img></li>
            <li><img width='18px' height='18px' src={twitter}></img></li>
          </ul>
        </div>
      </div>
      <div style={{height:'350px', width:'90%', background:'#FBEEC1', position:'absolute', right:'0', top:'130px', zIndex:'-10'}}>
      </div>
      <div style={{position:'absolute', left:'0', top:'300px'}}>
        <img height='400px' src={leaves}></img>
      </div>
      <div style={{marginTop:'200px', marginRight:'50px', fontFamily: 'Lucida Sans'}} className='d-flex justify-content-end'>
        <ul style={{gap:'75px'}} className='d-flex justify-content-between'>
          <li style={{borderBottom:'1px solid gray'}}>my resume</li>
          <li style={{borderBottom:'1px solid gray'}}>about me</li>
          <li style={{borderBottom:'1px solid gray'}}>contact me</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;