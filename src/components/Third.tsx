import Image from "next/image";
export default function Page(){
    return(
     <>
    <section className="third">
    <h2 className="third-h2">Featured Works</h2>

    {/*First Div*/}
    <div className="dashboard">
    <Image className="image1" src="/Rectangle 30.png" alt="first" height={280} width={330}></Image>
    <div className="dashboard1">
    <h2>Designing Dashboards</h2>
    <h3>2020</h3>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt nostrud amet.
    </p>
    </div>
    </div>

      {/* Second Div*/}
    <div className="dashboard2">
    <Image className="image1" src="/Rectangle 32.png" alt="first" height={280} width={330}></Image>
    <div className="dashboard4">
    <h2>Designing Dashboards</h2>
    <h3>2020</h3>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt nostrud amet.
    </p>
    </div>
    </div>
    
      {/*Third Div*/}
    <div className="dashboard2">
    <Image className="image1" src="/Rectangle 34.png" alt="first" height={280} width={330}></Image>
    <div className="dashboard4">
    <h2>Designing Dashboards</h2>
    <h3>2020</h3>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
       Velit officia consequat duis enim velit mollit. 
       Exercitation veniam consequat sunt nostrud amet.
    </p>
    </div>
    </div>
   </section>
     </>
    )
}