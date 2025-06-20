import "../Style/AddCarDetail.css";
import { CarContextDetails } from "../../Context/CarContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCar } from "../../Utils/ApiUtils";
import AdminpageNav from "./AdminpageNav";
import Home from "../Home";

export default function EditCarDetails() {
  const { setCar, edit, setEdit, car } = useContext(CarContextDetails);
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  function SubmitEditForm(e) {
    e.preventDefault();
    const EditformData = new FormData(e.target);

    fetch(`https://car-rental-app-server.onrender.com/cars/${edit._id}`, {
      method: "PUT",
      headers: {
        authorization: JSON.parse(localStorage.getItem("token-admin")),
      },
      body: EditformData,
    })
      .then((res) => res.json())
      .then((data) =>
        setCar((prev) =>
          prev.map((d) => {
            if (d._id === data._id) return data;
            return d;
          })
        )
      );

    navigate("/admin-page");
  }

  const TokenAdmin = JSON.parse(localStorage.getItem("token-admin"));
  const AdminId = JSON.parse(localStorage.getItem("Admin-Id"));

  return (
    <>
      {TokenAdmin ? (
        <>
          <AdminpageNav />
          <div id="form-main-container-and-main-block">
            <h2 id="name-of-car-detail-edit">
              <i>Modifyyy</i>
            </h2>
            <form id="form-add-car-details" onSubmit={SubmitEditForm}>
              <div id="main-container-of-form">
                <div id="left-side-form">
                  <div className="input-gap-bottom">
                    <label>Car Name</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={(e) =>
                        setEdit({ ...edit, name: e.target.value })
                      }
                      value={edit.name}
                    />
                  </div>
                  <div className="data-form-flex input-gap-bottom">
                    <div>
                      <label>Typee</label>
                      <br />
                      <select
                        className="select-things"
                        name="type"
                        onChange={(e) =>
                          setEdit({ ...edit, type: e.target.value })
                        }
                        value={edit.type}
                      >
                        <option>select</option>
                        <option>UV</option>
                        <option>XUV</option>
                        <option>SUV</option>
                        <option>Sedan</option>
                        <option>Hatch-Back</option>
                      </select>
                    </div>

                    <div>
                      <label>Modelll</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Model"
                        className="select-things"
                        name="model"
                        onChange={(e) =>
                          setEdit({ ...edit, model: e.target.value })
                        }
                        value={edit.model}
                      />
                    </div>
                  </div>
                  <div className="data-form-flex input-gap-bottom">
                    <div>
                      <label>Milage (10000)</label>
                      <br />
                      <select
                        className="select-things"
                        name="milage"
                        onChange={(e) =>
                          setEdit({ ...edit, milage: e.target.value })
                        }
                        value={edit.milage}
                      >
                        <option>Select</option>
                        <option>20Km/L</option>
                        <option>14Km/L</option>
                        <option>15Km/L</option>
                        <option>18Km/L</option>
                        <option>10Km/L</option>
                      </select>
                    </div>

                    <div>
                      <label>Per KM</label>
                      <br />
                      <input
                        type="number"
                        placeholder="000000"
                        id="per-km"
                        name="perKm"
                        onChange={(e) =>
                          setEdit({ ...edit, perKm: e.target.value })
                        }
                        value={edit.perKm}
                      />
                    </div>
                  </div>

                  <div className="data-form-flex input-gap-bottom">
                    <div>
                      <label>Dispo Men</label>
                      <br />
                      <input
                        type="date"
                        className="date-input"
                        name="avalableFrom"
                        onChange={(e) =>
                          setEdit({ ...edit, avalableFrom: e.target.value })
                        }
                        value={edit.avalableFrom}
                      />
                    </div>

                    <div>
                      <label>Hatttta</label>
                      <br />
                      <input
                        type="date"
                        className="date-input"
                        name="availableTill"
                        onChange={(e) =>
                          setEdit({ ...edit, availableTill: e.target.value })
                        }
                        value={edit.availableTill}
                      />
                    </div>
                  </div>

                  <div className="input-gap-bottom">
                    <label>Description</label>
                    <br />
                    <textarea
                      id="text-area-description"
                      placeholder="Description"
                      name="description"
                      onChange={(e) =>
                        setEdit({ ...edit, description: e.target.value })
                      }
                      value={edit.description}
                    ></textarea>
                  </div>
                </div>

                <div id="right-side-form">
                  <div id="image-add-in-add-user-form">
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => {
                        setFile(URL.createObjectURL(e.target.files[0]));
                        setEdit({ ...edit, image: e.target.files[0] });
                      }}
                    />
                  </div>

                  <div id="imgs-add-car-container">
                    <div className="img-sort-box">
                      <img
                        src={
                          file
                            ? file
                            : `https://car-rental-app-server.onrender.com/cars/${edit.image}`
                        }
                        id="preview-img-of-the-file"
                        alt="Preview"
                      />
                    </div>
                  </div>

                  <div>
                    <label>Details Lkarhba</label>
                    <br />
                    <textarea
                      className="car-detail-description"
                      name="carDetails"
                      placeholder="Add Car Details.."
                      onChange={(e) =>
                        setEdit({ ...edit, carDetails: e.target.value })
                      }
                      value={edit.carDetails}
                    ></textarea>
                  </div>
                  <div>
                    <label>Detailsss</label>
                    <br />
                    <textarea
                      className="car-detail-description"
                      name="Details"
                      placeholder="Add Details"
                      onChange={(e) =>
                         setEdit({ ...edit, Details: e.target.value })
                      }
                      value={edit.Details}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div
                className="input-gap-bottom"
                id="btn-cancle-add-detail-container"
              >
                <button
                  id="btn-cancle-add-detail"
                  onClick={() => navigate("/admin-page")}
                  type="button"
                >
                  Sayeb Alikk
                </button>
                <button
                  className="btn-Add-add-detail-ans-save"
                  id="delete-btn-for-edit-page"
                  type="button"
                  onClick={() => {
                    deleteCar(edit._id);
                  }}
                >
                  Fassa
                </button>
                <button
                  className="btn-Add-add-detail-ans-save save-btn-details"
                  type="submit"
                >
                  Sajjel
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <Home />
      )}
    </>
  );
}
