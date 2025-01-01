import { useNavigate } from "react-router-dom";
import { data } from "../../data";
import logo from "../../images/stefanos.png"

function Menu() {
    const navigate = useNavigate()
    return ( <div>
        <div className="container-nav">
            <div className="flex justify-center "><img className="img-move w-52 md:w-80" alt="logo" src={logo} /></div>
            <h3 className="flex justify-center py-2">Menu / القائمة</h3>
        </div>

        <div  className="grid grid-cols-1 sm:grid-cols-2 mt-20">
            {data.map((e)=>(<div onClick={()=>navigate(`/menu/${e.id}`)} key={`Menu_${e.nameEn}`} className="flex justify-center items-center" style={{marginBottom :"100px"}}>
                    <div className="card w-60 sm:w-72 md:w-80 px-5 pb-5 pt-16">
                        <div className="flex justify-center img-card " > {e.svg}</div>
                        <h3  className="flex justify-center capitalize">{e.nameEn}</h3>
                        <h3  className="flex justify-center" style={{direction:"rtl"}}>{e.nameAr}</h3>
                    </div>
                </div>))}

        </div>

    </div> );
}

export default Menu;