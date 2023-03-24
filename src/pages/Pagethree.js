import { Link } from 'react-router-dom'
import Header from './component/Header';
import Pool from './component/Pool';
import FlotingButton from './component/FlotingButton';
import AddRemoveInput from './component/AddRemoveInput';



const pagethree = () => {
  return (
    <>
      <Header title='Add Your Measurments' />
      <main>
        <FlotingButton />
        <div className="container border rounded d-flex flex-column justify-content-center align-items-center p-4" id='primeContainer'>
          <div className="p-2 text-center">
            <h1>Lets first see what size pool you have!</h1>
          </div>
          <section>
            <div className='w-50 p-3 m-auto fw-bolder'>
                <AddRemoveInput />
                <div className="d-flex justify-content-center align-items-center gap-2 py-3">
                 <div className='flex-fill'>
                      <div >
                        <label htmlFor="">Run A</label>
                        <input type="text" className="form-control"  value="4000mm" />
                      </div>
                      <div>
                        <label htmlFor="">Run B</label>
                        <input type="text" className="form-control" value="4000mm"/>
                      </div>
                 </div>
                 <div className='flex-fill'>
                      <div>
                        <label htmlFor="">Run C</label>
                        <input type="text" className="form-control" value="4000mm"/>
                      </div>
                      <div>
                        <label htmlFor="">Run D</label>
                        <input type="text" className="form-control" value="4000mm"/>
                      </div>
                 </div>
                </div>
                <AddRemoveInput />
            </div>

           <section className="d-flex justify-content-between align-items-start gap-4">

           <div className="py-3 my-3">
                <h6>Hinga Style</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="HingaStyle"
                    id="HingaStyle1"
                  />
                  <label className="form-check-label" htmlFor="HingaStyle1">
                   Standard
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="HingaStyle"
                    id="HingaStyle2"                  
                  />
                  <label className="form-check-label" htmlFor="HingaStyle2">
                  Premium Soft Close
                  </label>
                </div>               
              </div>
              <div className="py-3 my-3">
                <h6>Gate Hinge from:</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="GateHingefrom"
                    id="GateHingefrom1"
                  />
                  <label className="form-check-label" htmlFor="GateHingefrom1">
                   Standard
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="GateHingefrom"
                    id="GateHingefrom2"            
                  />
                  <label className="form-check-label" htmlFor="GateHingefrom2">
                  Attached to Wall
                  </label>
                </div>               
              </div> 
              <div className="py-3 my-3">
                <h6>Gate Hinge to:</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="GateHingeto"
                    id="GateHingeto1"
                  />
                  <label className="form-check-label" htmlFor="GateHingeto1">
                  Attached to Fence
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="GateHingeto"
                    id="GateHingeto2"
                  />
                  <label className="form-check-label" htmlFor="GateHingeto2">
                  Attached to Wall
                  </label>
                </div>            
              </div>
              <div className="py-3 my-3">
                <h6>Gate Type</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="GateType"
                    id="GateType1"
                  />
                  <label className="form-check-label" htmlFor="GateType1">
                  Aluminium
                  </label>
                </div>                
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="GateType"
                    id="GateType2"
                  />
                  <label className="form-check-label" htmlFor="GateType2">
                  Glass
                  </label>
                </div>
            </div>

           </section>
           <Pool />

           <section className="d-flex justify-content-evenly align-items-start gap-4 border mt-4" id="bgColor">

            <div className="py-3 my-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="LefthandPanel"
                  id="LefthandPanel"
                />
                <label className="form-check-label" htmlFor="LefthandPanel">
                Lefthand Panel
                </label>
              </div>
              <div>
              <label className="fs-6 fw-bold">
              Height
                </label>
                <input 
                  className="form-control"
                  type="text"
                  placeholder="4000mm"
                />                
              </div>                
            </div>

            <div className="py-3 my-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="RighthandPanel"
                  id="RighthandPanel"
                />
                <label className="form-check-label" htmlFor="RighthandPanel">
                Righthand Panel
                </label>
              </div>
              <div>
              <label className="fs-6 fw-bold">
              Height
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="4000mm"
                />                
              </div>               
            </div> 

</section>

          </section>
          <div>
          <Link to="/Pagefour"><button className="button-66 mt-3">
              Next
            </button></Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default pagethree;
