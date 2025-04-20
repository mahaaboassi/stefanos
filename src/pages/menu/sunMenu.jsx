import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";
import logo from "../../images/stefanos.png"
import SlideImage from "./slideImage";


function SubMenu() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [menu, setMenu] =  useState([])
    useEffect(()=>{
        const temp = data.find(e => (e.id == id))
        setMenu(temp)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); 
        
    },[])
    
    return ( <div>
        
         <div className="container-nav">
            <div className="flex justify-center "><img className="img-move w-52 md:w-80" alt="logo" src={logo} /></div>
            <h3 className="flex justify-center py-2 uppercase">{menu.nameEn} / {menu.nameAr}</h3>
            <div className="flex justify-center cursor-pointer link-back uppercase" onClick={()=>navigate("/menu")}>Back</div>
        </div>
        <div className="flex md:px-3 ">
            <div className="card-sub m-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-4  p-1 md:p-5">
                {/* <div className="sub-img">{menu.svg}</div> */}
                {"id" in menu && menu.content.length>0 && menu.content.map(e=>(<div key={`Item_${e.nameEn}`}  className="content-sub flex justify-between items-center">
                    <div className="flex items-center gap-4 ">
                        <div className={`${e.key == "small"?"first-col-small":"first-col"}`}> 
                            {(e.images && e.images.length>0 )? <SlideImage imagesslide={e.images} />
                                    :
                            <img className=" photo-first-col  object-contain " src={e.img} alt={"image"} />}
                        </div>
                        <div className={`lg:flex ${e.key == "small"?"second-col-small":"second-col"}  justify-center flex-col items-center`}>
                            <h5 className="uppercase text-center">{e.nameEn}</h5>  
                            <h5 className="text-center">{e.nameAr}</h5>
                            <p className="text-center">
                                {e.price} 
                            </p>
                        </div>  
                        
                    </div>
                    
                </div>))}
            </div>
        </div>
        

    </div> );
}

export default SubMenu;
// w-28 sm:w-38 lg:w-96