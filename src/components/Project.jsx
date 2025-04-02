import React from 'react';
import '../index.css';
import Box from './ui/box'

//image 
import Project1 from '../assets/project-1.png'; 
import Project2 from '../assets/project-2.png';
import Project3 from '../assets/project-3.png';
import Project4 from '../assets/project-4.png';
import Project5 from '../assets/project-5.png';


function Project(){
    return(
        <section id='projects'>
            <div className='flex flex-col justify-center pt-20 items-center'>
                <h1 className='text-amber-50 font-semibold text-2xl'>Most recent works <span className='text-[var(--color-main)]'>.</span></h1>
               <div className='flex flex-wrap justify-center items-center gap-8 mt-10'> 
                <Box 
                    img={Project1} 
                    title="Car Website"
                    description="Elecar is a simple car website template built with HTML, Tailwind Css, and JavaScript and it is Responsive design."
                    github="https://github.com/kaushalsahu07/elecar"
                    link="https://kaushalsahu07.github.io/elecar/code/index.html"
                    html={true}
                    css={true}
                    javascript={true}
                    tailwindcss={true}
                />
                <Box 
                    img={Project2}
                    title="Weather App"
                    description="This project is a web application that provides real-time weather updates for any location."
                    link="https://kaushalsahu07.github.io/weather/"
                    github="https://github.com/kaushalsahu07/weather"
                    html={true}
                    css={true}
                    javascript={true}
                />
                <Box 
                    img={Project3}
                    title="Note App"
                    description="A simple and intuitive note-taking application built with React Native and Expo, fully developed with the assistance of AI."
                    github="https://github.com/kaushalsahu07/Note-App"
                    react={true}
                    javascript={true}
                    expo={true}
                />
                <Box 
                    img={Project4}
                    title="DeliveryPartner"
                    description="DeliveryPartner is a web template designed for businesses that offer delivery services. It provides a customizable."
                    link="https://kaushalsahu07.github.io/DeliveryPartner/"
                    github='https://github.com/kaushalsahu07/DeliveryPartner'
                    html={true}
                    css={true}
                    javascript={true}
                />
                <Box 
                    img={Project5}
                    title="Red Store"
                    description="The website features product listings, categories, and a user-friendly interface for a smooth shopping experience."
                    link="https://kaushalsahu07.github.io/red-store/"
                    github="https://github.com/kaushalsahu07/red-store"
                    html={true}
                    css={true}
                    javascript={true}
                />
                </div>
            </div>
        </section>
    )
}

export default Project;