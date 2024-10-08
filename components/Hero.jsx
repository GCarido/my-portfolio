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
        <section className="py-12 mb-10 xl:py-24 h-[84vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
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
                        <h1 className="h1 mb-4">Hello, my name is Gerald Carido</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">I'm a passionate software developer with a keen interest in crafting efficient and innovative solutions.
                        </p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href='/contact'>
                                <Button className="gap-x-2">
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>
                            <Link href="https://drive.google.com/file/d/1Pc0WWcuDNfKQvMiD-lM-Ys3NwbxYsfeB/view?usp=sharing" target="_blank">
                                <Button variant="secondary" className="gap-x-2">
                                    Download CV<Download size={18} />
                                </Button>
                            </Link>
                        </div>
                        {/* socials */}
                        <Socials
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex relative">
                        {/* badge 1 */}
                        <Badge
                            containerStyles="absolute top-[24%] -left-[5rem]"
                            icon={<RiBriefcase4Fill />}
                            endCountNum={400}
                            badgeText="+ Github Commits"
                        />
                        {/* badge 2 */}
                        <Badge
                            containerStyles="absolute top-[85%] -left-[1rem]"
                            icon={<RiBriefcase4Fill />}
                            endCountNum={7}
                            badgeText="Projects Made"
                        />
                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                        <ProfileImg
                            containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                            imgSrc="/hero/profile-one.png"
                        />
                    </div>
                </div>
                {/* icon */}
                <div className="hidden lg:flex absolute left-2/4 bottom-44 xl:bottom-1 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero