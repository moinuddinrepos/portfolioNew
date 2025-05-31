import React from 'react'
import profileImg from '../assets/profile.jpg'
import { useEffect, useState } from 'react';

const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Oracle BRM', level: 70 },
];

const Home = () => {
    const experiences = [
        {
            role: 'Oracle BRM Developer',
            company: 'Saralam Technologies Private Limited',
            duration: '2025 – Present',
            location: 'Hyderabad, India',
            description:
                'Developed and maintained billing solutions using Oracle BRM. Implemented product customizations and integrations with third-party systems.',
        },
        {
            role: 'Web Developer / BRM Developer',
            company: 'Intellious Technologies Private Limited',
            duration: '2023 – 2024',
            location: 'Remote',
            description:
                'Created responsive and performant web interfaces using React.js, Tailwind CSS, and modern frontend tools. Worked closely with designers and clients.',
        },
        {
            role: 'Intern - Oracle BRM',
            company: 'Saralam Technologies Private Limited',
            duration: '2021 – 2022',
            location: 'Hyderabad, India',
            description:
                'Built internal tools for data visualization using JavaScript and Chart.js. Assisted in designing company landing page.',
        },
    ];

    const educationList = [
        {
            degree: 'Bachelor of Technology (B.Tech)',
            major: 'Computer Science & Engineering',
            institution: 'TKR College of Engineering and Technology (Autonomous) JNTU-H University',
            year: '2018 - 2021',
        },
        {
            degree: 'Diploma CME',
            major: 'Computer Engineering',
            institution: 'Arjun College of Science and Technology',
            year: '2012 - 2018',
        },
        {
            degree: 'Secondary School (X)',
            major: 'All Subjects',
            institution: 'Govt. Boys High School, Kurmaguda',
            year: '2011 - 2012',
        },
    ];




    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-6 py-20 bg-[#f8f1fc]">
                {/* Home Section */}
                <section id="home" className="flex flex-col items-center text-center lg:w-1/2">
                    <img src={profileImg} alt="Profile" className="w-32 h-32 rounded-full border-4 border-[#673579] mb-6" />
                    <h1 className="text-4xl font-bold text-[#673579] mb-2">Md Khaja Moinuddin</h1>
                    <p className="text-lg text-gray-600">Oracle BRM Developer | Frontend Developer | Designer</p>
                </section>

                {/* About Section */}
                <section id="about" className="lg:w-1/2 text-center">
                    <h2 className="text-3xl font-bold text-[#673579] mb-4">About Me</h2>
                    <p className="text-gray-700 leading-relaxed max-w-xl mx-auto text-justify">
                        I have successfully 2 years of experience and implemented and maintained Oracle BRM solutions, demonstrating my
                        ability to troubleshoot issues, optimize performance, and enhance overall system efficiency. Through collaboration with cross-
                        functional teams, I have played a key role in translating business requirements into effective BRM configurations, ensuring
                        alignment with organizational goals.
                    </p>
                </section>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 px-6 py-20 bg-[#f8f1fc]">
                {/* Shared heading height using flex-column layout inside each section */}

                {/* Experience Section */}
                <section className="w-full lg:w-1/2 bg-[#f8f1fc] flex flex-col rounded-lg shadow-md">
                    <div className="flex flex-col justify-start h-full p-6">
                        <h2 className="text-3xl font-bold text-[#673579] text-center mb-10 min-h-[3rem]">Experience</h2>
                        <div className="space-y-6 flex-grow">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#673579]"
                                >
                                    <h3 className="text-xl font-semibold text-[#673579]">{exp.role}</h3>
                                    <div className="text-sm text-gray-600 mb-2">
                                        {exp.company} &mdash; <span>{exp.location}</span>
                                    </div>
                                    <div className="text-sm text-gray-400 italic mb-3">{exp.duration}</div>
                                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="w-full lg:w-1/2 bg-[#f8f1fc] flex flex-col rounded-lg shadow-md">
                    <div className="flex flex-col justify-start h-full p-6">
                        <h2 className="text-3xl font-bold text-[#673579] text-center mb-10 min-h-[3rem]">Education</h2>
                        <div className="space-y-6 flex-grow">
                            {educationList.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#673579] text-left"
                                >
                                    <h3 className="text-xl font-semibold text-[#673579]">{edu.degree}</h3>
                                    <p className="text-gray-700">{edu.major}</p>
                                    <p className="text-gray-500">{edu.institution}</p>
                                    <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>



            <div className="flex flex-col lg:flex-row gap-6 px-6 py-20 bg-[#f8f1fc] w-full">
                {/* Technical Knowledge Section */}
                <section className="w-full lg:w-1/2 flex flex-col bg-[#f8f1fc] p-6 rounded-lg shadow-md">
                    <div className="flex flex-col justify-start h-full max-w-xl mx-auto w-full">
                        <h2 className="text-3xl font-bold text-[#673579] text-center mb-10 min-h-[3rem]">Technical Knowledge</h2>
                        <div className="space-y-6 flex-grow">
                            {skills.map((skill, index) => (
                                <div key={index} className="group">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-800 font-medium">{skill.name}</span>
                                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                        <div
                                            className="bg-[#673579] h-4 rounded-full transform transition-all duration-700 ease-in-out group-hover:scale-x-110 group-hover:bg-[#825493]"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="w-full lg:w-1/2 flex flex-col bg-[#f8f1fc] p-6 rounded-lg shadow-md">
                    <div className="flex flex-col justify-start h-full max-w-xl mx-auto w-full">
                        <h2 className="text-3xl font-bold text-center text-[#673579] mb-10 min-h-[3rem]">Projects</h2>
                        <div className="space-y-6 flex-grow">
                            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
                                <h3 className="text-xl font-semibold text-[#673579] mb-2">Project One</h3>
                                <p className="text-gray-600">A landing page built using React and Tailwind CSS for a modern SaaS product.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
                                <h3 className="text-xl font-semibold text-[#673579] mb-2">Project Two</h3>
                                <p className="text-gray-600">A full-stack dashboard with Express, MongoDB, and Vue.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
                                <h3 className="text-xl font-semibold text-[#673579] mb-2">Project Three</h3>
                                <p className="text-gray-600">Mobile-first eCommerce UI built with Tailwind and Next.js.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>








        </>
    )
}

export default Home