import Image from "next/image"
export default function Footer(){
    return(
        <>
        <div className="footer">
        <Image className="icon" src="/icons.png" alt="icons" height={30} width={250}></Image>
        <h2>Copyright ©2020 All rights reserved</h2>
        </div>
        </>
    )
}