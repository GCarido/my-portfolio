'use client';
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import ProjectCard from '@/components/ProjectCard';

import projectData from '@/app/data';

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8 text-justify">I’ve worked on a variety of projects, including developing an Attendance Tracking System and a Budget App using C#, Windows Forms, and MySQL, as well as building a Windows desktop application during my Application Developer Internship. My JavaScript projects range from creating a Rock paper scissor game and amazon web project to managing localStorage, implementing class toggling, and designing dynamic grid layouts. I’m also engaged in developing with Next.js and React through this portfolio, where I focus on customizing components, such as cards and tooltips, using Tailwind CSS for both dark and light modes.</p>
                    <Link href="/projects"><Button>All projects</Button></Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className="h-[500px] " slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {/* show 4 projects  */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work