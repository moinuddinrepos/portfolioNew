import React from 'react'
import profileImg from '../assets/profile.jpg'

const Home = () => {

    
    return (
        <>
            <section id="home" className="bg-[#f8f1fc] py-20 px-6 text-center">
                <img src={profileImg} alt="Profile" className="w-32 h-32 mx-auto rounded-full border-4 border-[#673579] mb-6" />
                <h1 className="text-4xl font-bold text-[#673579] mb-2">Md Khaja Moinuddin</h1>
                <p className="text-lg text-gray-600">Oracle BRM Developer | Frontend Developer | Designer</p>
            </section>

            <section id="about" className="py-16 px-6 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#673579] mb-4">About Me</h2>
                <p className="text-gray-700 leading-relaxed">
                    I'm a passionate developer with 5+ years of experience creating responsive, scalable, and fast web applications. I love solving complex problems with clean and efficient code, especially using React, Node.js, and Tailwind CSS.
                </p>
            </section>

            



            <section id="projects" className="bg-gray-50 py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-[#673579] mb-10">Projects</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-[#673579] mb-2">Project One</h3>
                        <p className="text-gray-600">A landing page built using React and Tailwind CSS for a modern SaaS product.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-[#673579] mb-2">Project Two</h3>
                        <p className="text-gray-600">A full-stack dashboard with Express, MongoDB, and Vue.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-[#673579] mb-2">Project Three</h3>
                        <p className="text-gray-600">Mobile-first eCommerce UI built with Tailwind and Next.js.</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-16 px-6 text-center">
                <h2 className="text-3xl font-bold text-[#673579] mb-4">Contact</h2>
                <p className="text-gray-700 mb-6">Let's collaborate on your next big idea!</p>
                <a href="mailto:john@example.com" className="inline-block bg-[#673579] text-white px-6 py-3 rounded hover:bg-[#e9a7ff] hover:text-[#673579] font-semibold transition">Email Me</a>
            </section>


            <footer className="bg-[#673579] text-white text-center py-6 mt-10">
                © 2025 John Doe. All rights reserved.
            </footer>
            
        </>
    )
}

export default Home