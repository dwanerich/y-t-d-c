// import ModalImage from 'react-modal-image'
import { Header } from './Header';
import Service from './Service/Service';
import { serviceData } from '../helpers';
import YouTube from 'react-youtube';

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

         
        </div>
        {' '}
        <br />



    

{<YouTube videoId="sgIgeB0_ht4"
alt={'services'}
style={{ width: '70%', borderRadius: '40px' }}
        />}


        {serviceData.map((service, id) => (
          <Service key={id} serviceData={service} />
        ))}
      </div>
    </center>
  );
};

export default Home;
