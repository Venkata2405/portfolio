import AboutImg from '../assets/aboutme-1.png';
export default function About(){
    return <section id='About' className='flex flex-col md:flex-row px-5 py-10 bg-4 gap-5'>
        <img className='md:w-1/2 h-fit pt-20 sm:w-1/2 h-full motion-preset-blur-right motion-duration-1000' src={AboutImg}  alt="About Me"/>
        <div className='md:w-1/2'>
            <h1 className='md:px-20 py-20 text-gray-300 text-3xl justify-center font-hero-font '>
             <span className='text-4xl border-b-4 border-gray-300'>Who Am I?</span><br/>
                <br/>
            <p className='text-gray-300 text-2xl'>Hi! I’m Venkata Karthick, a Full Stack Developer who loves building things for the web. From designing clean user interfaces to developing robust backend logic, I enjoy every step of the development process.
                <br/>I’m always curious, always learning, and always experimenting with new technologies to create engaging and meaningful digital experiences.
</p>
         </h1 >
        </div>
    </section>
}