import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";
import logo from "../../images/stefanos.png"


function Details() {
    const { id ,subId} = useParams()
    const navigate = useNavigate()
    const [menu, setMenu] =  useState([])
    const [item, setItem] = useState({})
    useEffect(()=>{
        const temp = data.find(e => (e.id === id))
        setMenu(temp)
        setItem(temp.content.find(e => (e.id === subId)))

        
    },[id,subId])

    return ( <div>
         <div className="container-nav">
            <div className="flex justify-center "><img className="img-move w-52 md:w-80" alt="Stefanos" src={logo} /></div>
            <h3 className="flex justify-center py-2">{menu.nameEn} / {menu.nameAr}</h3>
            <div className="flex justify-center cursor-pointer link-back" onClick={()=>navigate(`/menu/${menu.id}`)}>Back</div>
        </div>
        <div className="flex px-3">
            <div className="card-sub m-auto mt-20   w-96 sm:w-1/2 md:w-1/2 pb-5 pt-20 px-5">
                <div className="sub-img">
                    <img className="w-50 " src={item.img} alt={item.nameEn} />
                </div>
                {"id" in item && <div className="flex flex-col justify-between items-center">
                    <div>
                        <h5>{item.nameEn}</h5>  
                        <h5>{item.nameAr}</h5>
                    </div>
                    <p className="price">
                        {item.price} 
                    </p>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolore obcaecati officia, nobis placeat aliquid ipsum blanditiis consequuntur </p>  
                    <p style={{direction:"rtl"}}>لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسكينج أليت. هذا نص وهمي يُستخدم في التصميم.</p>
        
                    
                </div>}
            </div>
        </div>
        

    </div> );
}

export default Details;