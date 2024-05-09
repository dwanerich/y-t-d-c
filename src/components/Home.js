// import ModalImage from 'react-modal-image'
import { Header } from './Header';
import Service from './Service/Service';
import { serviceData } from '../helpers';
// import ReactPlayer from "react-player"

const Home = () => {
  return (
    <center style={{backgroundColor: 'black'}}>
      <Header />
      <div>

        <br />
        <br />
        <br />
        <br />

        <div>
          {/* <img
            src={require('../img/full_service.gif')}
            alt={'services'}
            style={{ width: '70%', borderRadius: '40px' }}
          /> */}
        </div>
        {' '}
        <br />

        <img
            src={require('../img/full_service.gif')}
            alt={'services'}
            style={{ width: '70%', borderRadius: '40px' }}
          />
        {serviceData.map((service, id) => (
          <Service key={id} serviceData={service} />
        ))}
      </div>
    </center>
  );
};

export default Home;
