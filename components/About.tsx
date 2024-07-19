import React from 'react'
import { LinkPreview } from './ui/LinkPreview'

const About = () => {
  return (
    <section id="about">
        <div className="flex flex-col justify-center lg:justify-start relative z-10">
            <h1 className='text-md heading'>About</h1>
            <p className="mt-12 leading-7 tracking-wider text-md text-gray-400 font-light">
                I'm dedicated to bringing ideas to life through code. As a software developer at {" "}
                <LinkPreview
                url="https://pscore.org/home/"
                className="text-white"
                >
                PSCORE
                </LinkPreview> 
                , an NGO focused on North Korean human rights, I've used technology to drive impactful change. My passion for sustainability drives me toward a {" "}
                <LinkPreview
                url="https://se4gd.lutsoftware.com/"
                className="text-white"
                >
                Master's Degree
                </LinkPreview> 
                {" "} in Software Engineering for Green Deal.
                <br/><br/>
                My academic journey has been punctuated by prestigious scholarships from {" "}
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
                <LinkPreview
                url="https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters"
                className=""
                >Erasmus Mundus,</LinkPreview> 
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
                When I'm not coding, you'll find me reading books, showering my dog with love, or scouring the web for exciting new opportunities. My philosophy in life is encapsulated by "cerca trova" — {" "}
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
