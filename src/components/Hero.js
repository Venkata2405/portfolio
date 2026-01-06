import HeroImg from '../assets/me logo-4.png';
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
export default function Hero(){
    return <section className='flex flex-col md:flex-row px-10 py-14 pt-10 bg-3 gap-10'>
        <div className='md:w-1/2'>
            <h1 className='md:px-20 py-20 text-gray-300 text-3xl justify-center font-hero-font'>Hi, <br/>
            <br/>
             <span className='text-4xl'>I'm Venkata Karthick</span><br/>
             <br/>
            <h4 className='text-gray-300 text-xl font-hero-font motion-preset-typewriter-[15] motion-loop-twice'>A Full Stack Developer....</h4>
         </h1 >
         <div className='md:px-20 py-0.25 text-2xl flex gap-8'>
            <a href='https://github.com/Venkata2405' className='hover:text-slate-200 motion-preset-pop' alt='GitHub'><FaSquareGithub /></a>
            <a href='https://www.linkedin.com/in/venkata-karthick-t-83b777370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='hover:text-slate-200 motion-preset-pop' alt='LinkedIn'><FaLinkedin /></a>
            <a href='https://www.facebook.com/share/1BiaaZfkvy/' className='hover:text-slate-200 motion-preset-pop' alt='Facebook'><FaFacebookSquare /></a>
         </div>
         

        </div>
                <img className='md:w-1/2 motion-preset-blur-up motion-duration-2000' src={HeroImg} alt="Venkata Karthick"/>

    </section>
}
