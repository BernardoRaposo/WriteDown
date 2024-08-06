import Head from 'next/head';
import Navbar from '../components/Navbar';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

export default function About() {
  return (
    <div>
      <Head>
        <title>About - WriteDown</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto text-center bg-white shadow-lg rounded-lg p-8">
          <section className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">About WriteDown</h1>
            <p className="text-lg text-gray-700">
              WriteDown is a lightweight word processor designed for bloggers and writers. It allows users to compose rich text blog posts, add author details, and download the content as Markdown files and later add to their own blog file system. This tool streamlines the process of content creation for websites that use Markdown for formatting and it is meant to be an open-source project that can be customized and extended to fit the needs of different users.
            </p>
          </section>

          <section className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <img src="/profilePic.jpeg" alt="Profile Picture" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-700">
              My name is Bernardo. I use code as a tool to solve problems. With a strong passion for technology and innovation, I have worked on numerous projects and startups, constantly striving to make an impact in the tech world. I really believe that tech can change the world for the better and I am excited to be part of that change.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center">My Other Projects and Startups</h2>
            <p className="text-lg text-gray-700 mb-6">
              Throughout my career, I have been involved in various projects that span different areas of technology and business. Here are some highlights:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-2">Solara</h3>
                <p className="text-gray-700 mb-4">
                  Aims to revolutionize green energy by providing high-quality solar products and making data accessible to foster trust and innovation in sustainable technology.
                </p>
                <a href="https://solara-gamma.vercel.app/" className="text-blue-500 font-semibold hover:text-blue-700" target="_blank" rel="noopener noreferrer">Visit the website</a>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-2">PopSpark</h3>
                <p className="text-gray-700 mb-4">
                  Popspark is a tool created to help businesses and individuals create beautiful and engaging popups for their websites. It is a simple and easy-to-use tool that allows users to create popups in minutes.
                </p>
                <a href="https://usepopspark.com" className="text-blue-500 font-semibold hover:text-blue-700" target="_blank" rel="noopener noreferrer">Visit the website</a>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-2">Drivuhub</h3>
                <p className="text-gray-700 mb-4">
                  DriveHub aims to revolutionize the car rental industry by offering a seamless, one-stop solution for holiday rentals. Upon arriving at your destination, enjoy our hassle-free car rental services designed to enhance your travel experience.
                </p>
                <a href="https://usedrivuhub.com" className="text-blue-500 font-semibold hover:text-blue-700" target="_blank" rel="noopener noreferrer">Visit the website</a>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center">My Life Goals</h2>
            <p className="text-lg text-gray-700">
              My ultimate goal is to create cool stuff! Along the way, I aim to:
            </p>
            <ul className="list-disc list-inside ml-8 text-lg text-gray-700">
              <li>Innovate and create technology that solves real-world problems.</li>
              <li>Build successful startups that make a positive impact.</li>
              <li>Continuously learn and grow both personally and professionally.</li>
            </ul>
          </section>

          <section className="mb-8 text-center" id='contact'>
            <h2 className="text-3xl font-bold mb-4">Connect with Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              Feel free to connect with me on social media:
            </p>
            <ul className="flex justify-center space-x-6 font-bold">
              <li>
                <a href="https://x.com/sir__fox" className="text-black hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                  <BsTwitterX className='text-3xl' />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bernardo-raposo/" className="text-black hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='text-3xl' />
                </a>
              </li>
              <li>
                <a href="https://github.com/BernardoRaposo" className="text-black hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='text-3xl' />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
