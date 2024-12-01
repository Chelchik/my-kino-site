import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import backround from '../img/0d99cfda-6831-4f9c-a3c6-38cafd91c657.png'
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectName, selectPhone } from '../features/formSlice';
import { selectIsRegistered, selectUserInfo } from '../features/contactSubmitSlice';

function Contact() {
  const dispatch = useDispatch();

  useEffect(() => { 
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    const isRegistered = JSON.parse(localStorage.getItem('isRegistered'));

     if (storedUsers) {
       dispatch({
         type: "LOAD_USERS",
         payload: { users: storedUsers, isRegistered: isRegistered } 
        });
      } 
     }, [dispatch])

  const name = useSelector(selectName);
  const phone = useSelector(selectPhone);
  const email = useSelector(selectEmail);
  const userInfo = useSelector(selectUserInfo);
  const isRegister = useSelector(selectIsRegistered);
  console.log(userInfo);


  const [nameIsEmpty, setNameIsEmpty] = useState(false);
  const [phoneIsEmpty, setPhoneIsEmpty] = useState(false);
  const [emailIsEmpty, setEmailIsEmpty] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const handleName = (e) => {
    dispatch({
      type: "name",
      payload: e.target.value
    })
  }

  const handlePhone = (e) => {
    dispatch({
      type: "phone",
      payload: e.target.value
    })
  }

  const handleEmail = (e) => {
    dispatch({
      type: "email",
      payload: e.target.value
    })
  }

  const handleLogout = () => {
    dispatch({
      type: "logout",
      payload: undefined
    })

    localStorage.removeItem("users");
    localStorage.removeItem("isRegistered");
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailInvalid(!/\S+@\S+\.\S+/.test(email));

    if (name.length == 0) {
      setNameIsEmpty(true);
    }

    if (phone.length == 0) {
      setPhoneIsEmpty(true);
    }

    if (email.length == 0) {
      setEmailIsEmpty(true);
    }

    if (name.length >= 1) {
      setNameIsEmpty(false);
    }

    if (phone.length >= 1) {
      setPhoneIsEmpty(false);
    }

    if (email.length >= 1) {
      setEmailIsEmpty(false);
    }

    if (name.length >= 1 && phone.length >= 1 && email.length >= 1) {
      dispatch({
        type: "CONTACT_SUBMIT",
        payload: {
          id: Math.random(),
          name: name,
          phone: phone,
          email: email
        }
      })
    }
  }

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div className='p-8 bg-cover bg-center flex flex-col items-center gap-24 contactUsMedia:p-32' style={{ backgroundImage: `url(${backround})` }}>
      <h3 className='text-white text-7xl'>Contact Us</h3>

      <div className='w-full flex flex-col items-center gap-36 contactUsMedia:flex-row'>
        {
          isRegister ? 
              <div className='w-full flex flex-col gap-20 items-center p-12 justify-center contactUsMedia:w-1/2'>
                <h4 className='text-white text-4xl'>Welcome {userInfo.name}</h4>

                <button className='w-full text-white bg-submitBackground p-3 hover:opacity-90 active:opacity-80' onClick={handleLogout}>Log out</button>
              </div>
           :
            <form action="" className='w-full flex flex-col gap-8 contactUsMedia:w-1/2'>
              <p className='text-white'>Let’s get started</p>

              <h3 className='text-white text-5xl'>looking for a first-class consultant?</h3>

              <span className='text-white text-lg'>
                Quis aliqua sunt nisi consectetur
                anim ullamco ea. Ut deserunt non
                voluptate nisiQuis aliqua sunt nisi
              </span>

              <div className='w-full flex flex-col gap-2'>
                <input type="text" placeholder='Name*' value={name} onChange={handleName} className={nameIsEmpty ? 'w-full h-12 p-2 rounded-md border-red-600 border-2 border-solid' : 'w-full h-12 p-2 rounded-md'} />

                <p className='text-red-700'>{nameIsEmpty ? "Name field is empty" : ""}</p>
              </div>

              <div className='w-full flex flex-col gap-2'>
                <input type="tel" placeholder='Phone*' value={phone} onChange={handlePhone} className={phoneIsEmpty ? 'w-full h-12 p-2 rounded-md border-red-600 border-2 border-solid' : 'w-full h-12 p-2 rounded-md'} />

                <p className='text-red-700'>{phoneIsEmpty ? "Phone field is empty" : ""}</p>
              </div>

              <div className='w-full flex flex-col gap-2'>
                <input type="email" placeholder='Email*' value={email} onChange={handleEmail} className={emailIsEmpty ? 'w-full h-12 p-2 rounded-md border-red-600 border-2 border-solid' : 'w-full h-12 p-2 rounded-md'} />

                <p className='text-red-700'>{emailInvalid ? "Invalid email format" : ""}</p>
                <p className='text-red-700'>{emailIsEmpty ? "Email field is empty" : ""}</p>
              </div>

              <input type="submit" value="Submit" onClick={handleSubmit} className='w-28 h-12 text-white rounded-sm opacity-100 bg-submitBackground hover:opacity-90 active:opacity-80' />
            </form>
        }

        <div className='w-full contactUsMedia:w-1/2 h-96'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  )
}

export default Contact