import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";
import logo from "../../images/stefanos.png"


function SubMenu() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [menu, setMenu] =  useState([])
    useEffect(()=>{

        setMenu(data.find(e => (e.id == id)))

        
    },[])

    return ( <div>
        
         <div className="container-nav">
            <div className="flex justify-center "><img className="img-move w-52 md:w-80" alt="logo" src={logo} /></div>
            <h3 className="flex justify-center py-2">{menu.nameEn} / {menu.nameAr}</h3>
            <div className="flex justify-center cursor-pointer link-back" onClick={()=>navigate("/menu")}>Back</div>
        </div>
        <div className="flex px-3">
            <div className="card-sub m-auto  p-6 px-5">
                {/* <div className="sub-img">{menu.svg}</div> */}
                {"id" in menu && menu.content.length>0 && menu.content.map(e=>(<div  className="content-sub flex justify-between items-center">
                    <div className="flex items-center gap-3 lg:gap-5  ">
                        <div> <img className=" w-52 sm:w-52 lg:w-96 rounded" src={e.img} alt={"image"} /></div>
                        <div className="lg:flex w-32 sm:w-38 lg:w-96 justify-center flex-col items-center">
                            <h5 className="capitalize">{e.nameEn}</h5>  
                            <h5>{e.nameAr}</h5>
                            <p>
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