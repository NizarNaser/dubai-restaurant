import "./AddelMenu.css"
import { addel_list } from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const ExploreMenu = ({addel,setAddel}) => {
    return (
        <div className="addels">
      
      
                {addel_list.map((item, index) => {
                    return (
                        <button className={addel === item.addel_name ? "active" : ""} onClick={() => setAddel(prev => prev === item.menu_name ? "Kichen" : item.menu_name)} key={index} >
                            
                            <p>{item.addel_name}</p>

                        </button>
                    )
                })}
     </div>
    )
}

export default ExploreMenu