import React from "react";
import BgAwal from "../assets/bgawal.png";
import Kakek from "../assets/fufu.png";
import LogoAtas from "../assets/Logo.png";
import Ngoding from "../assets/ngoding.png";
import Kopi from "../assets/kopi.png";
import Papan from "../assets/Emak.png";
import Emak from "../assets/Papan.png";
import pensil from "../assets/Pensil.png";
import Portfolio from "../assets/bgportfolio.png";
import ppIbu from "../assets/ibuibu.png";
import ppOm from "../assets/omom.png";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";
import Ngoding1 from "../assets/ngoding1.png";
import bgKontak from "../assets/bgKontak.png";
import { Link } from "react-scroll";
import { ArrowRightIcon, HomeIcon, MenuIcon } from '@heroicons/react/solid'

export default function Dashboard() {
    return (
        <React.Fragment>
            <div className="">
                {/* navbar mobile */}
                <nav className="fixed text-white bg-gray-700 z-20 w-full flex px-4 md:hidden">
                    <div className="text-xs flex w-3/12 items-center pr-10"><p className="text-white">Luzhua</p><p className="text-sky-400">.me</p></div>
                    <div className="text-xs w-9/12 flex">
                        <Link smooth={true} duration={400} to="home">
                            <div className="p-4 hover:bg-gray-600">
                                <button>Home</button>
                            </div>
                        </Link>
                        <Link smooth={true} duration={400} to="about">
                            <div className="p-4 hover:bg-gray-600">
                                <button>About Me</button>
                            </div>
                        </Link>
                        <Link smooth={true} duration={400} to="portfolio">
                            <div className="p-4 hover:bg-gray-600">
                                <button>Portfolio</button>
                            </div>
                        </Link>
                        <Link smooth={true} duration={400} to="contact">
                            <div className="p-4 hover:bg-gray-600">
                                <button>Contact</button>
                            </div>
                        </Link>
                    </div>
                </nav>
                {/* section Home */}
                <section id="home" className="">
                    {/* background */}
                    <div className="flex absolute w-full h-screen md-max:h-1/2">
                        <img src={BgAwal} alt="asd" className="w-5/12 md-max:w-full" />
                        <img src={Kakek} alt="asd" className="w-7/12 md-max:hidden" />
                    </div>
                    <div className="w-full relative flex justify-between">
                        {/* text */}
                        <div className="py-16 px-32 w-11/12 md-max:px-2 md-max:py-4 md-max:w-full">
                            <div className="pb-24 text-lg md-max:pb-6 md-max:text-sm">
                                <div className="flex hover:md:text-xl"><p className="text-white">Fuzaki</p><p className="text-sky-400">.me</p></div>
                            </div>
                            <div className="py-10 md-max:py-2 w-full flex justify-between">
                                <div className="md-max:w-8/12">
                                    <div className="text-sky-400 text-xl font-bold uppercase md-max:text-base"><p>HELLO GUYS</p></div>
                                    <div className="text-white text-6xl font-semibold uppercase py-10 md-max:py-5 md-max:text-3xl w-11/12"><p>I’m Alan RICKY $K!d</p></div>
                                    <div className="text-white text-lg w-5/12 md-max:text-sm md-max:w-11/12"><p>i'm a professional <strong>Photographer, Videographer and Storyteller </strong>from Indonesia</p></div>
                                </div>
                                <div className="md-max:w-4/12 md:hidden">
                                    <div className="p-1 rounded-full inset-y-0 right-0"><img src={Kakek} alt="ads" className="rounded-full h-32 w-32 m-2" /></div>
                                </div>
                            </div>
                            <div className="flex w-5/12 justify-start text-xl text-white py-10 md-max:py-12 md-max:w-full md-max:text-sm">
                                <div className=""><button className="bg-orange-400 py-2 px-6 rounded-lg hover:bg-white hover:text-orange-400">Hire Me</button></div>
                                <div className="flex items-center text-center"><button className="ml-14 mr-4 hover:text-2xl"><u>View Resume</u></button><ArrowRightIcon className="h-8 md-max:h-4" /></div>
                            </div>
                        </div>
                        {/* navbar right */}
                        <div className="w-1/12 h-screen bg-gray-700 text-white md-max:hidden">
                            <div className="w-full rotate-90 mb-8"><MenuIcon className="w-full p-8" /></div>
                            <div className="flex text-xl rotate-90">
                                <Link smooth={true} duration={400} to="home">
                                    <div className="p-8 px-6 hover:bg-gray-600">
                                        <button>Home</button>
                                    </div>
                                </Link>
                                <Link smooth={true} duration={400} to="about">
                                    <div className="p-8 px-6 hover:bg-gray-600">
                                        <button>About Me</button>
                                    </div>
                                </Link>
                                <Link smooth={true} duration={400} to="portfolio">
                                    <div className="p-8 px-6 hover:bg-gray-600">
                                        <button>Portfolio</button>
                                    </div>
                                </Link>
                                <Link smooth={true} duration={400} to="contact">
                                    <div className="p-8 px-6 hover:bg-gray-600">
                                        <button>Contact</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}