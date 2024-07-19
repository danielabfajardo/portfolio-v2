import React from 'react'
import { LinkPreview } from './ui/LinkPreview'

const About = () => {
  return (
    <section id="about">
        <div className="flex flex-col justify-center lg:justify-start relative z-10">
            <h1 className='text-md heading'>About</h1>
            <p className="mt-12 leading-7 tracking-wider text-md text-gray-400 font-light">
                I&apos;m dedicated to bringing ideas to life through code. As a software developer at {" "}
                <LinkPreview
                url="https://pscore.org/home/"
                className="text-white"
                >
                PSCORE
                </LinkPreview> 
                , an NGO focused on North Korean human rights, I&apos;ve used technology to drive impactful change. Currently, I&apos;m pursuing a {" "}
                <LinkPreview
                url="https://www.lut.fi/en"
                className="text-white"
                >
                Master&apos;s Degree in Software Engineering
                </LinkPreview> 
                {" "} across Europe.
                <br/><br/>
                My academic journey has been punctuated by prestigious scholarships from {" "}
                <LinkPreview
                url="https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters"
                className=""
                >Erasmus Mundus,</LinkPreview> 
                {" "}
                <LinkPreview
                url="https://www.ewha.ac.kr/ewhaen/index.do"
                className=""
                >Ewha Womans University,</LinkPreview>
                {" "}
                <LinkPreview
                url="https://www.sdream.or.kr/main"
                className=""
                >Samsung, </LinkPreview>
                {" "}
                and the {" "}
                <LinkPreview
                url="https://www.studyinkorea.go.kr/ko/scholarshipmain.do"
                className=""
                >
                South Korean Government.
                </LinkPreview> 
                {" "}
                <br/><br/>
                When I&apos;m not coding, you&apos;ll find me reading books, showering my dog with love, or scouring the web for exciting new opportunities. My philosophy in life is encapsulated by &quot;cerca trova&quot; — {" "}
                <LinkPreview
                url="https://www.goodreads.com/book/show/17212231-inferno"
                className=""
                >
                seek, and you shall find.
                </LinkPreview> 
            </p>
        </div>
    </section>
  )
}

export default About
