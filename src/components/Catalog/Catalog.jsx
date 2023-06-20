import '../../pages/Account/Account.scss'
import '../../pages/Catalog/Catalog.scss'
import { MdDelete, MdModeEdit } from "react-icons/md";
import bg_img from "../../assets/images/main-img-5.jpg";

const Catalog = () => {
  return (
     <div className="catalog-cards-wrapp d-flex flex-wrap  justify-content-start gap-5 pt-2 mt-3">
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
                  <div className="actions-box">
                    <button type="button">
                      <MdModeEdit />
                    </button>
                    <button type="button">
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
  )
}

export default Catalog