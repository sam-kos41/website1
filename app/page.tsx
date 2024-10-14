import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen font-serif">
      {/* Navigation */}
      <nav className="bg-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-3xl font-bold">Samuel N. Koscelny Research</a>
          <div className="space-x-8 font-sans">
            <a href="#" className="hover:text-[#2541B2]">Home</a>
            <a href="#" className="hover:text-[#2541B2]">Research</a>
            <a href="#" className="hover:text-[#2541B2]">Publications</a>
            <a href="#" className="hover:text-[#2541B2]">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-16 px-4 lg:px-24 bg-white">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-extrabold mb-4">Samuel N. Koscelny</h1>
          <p className="text-lg mb-6">Ph.D. Candidate | Human Factors Researcher</p>
          <p className="text-base mb-8 font-light text-gray-700">
            I specialize in the intersection of human behavior and technology, particularly in Human-AI interactions. My goal is to make AI-driven systems more usable and efficient.
          </p>
          <a href="#contact" className="bg-[#EA8F1F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#FF8800] font-sans">
            Get in Touch
          </a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="https://placehold.co/400x400" alt="Samuel Koscelny" className="rounded-lg shadow-lg"/>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#F0F0F0] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg max-w-4xl mx-auto font-light text-gray-700">
            I am a PhD student in Industrial Engineering at Clemson University, specializing in Human Factors. My research focuses on Human-AI interactions and Bayesian statistics. I aim to create technology that enhances human experiences, especially in healthcare.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg font-light text-gray-700 mb-8">Feel free to reach out for research collaborations or inquiries.</p>
          <div className="space-x-6">
            <a href="mailto:skoscel@g.clemson.edu" className="bg-[#EA8F1F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#FF8800]">Email Me</a>
            <a href="https://www.linkedin.com/in/sam-koscelny-2750b718a/" className="bg-[#EA8F1F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#FF8800]">LinkedIn</a>
            <a href="https://github.com/xyz" className="bg-[#EA8F1F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#FF8800]">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#A8AB9B] text-black py-4 text-center">
        <p>&copy; 2024 Samuel N. Koscelny Research | Designed with passion</p>
      </footer>
    </div>
  );
};

export default HomePage;
