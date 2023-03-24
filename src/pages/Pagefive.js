import { Link } from 'react-router-dom';
import Popup from './Popup';
import { useState } from 'react';
import "./style.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from './component/Header';
import Card from './component/Card';
import MdPhone from "@mui/icons-material/Phone";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Pagefive = (props) => {
    const [value, onChange] = useState(new Date());
    const [btnPopUp, setBtnPopUp] = useState(false);

    return (<>
        <Header title='Get Your Quote' />
        <main>
        <div className="container border d-flex flex-column justify-content-center align-items-center p-4" id='primeContainer'>
          <div className="p-2 text-center">
            <h1>Your Quote</h1>
          </div>
          <div>


            <section>
                    <div className='fs-5 text-center'>
                         <p>This estimated quote is based on the information you have provided, please book an inspection or call with a sales representative to get a clearer and more precise quote</p>
                    </div>
                    <div className="text-center alert alert-primary">
                        <h1>Estimated Cost: $2145</h1>
                    </div>
                    <div className="py-3 p-2">
                        <span className="fs-4">Cost Breakdown</span>
                    </div>

                    <div className="d-flex gap-3 m-1">
                        <div className="p-2 px-4 flex-fill rounded" id="customisation">
                            <h4>Customisation</h4>
                            <div className="flex-grow-1">
                                <span className="fs-5">Glass</span>
                            </div>
                        </div>
                        <div className="p-2 px-4 flex-grow-4 rounded" id="customisation">
                            <h4>Price</h4>
                            <div>
                                <span className="fs-5">$1600</span>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-3 py-4">
                          <div className="flex-fill p-3">
                                <div>
                                  <label htmlFor="">Run A</label>
                                  <input type="text" className="form-control"  placeholder='4000mm' />
                                </div>
                                <div>
                                  <label htmlFor="">Run B</label>
                                  <input type="text" className="form-control" placeholder='4000mm'/>
                                </div>
                          </div>
                          <div className="flex-fill p-3">
                              <div>
                                <label htmlFor="">Run C</label>
                                <input type="text" className="form-control" placeholder='4000mm'/>
                              </div>
                              <div>
                                <label htmlFor="">Run D</label>
                                <input type="text" className="form-control" placeholder='4000mm'/>
                              </div>
                          </div>
                    </div>

                    <div className="d-flex gap-3 m-1">
                        <div className="p-2 px-4 flex-fill rounded" id="customisation">
                            <div className="flex-grow-1">
                                <span className="fs-5">Gate Options</span>
                            </div>
                        </div>
                        <div className="p-2 px-4 flex-grow-4 rounded" id="customisation">
                            <div>
                                <span className="fs-5">$155</span>
                            </div>
                        </div>
                    </div>

              <div>
                  <h3 className="text-center mt-3">Customisations</h3>
                  <div className="py-3 my-3 d-flex justify-content-evenly gap-3">

                    <div className="form-check">
                      <input
                        className="form-check-input fs-5"
                        type="radio"
                        name="Customisations"
                        id="Customisations1"
                      />
                      <label className="form-check-label fs-5" htmlFor="Customisations1">
                      Glass
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input fs-5"
                        type="radio"
                        name="Customisations"
                        id="Customisations2"
                      />
                      <label className="form-check-label fs-5" htmlFor="Customisations2">
                      Attached to Wall
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input fs-5"
                        type="radio"
                        name="Customisations"
                        id="Customisations3"
                      />
                      <label className="form-check-label fs-5" htmlFor="Customisations3">
                      Standard
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input fs-5"
                        type="radio"
                        name="Customisations"
                        id="Customisations4"
                      />
                      <label className="form-check-label fs-5" htmlFor="Customisations4">
                      Attached to Fence
                      </label>
                    </div>

                  </div>
              </div>

                    <div className="d-flex gap-3 m-1">
                        <div className="p-2 px-4 flex-fill rounded" id="customisation">
                            <div className="flex-grow-1">
                                <span className="fs-5">Retaining Wall</span>
                            </div>
                        </div>
                        <div className="p-2 px-4 flex-grow-4 rounded" id="customisation">
                            <div>
                                <span className="fs-5">$45</span>
                            </div>
                        </div>
                    </div>

                    <div className="py-3 my-3 d-flex justify-content-evenly gap-3">

                    <div className="form-check">
                      <input
                        className="form-check-input fs-5"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label fs-5" htmlFor="flexRadioDefault1">
                      Glass
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label fs-5 px-2" htmlFor="flexRadioDefault2">
                      Attached to Wall
                      </label>
                      <input
                        className="fs-5 form-control"                        
                        type="text"
                        placeholder="4000mm"                        
                      />
                    </div>                    

                  </div>

                    <div className="d-flex gap-3 m-1">
                        <div className="p-2 px-4 flex-fill rounded" id="customisation">
                            <div className="flex-grow-1">
                                <span className="fs-5">Springgot Options</span>
                            </div>
                        </div>
                        <div className="p-2 px-4 flex-grow-4 rounded" id="customisation">
                            <div>
                                <span className="fs-5">$45</span>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 my-3 d-flex gap-3 ">

                    <h3 className="px-4">Dimensions</h3>
                    <div className="form-check">
                      <input
                        className="form-check-input fs-5"
                        type="radio"
                        name="Dimensions"
                        id="Dimensions1"
                      />
                      <label className="form-check-label fs-5" htmlFor="Dimensions1">
                      Bace Plated
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input fs-5"
                        type="radio"
                        name="Dimensions"
                        id="Dimensions2"                        
                      />
                      <label className="form-check-label fs-5" htmlFor="Dimensions2">
                      Cover Ring
                      </label>
                    </div>                    

                  </div>
                  
                  <section>
                     <div className="container p-1">
                          <div className="row">
                               <Card />
                          </div>
                     </div>
              </section>

                    <div className="d-flex gap-3 m-1">
                        <div className="p-2 px-4 flex-fill rounded" id="customisation">
                            <div className="flex-grow-1">
                                <span className="fs-5">Pool Location</span>
                            </div>
                        </div>
                        <div className="p-2 px-4 flex-grow-4 rounded" id="customisation">
                            <div>
                                <span className="fs-5">$50</span>
                            </div>
                        </div>
                    </div>

                  <div className="py-3 my-3 d-flex justify-content-center gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input fs-5"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label className="form-check-label fs-5" htmlFor="flexRadioDefault2">
                       No optional extra
                      </label>
                    </div>
                  </div>
                    <div className="d-flex gap-3 m-1">
                        <div className="p-2 px-4 flex-fill rounded" id="customisation">
                            <div className="flex-grow-1">
                                <span className="fs-5">Service</span>
                            </div>
                        </div>
                        <div className="p-2 px-4 flex-grow-4 rounded" id="customisation">
                            <div>
                                <span className="fs-5">$250</span>
                            </div>
                        </div>
                    </div>

            </section>


          </div>
          <div className="d-flex gap-4 py-3">
          <Link to="/Pagesix"><button className="button-66" id="red">
          <MdPhone />  Book A Call With a Sales Rep
            </button></Link>
            <button className="button-66" onClick={() => setBtnPopUp(true)} id="green">
             Book An Inspection
            </button>          
          </div>
        </div>

        <Popup trigger={btnPopUp} setTrigger={setBtnPopUp} id="popupDiv">
            <Calendar onChange={onChange} value={value} />
        </Popup>
        <ToastContainer />

      </main> 
      </>
      );
  };
  
  export default Pagefive;