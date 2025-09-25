import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../utils/Data.js";

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="slider-arrow next-arrow"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                position: "absolute",
                right: "-25px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 2,
                boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)",
                transition: "all 0.3s ease",
                fontSize: "20px",
                fontWeight: "bold",
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-50%) scale(1.1)";
                e.target.style.boxShadow = "0 6px 25px rgba(102, 126, 234, 0.6)";
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = "translateY(-50%) scale(1)";
                e.target.style.boxShadow = "0 4px 20px rgba(102, 126, 234, 0.4)";
            }}
        >
            ➡
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="slider-arrow prev-arrow"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                position: "absolute",
                left: "-25px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 2,
                boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)",
                transition: "all 0.3s ease",
                fontSize: "20px",
                fontWeight: "bold",
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-50%) scale(1.1)";
                e.target.style.boxShadow = "0 6px 25px rgba(102, 126, 234, 0.6)";
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = "translateY(-50%) scale(1)";
                e.target.style.boxShadow = "0 4px 20px rgba(102, 126, 234, 0.4)";
            }}
        >
            ⬅
        </div>
    );
}

function InfiniteSlider() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ],
    };

    const allProducts = data?.flatMap((category) => category.products);
    console.log(allProducts[0].productImage)

    return (
        <div style={{
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            padding: "60px 0",
            margin: "40px 0",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Background decoration */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(135deg, #237B87, #42C2FF)",
            }}></div>

            <h1 style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "700",
                // background: "linear-gradient(135deg, #237B87, #42C2FF);",
                backgroundClip: "text",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                marginBottom: "40px",
                textShadow: "0 2px 10px rgba(102, 126, 234, 0.2)",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}>
                Top Trending Products
            </h1>

            <div style={{
                width: "85%",
                margin: "auto",
                position: "relative",
                maxWidth: "1400px"
            }}>
                <Slider {...settings}>
                    {allProducts?.map((product, index) => (
                        <div key={index} style={{ padding: "15px" }}>
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #237B87, #42C2FF)",
                                    borderRadius: "20px",
                                    boxShadow: `
                    0 8px 32px rgba(0,0,0,0.1),
                    inset 0 1px 0 rgba(255,255,255,0.8)
                  `,
                                    padding: "25px 20px",
                                    textAlign: "center",
                                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                                className="slide-box"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                                    e.currentTarget.style.boxShadow = `
                    0 15px 40px rgba(102, 126, 234, 0.25),
                    inset 0 1px 0 rgba(255,255,255,0.8)
                  `;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                                    e.currentTarget.style.boxShadow = `
                    0 8px 32px rgba(0,0,0,0.1),
                    inset 0 1px 0 rgba(255,255,255,0.8)
                  `;
                                }}
                            >
                                {/* Hover effect overlay */}
                                <div style={{
                                    position: "absolute",
                                    top: 0,
                                    left: "-100%",
                                    width: "100%",
                                    height: "100%",
                                    background: "linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent)",
                                    transition: "left 0.6s ease",
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.left = "100%";
                                    }}
                                ></div>

                                <div style={{
                                    width: "80px",
                                    height: "80px",
                                    background: "linear-gradient(135deg, #237B87, #42C2FF)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 20px",
                                    padding: "15px"
                                }}>
                                    {/* <p>{product?.productImage}</p> */}
                                    <img
                                        src={product?.productImage}
                                        alt={product.productName}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>

                                <p style={{
                                    marginTop: "15px",
                                    fontWeight: "600",
                                    fontSize: "1.1rem",
                                    color: "#2d3748",
                                    lineHeight: "1.4",
                                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                }}>
                                    {product.productName}
                                </p>

                                {/* Rating stars */}
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "10px",
                                    color: "#fbbf24"
                                }}>
                                    {"★".repeat(5)}
                                </div>

                                {/* Price tag */}
                                <div style={{
                                    background: "linear-gradient(135deg, #48bb78, #38a169)",
                                    color: "white",
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    marginTop: "15px",
                                    display: "inline-block",
                                    boxShadow: "0 4px 15px rgba(72, 187, 120, 0.3)"
                                }}>
                                    ${(Math.random() * 100 + 20).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div >

            {/* Decorative elements */}
            < div style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "10px"
            }
            }>
                {
                    [1, 2, 3, 4, 5].map((dot) => (
                        <div
                            key={dot}
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #237B87, #42C2FF)",
                                opacity: "0.6",
                                animation: `pulse 2s infinite ${dot * 0.2}s`
                            }}
                        ></div>
                    ))
                }
            </div >

            <style>
                {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.3); opacity: 1; }
          }
          
          .slide-box:hover {
            transform: translateY(-10px) scale(1.02);
          }
          
          @media (max-width: 768px) {
            .slider-arrow {
              display: none !important;
            }
          }
        `}
            </style>
        </div >
    );
}

export default InfiniteSlider;