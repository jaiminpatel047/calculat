import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FlotingButton = () => {
  return (
    <>
       <section className="mb-3">
            <div className="card-body">
                <h5 className="card-title py-2">Save Your Quote For Later</h5>
                <button href="#" className="bn13  py-2" onClick={() => toast("Quote Saved")}>Save Quote</button>
            </div>
            <ToastContainer />
        </section>
    </>
  )
}

export default FlotingButton;