import { projects } from '@/data'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from 'next/link'

const Projects = () => {
  return (
    <section id="projects">
        <h1 className='text-md heading'>Projects</h1>
        <div className='mt-12 flex flex-wrap items-center justify-center gap-24'>
            {projects.map((project, i) => (
                <div key = {i} className='sm:h-[35rem] md:h-[35rem] lg:min-h-[32.5rem]'>
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-violet-600/[0.4] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[30rem] md:w-auto h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-lg font-bold text-neutral-600 dark:text-white"
                            >
                                {project.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-sm max-w-sm mt-2 dark:text-neutral-300 text-gray-400 font-light"
                            >
                                {project.des}
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                rotateX={20}
                                rotateZ={-10}
                                className="w-full mt-4"
                            >
                            <img
                                src={project.img}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                translateX={-40}
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                    {project.iconLists.map((icon, index) => (
                                        <img key={index} src={icon} alt="icon" className="h-6 w-6" />
                                    ))}
                                    </div>
                                </div>
                            </CardItem>
                            <Link href={project.link}>
                                <CardItem
                                    translateZ={20}
                                    translateX={40}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Visit
                                </CardItem>
                            </Link>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects
