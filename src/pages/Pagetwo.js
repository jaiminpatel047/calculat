import { Link } from "react-router-dom";
import Header from "./component/Header";

const Pagetwo = () => {

  return (
    <>
      <Header title='Choose Your Design' />
      <main>
        <div className="container border d-flex flex-column justify-content-center align-items-center p-4" id="primeContainer">
          <div className="p-2 text-center">
            <h1>DIY POOL FENCE CALCULATOR</h1>
          </div>
          <div className="row col-6" id="primeContainer">

            <div>
              <div className="">
              <figure className="figure">
              <img className="img-fluid" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="img is here" />
</figure>
              </div>
              <div className="py-3 my-3 d-flex justify-content-center gap-3">

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ChooseYourDesign"
                    id="ChooseYourDesign1"
                  />
                  <label className="form-check-label" htmlFor="ChooseYourDesign">
                    Frame-less Fencing
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ChooseYourDesign"
                    id="ChooseYourDesign2"                    
                  />
                  <label className="form-check-label" htmlFor="ChooseYourDesign">
                  Semi -frame-less Fencing
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ChooseYourDesign"
                    id="ChooseYourDesign3"
                  />
                  <label className="form-check-label" htmlFor="ChooseYourDesign">
                  Aluminium Fencing
                  </label>
                </div>

              </div>
            </div>

            <div className="col">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="validationDefault01" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationDefault02" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"                    
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationDefaultUsername" className="form-label">
                    Number
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefaultUsername"
                      aria-describedby="inputGroupPrepend2"
                      placeholder="Enter Your Number Here"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationDefault03" className="form-label">
                    Best time to Call
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationDefault05" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault05"
                    required
                  />
                </div>
                <div className="col-12 d-flex justify-content-center">
                <Link to="/Pagethree"><button className="button-66 mt-3" type="submit">
                    Continue Getting A Quote                    
                  </button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pagetwo;
