
import {motion} from "framer-motion"
import Image from 'next/image'

const SocialMedia = ({children,social,link,className}) => {
    let path = `/${social}_icon.svg`
    return(
        <div className="w-72 max-h-[24rem] flex place-content-center  ">
        
        <div className={className} >
        <motion.a href={link} target="_black" className=" flex place-content-center cursor-pointer " whileHover={{scale:1.2}}>
            <Image src={path} width={30} height={30} alt={social}></Image>
            </motion.a>
            {children}
        </div>
       
        </div>
    )
}


export default SocialMedia;