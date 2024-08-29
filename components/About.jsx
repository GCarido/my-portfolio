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
                qualification: 'Bachelor of Science in Computer Engineering',
                years: '2020 - 2024'
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                university: 'Cebu Institute of Technology - Univerity',
                role: 'Application Developer Intern',
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
                                        {/* languages */}

                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skills</div>
                                            <div className="border-b border-border"></div>
                                            <div>English, Filipino</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualification info */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                    </div>
                                    {/* experience and education */}
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        {/* experience */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, "experience").title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, "experience").data.map((item, index) => {
                                                    const { university, role, years } = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[80px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* education */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28}/>
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, "education").title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, "education").data.map((item, index) => {
                                                    const { university, qualification, years } = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[80px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
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