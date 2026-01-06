import ResumeImg from '../assets/resume-1.png';

export default function Resume() {
  return (
    <section id='Resume' className='flex flex-col md:flex-row px-5 py-5 bg-8 gap-3'>
      
      <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <img className='w-[400px]' src={ResumeImg} alt="Resume" />
      </div>

      <div className='md:w-1/2 flex justify-center'>
        <h1 className='md:px-5 py-20 text-gray-300 text-3xl font-hero-font'>
          <span className='text-4xl border-b-4 border-gray-300'>
            Resume & Certificates
          </span>
          <br /><br />
          <p className='text-gray-300 text-2xl'>
            You can view my resume and certificates.
            <br /><br />
            <a
              href="/Resume and Certification- (Venkata Karthick Thiruvenkadam).pdf"
              download
              className="button w-fit font-hero-font"
            >
              Download
            </a>
          </p>
        </h1>
      </div>

    </section>
  );
}
