import Calendar from 'react-calendar';
import Header from './component/Header';
import "./style.css";
import toast, { Toaster } from 'react-hot-toast';
import 'react-calendar/dist/Calendar.css';

const pagesix = () => {

     return (
      <>
        <Header title='Calander' />
        <main>
        <div className="container border d-flex flex-column justify-content-center align-items-center p-4" id='primeContainer'>
          <div className="p-2 text-center">
            <h1>Book a call with one of our consultants</h1>
          </div>
          <div className="container">
            <Calendar  />  
          </div>
          <div>

            <button className="button-66" onClick={() => toast('Booked Your consultant')}>Book An Inspection</button>

          </div>
        </div>
        <Toaster toastOptions={{style: {fontSize: '1.3rem', color: '#111827',  fontWeight: '600'}}}/>

      </main>
      </>
    );
  };
  
  export default pagesix;