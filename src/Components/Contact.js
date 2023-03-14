import React, { useRef, useState} from 'react'
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {

  const [msg, setMsg] = useState();
  const form = useRef();

  const handleSubmit =(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_udqvbfo', 'template_oxvujtw', form.current, 'OVTiOG0SfqcoMcOR2')
    .then((result) => {
        console.log( "reussite d'envoi"+result.text);
        setMsg(result.text);
    }, (error) => {
        console.log("erreur d'envoi"+ error.text);
    });
  }

  return (
    <div id='Contact' className='pb-20' >
      <div className='justify-center text-3xl flex items-end py-12'>
        <h2 className='mr-6 italic font-bold text-2xl '>Contactez-moi !</h2>
        <FontAwesomeIcon icon={faPhoneVolume}/>
      </div>

      <div className='flex flex-row justify-around'>
        <div className='hidden md:block'>
          <img src='https://noabouskila.github.io/Portfolio-React/img/img-contact.svg'  alt='contact-me' className='w-96'/>
        </div>

        <form ref={form} onSubmit={handleSubmit}
        className='rounded-lg shadow-2xl shadow-fuchsia-900 p-4 w-4/5  md:w-2/5'
        >

          {/* <h2 className='italic text-center mb-8' >Contactez-moi!</h2> */}

          <div className='mb-6 flex flex-col'>
            <label htmlFor='name'>Nom :</label>
            <input
              type='text'
              id='name'
              name="from_name"
              className='rounded'
            />
          </div>

          <div className='mb-6 flex flex-col'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              id='email'
              name="from_email"
              className='rounded'
            />
          </div>

          <div className='mb-6 flex flex-col'>
            <label htmlFor='message'>Message :</label>
            <textarea 
              id='message'
              name='message'
              className='rounded'
            >
            </textarea>
          </div>

          <div 
           className='mb-6  rounded px-6 py-2 bg-gradient-to-l from-purple-700 to-blue-800 shadow-2xl flex justify-center md:w-1/3 m-auto' >
          <input 
            type='submit'
            value="Envoyer"
          />
          </div>
          

          <p>{msg}</p>

        </form>
      </div>
    </div>

  )
}
