import React, {useEffect} from 'react'
import Footer from '../../Home/Footer'
import Form from './Form'
import Chatbot from "../../whatsapp/index"

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Chatbot />
    <Form />
    <Footer />
    
    </>
  )
}

export default Contact
