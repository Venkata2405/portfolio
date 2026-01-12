import ResumeImg from "../assets/resume-1.png";

export default function Resume() {
  return (
    <section
      id="Resume"
      className="flex flex-col md:flex-row px-5 py-10 bg-14 gap-6"
    >
      {/* Resume Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={ResumeImg}
          alt="Resume Preview"
          className="w-[400px]"
        />
      </div>

      {/* Resume Content */}
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="text-slate-800 text-center md:text-left font-hero-font">
          <h1 className="text-4xl mb-6 border-b-4 border-gray-300 inline-block">
            Resume & Certificates
          </h1>

          <p className="text-2xl mb-8">
            You can view and download my resume and certificates.
          </p>

          <a
            href={`${process.env.PUBLIC_URL}/Resume_VK.pdf`}
            className="button w-fit py-3 text-xl inline-block"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
}
