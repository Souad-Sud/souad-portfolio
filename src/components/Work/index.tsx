"use client"
import './work.scss';
// import { useRouter } from 'next/router';
import Link from 'next/link';


const Work = () => {
  // const router = useRouter();
  
  // const sentToProjectPage = () => {
  //   router.push("/projects")
  // }
  return (
    <div className='workProjects'>
       <div className='workProjects__presentation'>
      <h2 className='workProjects__title' >My Work</h2>
      <p className='workProjects__description'>Here are a few projects I have worked on. Click on the link to discover more</p>
      </div> 

    <div className="workProjects__imgsContainer">

        <div className="workProjects__imgComtainer">
          <img src="/projectImages/bloodmaiden.jpeg" alt="" />
        </div>
        <div className="workProjects__imgComtainer">
          <img src="/projectImages/thral.jpeg" alt="" />
        </div>
        <div className="workProjects__imgComtainer">
          <img src="/projectImages/zooProject.jpeg" alt="" />
        </div>
        <div className="workProjects__imgComtainer">
          <img src="/projectImages/api.jpeg" alt="" />
        </div>
        <div className="workProjects__imgComtainer">
          <img src="/projectImages/memorygame.jpeg" alt="" />
        </div>
        <div className="workProjects__imgComtainer">
          <img src="/projectImages/harrypoter.jpeg" alt="" />
        </div>
    </div>
    <div className='workProjects__btncontainer'>
     <Link href="/projects">
    <button  className='workProjects__btn'>Discover more</button>
     </Link>

    </div>
    </div>
  );
};

export default Work;
