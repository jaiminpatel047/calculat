import { Link } from 'react-router-dom';
import Header from './component/Header';

const Pageone = (props) => {
  return (
    <div>
      <Header title='Home'/>
      <main>
        <div className="container border d-flex flex-column justify-content-evenly align-items-center p-4" id="primeContainer">
          <div className="p-2 text-center">
            <h1>Welcome to our Calculator</h1>
          </div>
          <div>
              {/* SPACE FOR VIDEO */}
          </div>
          <div>

          <Link to="/Pagetwo"><button className="button-66" component={Link} to="/Pagetwo">
            Start Your Quote     
            </button></Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pageone;
