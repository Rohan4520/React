
import { Link, useParams } from "react-router-dom";
import "./LaptopDetails.css";
import { data } from "../utils/Data.js";
import LaptopCard from "../components/LaptopCard.jsx";
function LaptopDetail({handleProductSingle}) {
  console.log(handleProductSingle)
  const params = useParams();
  const categoryName = params.categoryName;
  // console.log(category)// yha dell aa gya hai
  console.log(params)
  const mySelctedCategory = data?.find((category) => category.categoryName === categoryName);

  // console.log(mySelctedCategory)
  if (!mySelctedCategory) {
    return <p>No category selected!</p>;
  }

  return (
    <div className="laptop-detail-container">
      {/* Category Header */}
      <div className="laptop-header">
        <img
          src={mySelctedCategory?.categoryImage}
          alt={mySelctedCategory?.categoryName}
          className="laptop-image"
        />
        <div>
          <h1>{mySelctedCategory?.categoryName}</h1>
          <p>{mySelctedCategory?.categoryDescription}</p>
        </div>
      </div>

      {/* All Products */}
      <h2>All Products</h2>
      <div className="product-grid">
        {mySelctedCategory?.products?.map((prod, index) => (
          // <Link key={prod.productId} to={`/laptop-detail/category/${mySelctedCategory?.categoryName}/${mySelctedCategory?.categoryId}/product/${prod?.productName}/${prod.productId}`}>
          <LaptopCard product={prod} key={index} mySelctedCategory={mySelctedCategory} handleProductSingle={handleProductSingle}/>
          // </Link>
        ))}
      </div>

      {/* Top Trending */}
      <h2>🔥 Top Trending</h2>
      <div className="product-row">
        {mySelctedCategory?.topTrendingProducts?.map((prod,index) => (
          <Link key={prod.productId} to={`/laptop-detail/category/${mySelctedCategory?.categoryName}/${mySelctedCategory?.categoryId}/product/${prod?.productName}/${prod.productId}`}>
            <LaptopCard product={prod} key={index} mySelctedCategory={mySelctedCategory} handleProductSingle={handleProductSingle} />
          </Link>
        ))}
      </div>

      {/* Latest */}
      <h2>🆕 Latest</h2>
      <div className="product-row">
        {mySelctedCategory.latestProducts.map((prod,index) => (
          <Link key={prod.productId} to={`/laptop-detail/category/${mySelctedCategory?.categoryName}/${mySelctedCategory?.categoryId}/product/${prod?.productName}/${prod.productId}`}>
            <LaptopCard product={prod} key={index} mySelctedCategory={mySelctedCategory}  handleProductSingle={handleProductSingle}/>
          </Link>

        ))}
      </div>

      {/* Most Selling */}
      <h2>💰 Most Selling</h2>
      <div className="product-row">
        {mySelctedCategory?.mostSellingProducts?.map((prod,index) => (
          <Link key={prod.productId} to={`/laptop-detail/category/${mySelctedCategory?.categoryName}/${mySelctedCategory?.categoryId}/product/${prod?.productName}/${prod.productId}`}>
            <LaptopCard product={prod} key={index}  mySelctedCategory={mySelctedCategory} handleProductSingle={handleProductSingle}/>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LaptopDetail;
