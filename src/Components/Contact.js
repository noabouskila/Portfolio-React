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
        setMsg("Message Envoyé! Je veindrai vers vous au plus vite !");
    }, (error) => {
        console.log("erreur d'envoi"+ error.text);
        setMsg("erreur d'envoi"+error.text);
    });
  }

  return (
    <div id='Contact' className='pb-20' >
      <div className='flex items-end justify-center py-12 text-3xl'>
        <h2 className='mr-6 text-2xl italic font-bold '>Contactez-moi !</h2>
        <FontAwesomeIcon icon={faPhoneVolume}/>
      </div>

      <div className='flex flex-row justify-around'>
        <div className='hidden md:block'>
          <img src='img/img-contact.svg'  alt='contact-me' className='w-96'/>
        </div>

        <form method='POST' ref={form} onSubmit={handleSubmit} encType='multipart/form-data'
        className='w-4/5 p-4 rounded-lg shadow-2xl shadow-fuchsia-900 md:w-2/5'
        >

          {/* <h2 className='mb-8 italic text-center' >Contactez-moi!</h2> */}

          <div className='flex flex-col mb-6'>
            <label htmlFor='name'>Nom :</label>
            <input
              type='text'
              id='name'
              name="from_name"
              className='rounded text-slate-900'
              required
            />
          </div>

          <div className='flex flex-col mb-6'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              id='email'
              name="from_email"
              className='rounded text-slate-900'
              required
            />
          </div>

          <div className='flex flex-col mb-6'>
            <label htmlFor='message'>Message :</label>
            <textarea 
              id='message'
              name='message'
              className='rounded text-slate-900'
              required
            >
            </textarea>
          </div>

          <div 
           className='flex justify-center px-6 py-2 m-auto mb-6 rounded shadow-2xl bg-gradient-to-l from-purple-700 to-blue-800 md:w-1/3' >
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
