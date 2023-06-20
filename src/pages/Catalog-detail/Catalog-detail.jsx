import "./Catalog-detail.scss";
import bg_img from "../../assets/images/main-img-5.jpg";
import { Calculator } from "../../components";
const CatalogDetail = () => {
  return (
    <div className="catalog-detail d-flex">
      <div className="catalog-detail-container ">
        <h3 className=" title text-center mt-4">Product</h3>

        <div className="catalog-detail-cards-wrapp  d-flex flex-wrap  justify-content-center gap-5 pt-2 mt-5">
          <div
            className="catalog-detail-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div className="category">
              <h4>Drinks category</h4>
            </div>
          </div>
          <div
            className="catalog-detail-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div className="category">
              <h4>Drinks category</h4>
            </div>
          </div>
          <div
            className="catalog-detail-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div className="category">
              <h4>Drinks category</h4>
            </div>
          </div>
          <div
            className="catalog-detail-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div className="category">
              <h4>Drinks category</h4>
            </div>
          </div>
          <div
            className="catalog-detail-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div className="category">
              <h4>Drinks category</h4>
            </div>
          </div>
          <div
            className="catalog-detail-card p-3"
            style={{
              background: `url(${bg_img}),no-repeat `,
              backgroundSize: "cover",
            }}
          >
            <div className="category">
              <h4>Drinks category</h4>
            </div>
          </div>
        </div>
      </div>
      <Calculator />
      <div className="overlay"></div>
    </div>
  );
};

export default CatalogDetail;
