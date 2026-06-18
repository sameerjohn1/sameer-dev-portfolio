'use client';

import { useState, useContext, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        toast.success('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setLoading(false);
      },
      () => {
        toast.error('Something went wrong. Please try again later.');
        setLoading(false);
      }
    );
  };

  return (
    <div
      name="contact"
      className={`w-full py-20 flex justify-center items-center p-4 ${
        theme === 'dark' ? 'bg-[#0a192f]' : 'bg-white'
      }`}
    >
      <form
        ref={form}
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={handleSubmit}
      >
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4 border-pink-600 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            Contact
          </p>
          <p
            className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } py-4`}
          >
            Submit the form below or shoot me an email —{' '}
            <span className="text-pink-600">sameerprogrammer5@gmail.com</span>
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2 z-[9999] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] z-[9999] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="bg-[#ccd6f6] p-2 z-[9999] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
          name="message"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center z-[9999] transition-all duration-300 rounded
            ${
              theme === 'dark'
                ? 'bg-[#0a192f] text-white border-white'
                : 'bg-white text-black border-black'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Sending...' : "Let's Collaborate"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
