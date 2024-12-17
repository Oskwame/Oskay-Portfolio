import Image from "next/image";
import Nav from "@/components/nav/Nav";
import Socials from "@/components/header/Socials";
import Header from "@/components/header/Header";
import About from "@/components/about/about";
import Contact from "@/components/contact/Contact";
import Skills from "@/components/skills/Skills";
import Service from "@/components/service/Service";


export default function Home() {
  return (
    <>
    <Nav/>
    <Header/>
    <Socials/>
    <About/>
    <Skills/>
    <Service/>
    <Contact/>

  </>
  );
}
