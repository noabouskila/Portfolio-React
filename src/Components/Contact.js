import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {


  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [ message , setMessage] = useState("");


  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }


  const handleSubmit =(e)=>{
    e.preventDefault();

    fetch("/contact@noabouskila.fr", {
      method : "POST",
      headers : {"Content-Type" : "application/x-www-form-urlencoded" },
      body : encode({"form-name" :"contact" , name, email , message})
    })
    .then(()=>alert("Message envoyé!"))
    .catch((error)=>alert("Erreur de type :" + error))
  }

  return (
    <div className='pb-20'>
      <div className='justify-center text-2xl mb-2 flex items-end'>
        <h2 className='mr-6 italic  font-bold'>Contact me !</h2>
        <FontAwesomeIcon icon={faPhoneVolume}/>
      </div>


      <div>
        <div></div>
        <div>
          <form name='contact' method='post' onSubmit={handleSubmit} data-netlify="true">

            <h2>Contactez-moi!</h2>
            
            {/* champs hidden netlify */}
            <input type='hidden' name='form-name' value="contact"/>

            <div>
              <label htmlFor='name'>Name</label>
              <input
              type='text'
                id='name'
              name="name"
              value={name}
              onChange={(e) =>setName(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
              type='email'
                id='email'
               name="email"
               value={email}
              onChange={(e) =>setEmail(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor='message'>Votre Message</label>
              <textarea 
              id='message'
              name='message'
              value={message}
              onChange={(e)=>setMessage(e.target.value)}>
              </textarea>
            </div>

           <button type='submit'>Envoyer</button>

          </form>
        </div>
      </div>
    </div>

  )
}
