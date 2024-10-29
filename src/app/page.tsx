import Image from "next/image"
import Second from "../components/Second"
import Third from "../components/Third"
import Footer from "../components/Footer"

export default function Home(){
  return(
    <>
    {/*Hero Section*/}
    <section className="top">
      <div className="left-text">
      <h1>Hi, I am John,<br/>Creative Technologist </h1><br/>
       <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <button className="btn">Download Resume</button> 
      </div>
      <Image height={260} width={260} alt="hero" src="/hero-image.png"></Image>
    </section>

    {/* Second Section*/}
   <Second/>

   {/* Third Section*/}
  <Third/>

    {/*Footer*/}
    <Footer/>
    </>
  )
}
