import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import RegisterForm from '../../components/navbar/Register_form';


function registerPage(){
    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
      const response = await fetch('/api/new-user', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      console.log(data);
  
      router.push('/');
    }
  
    return (
      <Fragment>
      
        <RegisterForm onAddMeetup={addMeetupHandler} />
      </Fragment>
    );
  }


export default registerPage;