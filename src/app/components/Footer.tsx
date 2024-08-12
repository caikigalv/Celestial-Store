import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";


export const Footer = () => {
    return (
        <div>
            <div className="bg-blueDark bg-gradient-to-t from-black w-screen h-[190px] md:h-[110px] flex flex-col justify-center items-center">

                <div className="md:flex justify-center items-center w-full">

                    <div className="flex justify-center ">
                        <p className="text-white text-[10px]">Developed by <span className="text-blue-700">Caiki Carlos &copy;</span> </p>
                    </div>


                    <div className="flex flex-col">
                        <p className="text-white uppercase font-bold text-1xl text-center">Social Media </p>
                        <div className="flex justify-center items-center  text-center  gap-8 mt-4 w-[400px]">
                            <a href="https://github.com/caikigalv"><FaGithub className="text-blue-700 text-3xl hover:scale-125" title="GitHub" /></a>
                            <a href="https://www.linkedin.com/in/caiki-carlos-43372b284/"><FaLinkedin className="text-blue-700 text-3xl hover:scale-125" title="LinkedIn" /></a>
                            <a href="https://www.instagram.com/caikicarlosoficial/"><FaInstagram className="text-blue-700 text-3xl hover:scale-125" title="Instagram" /></a>
                        </div>
                    </div>
                    <div>
                        <div id="contato" className="flex justify-center items-center gap-2 mt-4">
                            <IoPhonePortraitOutline className="text-blue-700" />
                            <p className="text-white ">+55 (11) 98207-9986</p>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <TfiEmail className="text-blue-700" />
                            <p className="text-white ">caikigalv@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}