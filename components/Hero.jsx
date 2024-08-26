'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri'

import ProfileImg from "./ProfileImg";
import Badge from "./Badge";
import Socials from "./Socials";


const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* text */}
                    <div className="flex max-w-[600px] flex-col justify-center max-auto xl-mx-0 text-center xl:text-left">
                        <div className="text-sm upperacse font-semibold mb-4 tracking-[4px] text-primary">
                            <TypeAnimation
                                sequence={[
                                    "Hello!",
                                    1000, 
                                    `I'm an aspiring Web Developer`,
                                    1000,
                                    `I'm a programming enthusiast`,
                                    1000,
                                    `I'm fluent in JavaScript, React, and Node.js`,
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                        <h1 className="h1 mb-4">Hello, my name is Fname Lname</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Brief description with insights into myself, my vocational journey,
                            and what I engage in professional settings.
                        </p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href='/contact'>
                                <Button className="gap-x-2">
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>
                            <Button variant="secondary" className="gap-x-2">
                                Download CV<Download size={18} />
                            </Button>
                        </div>
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex relative">Image</div>
                </div>
                {/* icon */}
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero