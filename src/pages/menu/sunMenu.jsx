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
            <div className="flex justify-center cursor-pointer link-back" onClick={()=>navigate("/menu")}>Back / عودة</div>
        </div>
        <div className="flex px-3">
            <div className="card-sub m-auto mt-20   w-96 sm:w-1/2 md:w-1/2 pb-5 pt-16 px-5">
                <div className="sub-img">{menu.svg}</div>
                {"id" in menu && menu.content.length>0 && menu.content.map(e=>(<div onClick={()=>navigate(`/menu/${menu.id}/${e.id}`)} className="content-sub flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <div> <img className="w-16 sm:w-20" src={e.img} alt={"image"} /></div>
                        <div>
                            <h5>{e.nameEn}</h5>  
                            <h5>{e.nameAr}</h5>
                        </div>  
                    </div>
                    <p>
                        {e.price} 
                    </p>
                </div>))}
            </div>
        </div>
        

    </div> );
}

export default SubMenu;