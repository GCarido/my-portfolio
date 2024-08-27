import ProfileImg from "./ProfileImg"
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase
} from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Gerald Carido'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '09275929378'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'geraldcastcarido@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on October 14, 2001'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor of Science in Computer Engineering'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'San Miguel Linao, Talisay City Cebu'
    }
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Cebu Institute of Technology - Univerity',
                qualification: 'Bachelor of Science',
                years: '2020 - 2024'
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                university: 'Cebu Institute of Technology - Univerity',
                qualification: 'Application Developer Intern',
                years: '2024 - 2024'
            }
        ]
    },
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS'
            },
            {
                name: 'Javascript'
            },
            {
                name: 'C#'
            },
            {
                name: '.NET'
            },
            {
                name: 'MySQL'
            }
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/git.svg'
            },
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/adobe-photoshop.svg'
            },
            {
                imgPath: '/about/adobe-xd.svg'
            },
            {
                imgPath: '/about/trello.svg'
            }
        ]
    }
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <ProfileImg
                            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                            imgSrc="/about/developer.png"
                        />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Information</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal info */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Proin in ornare mauris vel sollicitudin</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet cursus orci. Sed libero ante, facilisis ut tempus quis, accumsan eu dui. Sed id massa elit. Nam justo mauris, porttitor fringilla consectetur sit amet, commodo et orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer maximus nisi vel egestas mollis. Ut libero nibh, tincidunt et porta sit amet, tincidunt a leo. Etiam sodales nulla ac ultrices venenatis. Fusce condimentum vitae risus eu vestibulum. Quisque rhoncus arcu dapibus, sagittis urna vitae, scelerisque urna. Pellentesque ultrices a erat sit amet porttitor.
                                        </p>
                                        {/* icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return <div className="flex itemse-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">qualifications info</TabsContent>
                                <TabsContent value="skills">skills info</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About