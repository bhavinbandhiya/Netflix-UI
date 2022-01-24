import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import "./listitem.scss";
import {useState} from "react";

export default function ListItem ({index}){
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://youtu.be/h7gvFravm4A";
    return (
        <div className="listItem" 
        style={{left:isHovered && index * 225 -50 + index*2.5}}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        >
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7omQBqaIagAqJhICnR9NE8yRzxlxk1sB-NLeBp_Ho8-Z0dkyWivDUmbZXacXzawvfUQ&usqp=CAU" alt="" />
           {isHovered && (
               <>
                <video src= {trailer} autoplay={true} loop/>
           <div className="itemInfo">
               <div className="icons">
                   <PlayArrow className="icon"/>
                   <Add className="icon"/>
                   <ThumbUpAltOutlined className="icon"/>
                   <ThumbDownOutlined className="icon"/>
               </div>
               <div className="itemInfoTop">
                   <span>1 hour 14 mins</span>
                   <span className="limit">+16</span>
                   <span>2016</span>
               </div>
               <div className="desc">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus minus ex sit repellat quia! Maiores porro est explicabo possimus nobis pariatur sed quae cum quod?
               </div>
               <div className="genre">Action</div>
           </div>
               </>
           )}
          
        </div>
    )
}