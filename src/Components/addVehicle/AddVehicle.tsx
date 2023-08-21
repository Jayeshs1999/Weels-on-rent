import { useEffect, useState } from 'react'
import { TextFieldFunction } from '../../stories/molecules/textfield/Textfield'
import './AddVehicle.css';
import { Typography } from '@mui/material';
import { ZButton } from '../../stories/molecules/button/Button';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../firebase_setup/firebase';

const AddVehicle = () => {
    const ref = collection(firestore, "vehicles_details");
    const [vehicleName, setVehicleName] = useState('')
    const [vehicleDesc, setvehicleDesc] = useState('')
    const [vehicleURL, setvehicleURL] = useState('')
    const [isButtonDisabled,setIsButtonDisabled] = useState(true);
    useEffect(()=>{
        if(vehicleName !='' && vehicleDesc !='' &&vehicleURL !=''){
            setIsButtonDisabled(false)
        }else {
            setIsButtonDisabled(true);
        }
    },[vehicleName,vehicleDesc,vehicleURL])

    const submitDetails = () => {
        try {
            let data = {
                vehicleName: vehicleName,
                vehicleDesc: vehicleDesc,
                vehicleURL: vehicleURL
            }
            addDoc(ref, data)
            alert("successfully added")
            setVehicleName('')
            setvehicleDesc('')
            setvehicleURL('')
        }catch(err){
            alert('something get wrong');
        }
    }
  return (
    <div className="background-image">
            <div className='container'>
                <Typography variant='h3'>Add Vehicle Data</Typography>
                <TextFieldFunction isRequired={true} textLabel='Vehicle name' value={vehicleName} textVariant='outlined' width='65%' onChange={(event)=>setVehicleName(event.target.value)} />
                <TextFieldFunction isRequired={true} textLabel='Vehicle description' value={vehicleDesc} textVariant='outlined' width='65%' multiline minRows={5} maxRows={5} onChange={(event)=>setvehicleDesc(event.target.value)} />
                <TextFieldFunction isRequired={true} textLabel='Vehicle Image URL'  value={vehicleURL} textVariant='outlined'  width='65%' onChange={(event)=>setvehicleURL(event.target.value)}/>
                <ZButton  textLabel='Submit' isDisabled={isButtonDisabled}  variant='contained' width='65%' onClick={submitDetails} />
            </div>
    </div>
  )
}

export default AddVehicle
