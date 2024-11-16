import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets";
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line react/prop-types
const ExploreMenu = ({category,setCategory,addel}) => {
    const {i18n } = useTranslation();
    return (
        <div className="explore-menu" id="explore-menu">
           
            <div className="explore-menu-list">



                {menu_list
        .filter(item2 => item2.addel === addel)
                .map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={i18n==='en'?item.menu_name:item.menu_name_uk} />
                            <p>{i18n.language==='en'?item.menu_name:item.menu_name_uk}</p>

                        </div>
                    )
                })}



                
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu