import "./Header.css"
import header_img from '/header_img.jpg'
function Header() {
  return (
    <div className="header">
      <img src={header_img} alt="Dubai restaurant header" />
      <div className="header-contents">

        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate you dining experience, one delicious meal at a time.</p>
<button>View Menu</button>

      </div>
    
    </div>
  )
}

export default Header