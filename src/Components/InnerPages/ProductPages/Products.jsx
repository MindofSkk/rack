// import { colors } from '@mui/material'
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { description_data, sorted_data } from "../../../Redux/Data/Action";

const Products = () => {
  const data = useSelector((state) => state.Data.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [state, setState] = useState(false);
  // console.log(data)
  const filterData = data.filter((item) => {
    return item.title.includes(id);
  });
  console.log("filterData:", filterData);

  // console.log("filter data",filterData,filterData.length)

  const sortedData = useSelector((state) => state.Data.sortedData);
  console.log(sortedData);
  // console.log(...filterData +"Filtered")

  //description

  const handleclick = (payload) => {
    description_data(dispatch, payload);
    navigate("/description");
  };

  //the sort

  const handlesort = (e) => {
    // sortProducts(e.target.value)
    if (e.target.value === "asc") {
      const data = filterData.sort((a, b) => {
        return Number(a.price.extracted) - Number(b.price.extracted);
      });
      sorted_data(dispatch, data);
      setState(true);
    } else if (e.target.value === "desc") {
      const data = filterData.sort((a, b) => {
        return Number(b.price.extracted) - Number(a.price.extracted);
      });
      sorted_data(dispatch, data);
      setState(true);
    }
  };

  return (
    <>
      <div className={styles.left}>
        <a> Home /</a>
        <a>Women / </a>
        <a>Dresses </a>
      </div>
      <div className={styles.topdiv}>
        <div>
          <div>
            {/* side bar div */}
            <div className={styles.sidebar}>
              <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/management/members"
                onSelect={({ itemId }) => {
                  // maybe push to the route
                }}
                items={[
                  {
                    itemId: "/dashboard",
                    // you can use your own custom Icon component as well
                    // icon is optional
                    // elemBefore: () => <Icon name="inbox" />,
                  },
                  {
                    title: <h4>Size</h4>,
                    itemId: "/1",
                    // elemBefore: () => <Icon name="users" />,
                    subNav: [
                      // {
                      //   title:<input style={{width:"20px"}} type="checkbox" />,
                      //   itemId: '/management/projects',
                      // },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              XXS
                            </lable>
                          </div>
                        ),

                        itemId: "/11",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              0,XS
                            </lable>
                          </div>
                        ),
                        itemId: "/12",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              2,XS
                            </lable>
                          </div>
                        ),
                        itemId: "/13",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              4,S
                            </lable>
                          </div>
                        ),
                        itemId: "/14",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              M
                            </lable>
                          </div>
                        ),
                        itemId: "/15",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              8,XL
                            </lable>
                          </div>
                        ),
                        itemId: "/16",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              16,XS
                            </lable>
                          </div>
                        ),
                        itemId: "/17",
                      },
                    ],
                  },
                  {
                    title: <h4>Color</h4>,
                    itemId: "/2",
                    subNav: [
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Black
                            </lable>
                          </div>
                        ),
                        itemId: "/21",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Grey
                            </lable>
                          </div>
                        ),
                        itemId: "/22",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              White
                            </lable>
                          </div>
                        ),
                        itemId: "/23",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Metalic
                            </lable>
                          </div>
                        ),
                        itemId: "/24",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Purple
                            </lable>
                          </div>
                        ),
                        itemId: "/25",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Blue
                            </lable>
                          </div>
                        ),
                        itemId: "/26",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Pink
                            </lable>
                          </div>
                        ),
                        itemId: "/27",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Red
                            </lable>
                          </div>
                        ),
                        itemId: "/28",
                      },
                    ],
                  },

                  {
                    title: <h4>Brand</h4>,
                    itemId: "/3",
                    subNav: [
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              STATE
                            </lable>
                          </div>
                        ),
                        itemId: "/31",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Philip
                            </lable>
                          </div>
                        ),
                        itemId: "/32",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Akris
                            </lable>
                          </div>
                        ),
                        itemId: "/33",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Queen
                            </lable>
                          </div>
                        ),
                        itemId: "/34",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Bardon
                            </lable>
                          </div>
                        ),
                        itemId: "/35",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Billabog
                            </lable>
                          </div>
                        ),
                        itemId: "/36",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Frame
                            </lable>
                          </div>
                        ),
                        itemId: "/37",
                      },
                    ],
                  },

                  {
                    title: <h4>Length</h4>,
                    itemId: "/4",
                    subNav: [
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Long
                            </lable>
                          </div>
                        ),
                        itemId: "/41",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Midi
                            </lable>
                          </div>
                        ),
                        itemId: "/42",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Mini
                            </lable>
                          </div>
                        ),
                        itemId: "/43",
                      },

                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Short
                            </lable>
                          </div>
                        ),
                        itemId: "/45",
                      },
                    ],
                  },
                  {
                    title: <h4>Feature</h4>,
                    itemId: "/5",
                    subNav: [
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Nursing
                            </lable>
                          </div>
                        ),
                        itemId: "/management/teams",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Hooded
                            </lable>
                          </div>
                        ),
                        itemId: "/management/teams",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              {" "}
                              Stretch
                            </lable>
                          </div>
                        ),
                        itemId: "/management/teams",
                      },
                      {
                        title: (
                          <div className={styles.flex__div}>
                            <input style={{ width: "20px" }} type="checkbox" />
                            <lable
                              style={{ marginTop: "5px", fontSize: "0.8rem" }}
                            >
                              Wrinkle Resistant
                            </lable>
                          </div>
                        ),
                        itemId: "/management/teams",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4 className={styles.you}>That Dress is So You</h4>
          </div>

          <div className={styles.cat}>
            <div>
              <img src={filterData[3].thumbnail} />
              <a>{filterData[3].cat}</a>
            </div>

            <div>
              <img src={filterData[4].thumbnail} />
              <a>{filterData[4].cat}</a>
            </div>

            <div>
              <img src={filterData[5].thumbnail} />
              <a>{filterData[5].cat}</a>
            </div>

            <div>
              <img src={filterData[6].thumbnail} />
              <a>{filterData[6].cat}</a>
            </div>

            <div>
              <img src={filterData[7].thumbnail} />
              <a>{filterData[7].cat}</a>
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.left1}>Dresses for Women</h2>

      <div className={styles.allcategory}>
        <a>All Dresses</a>
        <a>Casual</a>
        <a>Cocktail & Party</a>
        <a>Daytime & Sundresses</a>
        <a>Floral</a>
        <a>Formal</a>
        <a>Going Out</a>
        <a>Long Sleeve</a>
        <a>Maxi</a>
        <a>Midi</a>
        <a>Shirt</a>
      </div>
      <div className={styles.line}></div>
      <p className={styles.left2}>{filterData.length} items</p>

      <div>
        <select onChange={handlesort} className={styles.sort}>
          <option value="asc">Sort by price: low to high</option>
          <option value="desc">Sort by price: high to low</option>
          <option value="">Sort by featured</option>
          <option value="">Sort by newest</option>
          <option value="">Sort by percent off</option>
          <option value="">Sort by customer rating</option>
        </select>
      </div>

      <div className={styles.grid}>
        {state
          ? sortedData.map((e) => {
              return (
                <>
                  <div
                    onClick={() => {
                      handleclick(e);
                    }}
                    className={styles.productContainer}
                  >
                    <img src={e.thumbnail} alt="Not Found" />
                    <a>{e.title}</a>
                    {/* <p>{e.price.raw}</p> */}
                    <p>{e.condition}</p>
                    {/* <p className={styles.price}>{e.price.raw}</p> */}
                    {/* <p>{e.price.extracted}</p> */}
                    {/* <p>{e.price.from.raw}</p> */}
                    <p className={styles.shipping}>{e.shipping}</p>
                    {/* <p className={styles.sold}>{e.extensions}</p> */}
                    <button className={styles.Quicklook}>Quick Look</button>
                  </div>
                </>
              );
            })
          : filterData.map((e) => {
              return (
                <>
                  <div
                    onClick={() => {
                      handleclick(e);
                    }}
                    className={styles.productContainer}
                  >
                    <img src={e.thumbnail} />
                    <a>{e.title}</a>
                    {/* <p>{e.price.raw}</p> */}
                    <p>{e.condition}</p>
                    {/* <p className={styles.price}>{e.price.raw}</p> */}
                    {/* <p>{e.price.extracted}</p> */}
                    {/* <p>{e.price.from.raw}</p> */}
                    <p className={styles.shipping}>{e.shipping}</p>
                    {/* <p className={styles.sold}>{e.extensions}</p> */}
                    <button className={styles.Quicklook}>Quick Look</button>
                  </div>
                </>
              );
            })}
      </div>
    </>
  );
};

export default Products;
