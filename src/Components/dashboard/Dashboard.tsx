import { useEffect } from 'react'
import '../dashboard/Dashboard.css'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase_setup/firebase';
import { useNavigate } from 'react-router';

const Dashboard = () => {

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])

    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
const vehiclesDetails = [
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
    {
        vehicleImage: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/PulsarNS125.ashx',
        vehicleName: 'Pulsar NS 350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu et nibh dictum, sit amet tempus ex mattis.'
    },
];
  return (
    <div className='vehical-card'>
        <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
      {vehiclesDetails.map(vehicleData => (
        <div className="card">
            <img src={vehicleData.vehicleImage} alt="Card Image" />
            <div className="card-content">
                <h2>{vehicleData.vehicleName}</h2>
                <p>{vehicleData.description}</p>
            </div>
        </div>

      ))}
    </div>
  )
}

export default Dashboard
