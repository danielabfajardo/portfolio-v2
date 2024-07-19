import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from "@/data";

const Blogs = () => {
    return (
        <section id="blogs">
            <h1 className='text-md heading'>Blogs</h1>
            <div className="flex flex-col gap-8 mt-12">
            {blogs.map((blog, index) => (
                <div key={index} className="border shadow-lg rounded-lg overflow-hidden hover:shadow-violet-600/[0.4] transition-all duration-200 ease-linear">
                <Link href={blog.url} passHref rel="noopener noreferrer" target="_blank">
                    <div className="flex items-center">
                        <div className="relative h-40 w-40">
                            <Image src={blog.image} alt={blog.title} width={50} height={50} className="w-full h-full rounded-l-lg object-cover" />
                        </div>
                        <div className="p-4 flex-1">
                        <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                        <p className="text-gray-700 text-md">{blog.description}</p>
                        </div>
                    </div>
                </Link>
                </div>
            ))}
            </div>
      </section>
    );
  }

export default Blogs;
