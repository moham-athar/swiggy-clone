import React from "react";
import { useState } from "react";

const Section = ({title , description, isVisible,setIsVisible}) => {

    return (
        <div className="border-2 border-black m-3 p-3"> 
        <h2 className="text-sm font-bold">{title}</h2>

        {isVisible ? <button onClick={()=> setIsVisible()} className="cursor-pointer">Hide</button> 
        : 
        <button onClick={()=> setIsVisible(true)} className="cursor-pointer">Show</button>}
        { isVisible && <p>{description}</p>}
    </div>
    )
    }


const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState();

    return(
   <>
   <h1 className="p-2 m-2 text-xl font-bold">Instamart</h1>
   <Section 
        title = {"About Instamart"}
        description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
        isVisible = {visibleSection == "about"}
        setIsVisible= {()=> setVisibleSection("about")}
        
   />
   <Section 
        title = {"Instamart Work"}
        description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
        isVisible = {visibleSection == "work"}
        setIsVisible= {()=> setVisibleSection("work")}
    
    
   />
   <Section 
        title = {"Instamart People"}
        description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
        isVisible = {visibleSection == "people"}
        setIsVisible= {()=> setVisibleSection("people")}
    
    
   />
   </>
    )
}
export default Instamart;