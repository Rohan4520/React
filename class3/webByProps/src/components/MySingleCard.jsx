import { useState } from "react"
import "./MySingleCard.css"

function MySingleCard({ item, cartData, setCartData }) {
    const [readmore, setReadmore] = useState(true)
    function removeFromCard(data) {
        if (cartData?.length === 0) {
            return;
        }
        const filterData = cartData?.filter((item) => item.id !== data.id)
        setCartData(filterData)
    }


    return (
        <div>
            <div className="card">
                <img src={item.image} alt={item.title} className="card-img" />

                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-desc">

                        {readmore ?
                            (<span>
                                {item?.description?.substr(0, 60)} &nbsp;
                                <b style={{ color: "blue" }} onClick={() => setReadmore(false)}>readmore</b>
                            </span>) :
                            <span>
                                {item?.description}
                                <b style={{ color: "blue" }} onClick={() => setReadmore(true)}>readless</b>
                            </span>}

                    </p>

                    <p className="card-category">{item.category}</p>

                    <div className="card-footer">
                        <span className="price">${item.price}</span>
                        <span className="rating">⭐ {item.rating.rate} ({item.rating.count})</span>
                    </div>

                    <button className="btn" onClick={() => { removeFromCard(item) }}>Remove From Cart</button> :

                </div>
            </div>
        </div>
    )
}

export default MySingleCard;