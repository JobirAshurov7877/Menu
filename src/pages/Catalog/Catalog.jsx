import "./Catalog.scss";
import bg_img from "../../assets/images/main-img-5.jpg";
import { Link } from "react-router-dom";
const Catalog = () => {
  return (
    <div className="catalog ">
      <div className="catalog-container ">
        <h3 className="title text-center mt-5">Catalog</h3>
        <div className="catalog-cards-wrapp d-flex flex-wrap  justify-content-center gap-5 pt-2 mt-5">
          <Link to={"/catalog/id"}>
            <div
              className="catalog-card p-3"
              style={{
                background: `url(${bg_img}),no-repeat `,
                backgroundSize: "cover",
              }}
            >
              <div className="category">
                <h4>Drinks</h4>
              </div>
            </div>
          </Link>
          <div
            className="catalog-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div
              className="category"
              style={{
                background: `url(${bg_img}),no-repeat `,
                backgroundSize: "cover",
              }}
            >
              <h4>Drinks</h4>
            </div>
          </div>

          <div
            className="catalog-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div className="category">
              <h4>Drinks</h4>
            </div>
          </div>

          <div
            className="catalog-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div className="category">
              <h4>Drinks</h4>
            </div>
          </div>

          <div
            className="catalog-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div className="category">
              <h4>Drinks</h4>
            </div>
          </div>
          
          <div
            className="catalog-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div className="category">
              <h4>Drinks</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Catalog;
