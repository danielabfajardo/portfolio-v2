import { socialMedia } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="w-full">
        <div className="flex flex-row items-center gap-6 md:gap-12">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className={`cursor-pointer flex justify-center items-center opacity-60 hover:opacity-100 transition duration-200 ${info.id === 3 || info.id === 4 ? 'invert' : '' }`}
            >
              <Link href={info.url} target="_blank" rel="noopener noreferrer">
                <Image src={info.img} alt={`Daniela Fajardo ${info.url}`}  width={25} height={25} />
              </Link>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Contact;