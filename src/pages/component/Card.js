import React from "react";
import "../style.css";

const Data = [
  {
    id: 1,
    heading: "Customise Spigots",
    firstTitle: "Spigot Profile",
    firstcheckboxItemOne: "Round",
    firstcheckboxItemTwo: "Square",
    firstcheckboxItemThree: "Diamond",
    scoundTitle: "Spigot Finish",
    scoundcheckboxItemOne: "Round",
    scoundcheckboxItemTwo: "Square",
    scoundcheckboxItemThree: "Diamond",
  },
  {
    id: 2,
    heading: "Customise Latches",
    firstTitle: "Latch Type",
    firstcheckboxItemOne: "Standard",
    firstcheckboxItemTwo: "D&D Lockable",
    firstcheckboxItemThree: "Premium Stanless",
    scoundTitle: "Latch Finish",
    scoundcheckboxItemOne: "Polished",
    scoundcheckboxItemTwo: "Satin",
    scoundcheckboxItemThree: "Matt Black",
  },
];

const Card = () => {
  return (
    <>
      {Data.map((item) => (
        <div key={item.id} className="col-6 mb-2">
          <div className="border rounded mb-1">
            <section className="card-div-header">
              <h4>{item.heading}</h4>
            </section>
            <section className="d-flex justify-content-evenly p-3">
              <div className="card w-25">
                <img
                  className="card-img-top"
                  src="https://rukminim1.flixcart.com/image/416/416/kuk4u4w0/shelf-bracket/m/x/x/stainless-steel-spigot-8-for-10-mm-glass-max-deals-original-imag7nfgtkespeay.jpeg?q=70"
                  alt="img"
                />
              </div>
              <div className="card-div-list w-75 d-flex justify-content-between">
                <ul>
                  <h6>{item.firstTitle}</h6>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="SpigotProfile"
                      id="SpigotProfile1"
                    />
                    <label htmlFor="SpigotProfile1">
                      {item.firstcheckboxItemOne}
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="SpigotProfile"
                      id="SpigotProfile2"
                    />
                    <label htmlFor="SpigotProfile2">
                      {item.firstcheckboxItemTwo}
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="SpigotProfile"
                      id="SpigotProfile3"
                    />
                    <label htmlFor="SpigotProfile3">
                      {item.firstcheckboxItemThree}
                    </label>
                  </li>
                </ul>
                <ul>
                  <h6>{item.scoundTitle}</h6>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="SpigotFinish"
                      id="SpigotFinish1"
                    />
                    <label htmlFor="SpigotFinish1">
                      {item.scoundcheckboxItemOne}
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="SpigotFinish"
                      id="SpigotFinish2"
                    />
                    <label htmlFor="SpigotFinish2">
                      {item.scoundcheckboxItemTwo}
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="SpigotFinish"
                      id="SpigotFinish3"
                    />
                    <label htmlFor="SpigotFinish3">
                      {item.scoundcheckboxItemThree}
                    </label>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      ))}
      
      <div className="col-6 mb-2">
        <div className="border rounded mb-1">
          <section className="card-div-header">
            <h5>Customise Hinges</h5>
          </section>
          <section className="d-flex justify-content-evenly p-3">
            <div className="card w-25">
              <img
                className="card-img-top"
                src="https://rukminim1.flixcart.com/image/416/416/kuk4u4w0/shelf-bracket/m/x/x/stainless-steel-spigot-8-for-10-mm-glass-max-deals-original-imag7nfgtkespeay.jpeg?q=70"
                alt=""
                srcset=""
              />
            </div>
            <div className="card-div-list  w-75 d-flex justify-content-between">
              <ul>
                <h6>Hinge Finish</h6>
                <li>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="HingeFinish"
                    id="HingeFinish1"
                  />
                  <label htmlFor="HingeFinish1">Polished</label>
                </li>
                <li>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="HingeFinish"
                    id="HingeFinish2"
                  />
                  <label htmlFor="HingeFinish1">Satin</label>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="col-6 mb-2">
        <div className="border rounded mb-1">
          <section className="card-div-header">
            <h5>Select Spigot Base Plate Fixings</h5>
          </section>
          <section className="d-flex justify-content-evenly p-3">
            <div className="card w-25">
              <img
                className="card-img-top"
                src="https://rukminim1.flixcart.com/image/416/416/kuk4u4w0/shelf-bracket/m/x/x/stainless-steel-spigot-8-for-10-mm-glass-max-deals-original-imag7nfgtkespeay.jpeg?q=70"
                alt=""
                srcset=""
              />
            </div>
            <div className="card-div-list w-75 d-flex justify-content-between">
              <ul className="wd">
                <h6>Fixing Type</h6>
                <li>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="FixingType"
                    id="FixingType1"
                  />
                  <span htmlFor="FixingType1">S/S Coach Screws</span>
                </li>
                <li>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="FixingType"
                    id="FixingType2"
                  />
                  <span htmlFor="FixingType2">S/S DYNA Bolts</span>
                </li>
              </ul>
              <ul className="wd">
                <h6>Trade Tip</h6>
                <li>
                  <p className="m-0">
                    Stainless Steel Coach Screws Recommended
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="col-6 mb-2">
        <div className="border rounded mb-1">
          <section className="card-div-header">
            <h5>Optional Extras</h5>
          </section>
          <section className="d-flex justify-content-evenly p-3">
            <div className="card w-25">
              <img
                className="card-img-top"
                src="https://rukminim1.flixcart.com/image/416/416/kuk4u4w0/shelf-bracket/m/x/x/stainless-steel-spigot-8-for-10-mm-glass-max-deals-original-imag7nfgtkespeay.jpeg?q=70"
                alt=""
                srcset=""
              />
            </div>
            <div className="card-div-list w-75">
              <ul>
                <h6>You might find these helpful</h6>
                <li>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="OptionalExtras"
                    id="OptionalExtras1"
                  />
                  <span htmlFor="OptionalExtras1">
                    EnduroShield Glass Cleaner - 500ml
                  </span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="OptionalExtras"
                    id="OptionalExtras2"
                  />
                  <span htmlFor="OptionalExtras2">
                    EnduroShield Stalness Steel Treatment - 60ml
                  </span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="OptionalExtras"
                    id="OptionalExtras3"
                  />
                  <span htmlFor="OptionalExtras3">Resuscitaion Sign</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Card;
