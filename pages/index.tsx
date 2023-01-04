import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube,} from 'react-icons/ai';
import Image from "next/image";
import deved from "../dev-ed-wave.png";
import design from "../design.png"
import code from "../code.png";
import consulting from "../consulting.png";
import web1 from "../web1.png"
import web2 from "../web2.png"
import web3 from "../web3.png"
import web4 from "../web4.png"
import web5 from "../web5.png"
import web6 from "../web6.png"
import { useState} from "react"



export default function Home() {
  try {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Terrill Hilliard Portofolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-gray-900 px-10 md:px-20 lg:px-40">
          <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons text-white'>DevelopedByTerrill</h1>
              <ul className='flex items-center'>
                <li><a href="https://github.com/terrillhilliard" className=' bg-gradient-to-r from-teal-500 bg-teal-500 text-white px-4 py-2 rounded-md ml-8 font-burtons'>GitHub</a></li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-burtons md:text-6xl'>
                Terrill Hilliard
              </h2>
              <h3 className='text-2xl py-2 font-burtons md:text-3xl text-white'>
                Front-End Developer.
              </h3>
              <p className='font-burtons text-md py-5 leading-8 md:text-xl max-w-lg mx-auto text-white'>
                Freelancer providing user-friendly and responsive mobile and web applications, join me below!
              </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-grey-600'>
              <AiFillTwitterCircle />
              <AiFillYoutube />
              <AiFillLinkedin />
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
              <Image src={deved} layout="fill" objectFit="cover" alt="A beautiful landscape with mountains and a lake"></Image>
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1 pt-20 text-center md:text-xl max-w-lg mx-auto font-burtons dark: font-bold  text-teal-600 '>
                Skills and Experience
              </h3>
              <p className='font-burtons text-md py-2 leading-8 pb-20 text-center md:text-xl max-w-lg mx-auto text-white'>
              As a reliable and friendly software developer and technical support professional, I have demonstrated my ability to quickly learn and master new concepts.
              </p>
            </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-white'>
              <Image src={design} width={100} height={100} className='mx-auto pb-10' alt="A beautiful landscape with mountains and a lake"></Image>
              <h3 className='text-lg font-burtons font-bold text-teal-600'>Beautiful Designs</h3>
              <p className='py-2 text-gray-600 font-burtons'>
              A particular expertise in using frameworks like Bootstrap and Tailwind CSS to create responsive and visually appealing user interfaces.
              </p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-white'>
              <Image src={code} width={100} height={100} className='mx-auto pb-10' alt="A beautiful landscape with mountains and a lake"></Image>
              <h3 className='text-lg font-burtons font-bold text-teal-600'>Coding</h3>
              <p className='py-2 text-gray-600 font-burtons'>
              As a front-end developer with 3 years of experience, I have a strong foundation in HTML, CSS, JavaScript, and Python; also proficiency in frameworks like React and Angular.
              </p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-white'>
              <Image src={consulting} width={100} height={100} className='mx-auto pb-10' alt="A beautiful landscape with mountains and a lake"></Image>
              <h3 className='text-lg font-burtons font-bold text-teal-600'>Customer Satisfaction</h3>
              <p className='py-2 text-gray-600 font-burtons'>
              Strong focus on customer satisfaction and a track record of building intuitive and visually appealing user interfaces. 
              </p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1 pt-20 text-center md:text-xl max-w-lg mx-auto font-burtons font-bold  text-teal-600 '>Portofolio</h3>
              <p className="font-burtons text-md py-2 leading-8 pb-20 text-center md:text-xl max-w-lg mx-auto text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/2 flex-1'>
                <a href="https://terrillhilliard.github.io/tindog"><Image src={web1} className="rounded-lg object-cover" alt="A beautiful landscape with mountains and a lake"></Image></a>
              </div>
              <div className='basis-1/2 flex-1'>
                <a href="https://terrillhilliard.github.io/cv"><Image src={web2} className="rounded-lg object-cover" alt="A beautiful landscape with mountains and a lake"></Image></a>
              </div>
              <div className='basis-1/2 flex-1'>
                <a href="https://terrillhilliard.github.io/drumkit"><Image src={web3} className="rounded-lg object-cover" alt="A beautiful landscape with mountains and a lake"></Image></a>
              </div>
              <div className='basis-1/2 flex-1'>
                <a href="https://terrillhilliard.github.io/dicegame"><Image src={web4} className="rounded-lg object-cover" alt="A beautiful landscape with mountains and a lake"></Image></a>
              </div>
              <div className='basis-1/2 flex-1'>
                <a href="https://terrillhilliard.github.io/simongame"><Image src={web5} className="rounded-lg object-cover" alt="A beautiful landscape with mountains and a lake"></Image></a>
              </div>
              <div className='basis-1/2 flex-1'>
                <a href="https://terrillhilliard.github.io/login"><Image src={web6} className="rounded-lg object-cover" alt="A beautiful landscape with mountains and a lake"></Image></a>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  } catch (error) {
    console.error(error)
    return <p>An error occurred while rendering the component.</p>
  }
}
