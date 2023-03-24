import { Link } from 'react-router-dom'
import Header from './component/Header';
import Card from './component/Card';

const pagefour = () => {
  return (
    <>
      <Header title='Customization' />
      <main>
        <div className="container border d-flex flex-column justify-content-center align-items-center p-4" id='primeContainer'>
          <div className="p-2 text-center">
            <h1>Add the customizations you want.</h1>
          </div>
          <div className="container">
               
              <section className="p-4 fs-5">
              <div>
                <h3>Customise Spigots</h3>
                  <div className="d-flex gap-3 mb-3 justify-content-center">                    
                    <div className="form-check">
                      <span className="fw-bold">Spigot Type</span>
                      <div>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="customizationPage"
                              id="customizationPage2"
                            />
                            <label className="form-check-label" htmlFor="customizationPage2">
                            Base Plated
                            </label>
                      </div>
                    </div>
                    <div className="form-check">
                    <span className="fw-bold">Cover Ring</span>
                      <div>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="customizationPage"
                              id="customizationPage1"                             
                            />
                            <label className="form-check-label" htmlFor="customizationPage1">
                            Premium Soft Close
                            </label>
                      </div>
                    </div>               
                  </div> 
              </div>

              <div>
                  <div className='d-flex gap-3 mb-3 justify-content-center'>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="customizationTwo"
                        id="customizationTwo1"
                      />
                      <label className="form-check-label" htmlFor="customizationTwo1">
                      Core Drill (240mm)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="customizationTwo"
                        id="customizationTwo2"                    
                      />
                      <label className="form-check-label" htmlFor="customizationTwo2">
                      Core Drill (280mm)
                      </label>
                    </div>            
                  </div>
              </div>
              </section>
              <section className="p-4">
                     <div className="container p-1">
                          <div className="row">
                               <Card />
                          </div>
                     </div>
              </section>
              <section className="p-4">
                    <div className="container border" id="colorPalette">
                        <div className="row">
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="Surfmist" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="Surfmist">Surfmist*</label>
                             </div> 
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="HveningHaze" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="HveningHaze">Hvening Haze*</label>
                             </div> 
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                               <input type="checkbox" className="form-check-input" name="colorpalette" id="Domain" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="Domain">Domain*</label>
                             </div> 
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                               <input type="checkbox" className="form-check-input" name="colorpalette" id="Paperbark" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="Paperbark">Paperbark*</label>
                             </div> 
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                               <input type="checkbox" className="form-check-input" name="colorpalette" id="dune" />
                                <div className="rounDiv" htmlFor="dune"></div>
                                <label className="fs-6 fw-bold" htmlFor="dune">Dune*</label>
                             </div> 
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                               <input type="checkbox" className="form-check-input" name="colorpalette" id="Riversand" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="Riversand">Riversand*</label>
                             </div> 
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="ShaleGrey" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="ShaleGrey">Shale Grey*</label>
                             </div>    
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="bluegum" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="bluegum">Bluegum*</label>
                             </div>   
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="PaleElucalypt" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="PaleElucalypt">Pale Elucalypt*</label>
                             </div>   
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="Wilderness" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="Wilderness">Wilderness*</label>
                             </div>   
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="Wollemi" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="Wollemi">Wollemi*</label>
                             </div>   
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="WoodlandGrey" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="WoodlandGrey">WoodlandGrey*</label>
                             </div>   
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="Basalt" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="Basalt">Basalt*</label>
                             </div>   
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="Ironstone" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="Ironstone">Ironstone*</label>
                             </div> 
                             <div className="col-4 w-30 p-3 d-flex justify-content-start align-items-center gap-3 py-3">
                                <input type="checkbox" className="form-check-input" name="colorpalette" id="Monument" />
                                <div className="rounDiv"></div>
                                <label className="fs-6 fw-bold" htmlFor="Monument">Monument*</label>
                             </div>                           
                        </div>
                    </div>
              </section>

          </div>
          <div>
          <Link to="/Pagefive"><button className="button-66">
               Next
            </button></Link>
          </div>
        </div>
      </main>
    </>
  );
  };
  
  export default pagefour;