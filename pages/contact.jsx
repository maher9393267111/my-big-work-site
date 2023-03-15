import React from 'react'
import Layout from '../components/Layout/index' 
import BannerContact from '../components/contact/banner'
import axios from 'axios';
import { useState } from 'react';
import Loader from '../components/common/Loader'
import { toast } from 'react-toastify'; 


const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default function Contact() {

	const [emailForm, setEmailForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});


	// Error handling

	const [errors, setErrors] = useState(false);
	const [errorMsg, setErrorMsg] = useState({});

	// Use boolean to show success message

	const [emailSent, setEmailSent] = useState(false);

	const resetForm = () => {
		setEmailForm({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	const handleValidation = ({ name, email, subject, message }) => {
		if (name === "") {
			setErrors(true);
			setErrorMsg({ name: "You must provide a name, please" });
		} else if (
			email === undefined ||
			EMAIL_PATTERN.test(String(email).toLocaleLowerCase())
		) {
			setErrors(true);
			setErrorMsg({ email: "You must provide a valid email, please" });
		} else if (subject === undefined) {
			setErrors(true);
			setErrorMsg({ subject: "You must provide a subject, please" });
		} else if (message === undefined) {
			setErrors(true);
			setErrorMsg({ message: "You must provide a subject, please" });
		} else {
			setErrors(false);
		}
	};

	const handleSubmit = async(e) => {
    console.log('SENDDDD')
		e.preventDefault();
		const emailToSend = {
			name: emailForm.name,
			email: emailForm.email,
			subject: emailForm.subject,
			message: emailForm.message,
		};

		// handleValidation({ ...emailToSend });

		// if (!errors) {

const res = await axios.post('/api/sendEmail', emailToSend)

console.log('response' , res?.data);

if(res.data?.message){
toast.success(res.data?.message);

}

else{
  toast.error(res.data?.message);
}


			// axios({
			// 	method: "post",
			// 	url: "/api/sendEmail",
			// 	data: {
			// 		...emailToSend,
			// 	},
			// }).then(() => {
			// 	setEmailSent(true);
      //   toast.success('Email sent successfully');
			// 	resetForm();
			// }
      
      // ).catch(err => {

      //   toast.error(err.message);

      // })



		// }
	};







  return (
    <Layout>
    <div>

<BannerContact/>


<section className="contact-form-area s-padding">
<div className="container">
<div className="row">
<div className="col-lg-5">
<div className="contact-info">
<span className="s-sub-title">Contact With Us</span>
<h2 className="s-title   font-arabic">
	لا تتردد في التواصل معنا
</h2>
<div className="c-info-box-wrap">
<a href="tel:+8855486548" className="c-info-box">
<div className="icon">
<img src="assets/images/feature-icons/phone.png" alt="" />
</div>
<div className="content">
<span>Phone Number</span>
<h4>+88 ( 5548 ) 6548</h4>
</div>
</a>
<a href="https://quomodothemes.website/cdn-cgi/l/email-protection#bed7d0d8d1c7d1cbccfed9d3dfd7d290ddd1d3" className="c-info-box">
<div className="icon">
<img src="assets/images/feature-icons/evelope.png" alt="" />
</div>
<div className="content">
<span>Email</span>
<h4><span className="__cf_email__" data-cfemail="771e1911180e18020537101a161e1b5914181a">
futur2196@gmail.com
	</span></h4>
</div>















</a>
<a href="https://www.google.com/maps/place/QuomodoSoft/@23.8002524,90.359203,13z/data=!4m5!3m4!1s0x0:0x1dea3ec2f7a32054!8m2!3d23.8152118!4d90.3665415" className="c-info-box">
<div className="icon">
<img src="assets/images/feature-icons/pin.png" alt="" />
</div>
<div className="content">
<span>Location</span>
<h4>Kocaeli , Turkey</h4>
</div>
</a>
</div>
</div>
</div>
<div className="col-lg-7">
<div className="contact-form-s1">
<form 

method="POST"

>


<input

onChange={(e) =>
  setEmailForm({ ...emailForm, name: e.target.value })
}
type="text" name="name" placeholder="Your Name*" required />


<input type="number" name="number" placeholder="Phone Number*" required />


<input
onChange={(e) =>
  setEmailForm({ ...emailForm, email: e.target.value })
}

type="email" name="email" placeholder="Your Email*" required />


<input
onChange={(e) =>
  setEmailForm({ ...emailForm, subject: e.target.value })
}

type="text" name="subject" placeholder="Your Subject*" required />


<textarea
onChange={(e) =>
  setEmailForm({ ...emailForm, message: e.target.value })
}

name="message" cols="30" rows="10" placeholder="Message here"></textarea>


<button
  onClick={(e) => {
    handleSubmit(e);
  }}
type="submit">Submit</button>
</form>
</div>
</div>
</div>
</div>
</section>



{errors && <h5 className="form-error">{errorMsg.message}</h5>}

<section className="map-section">
<div className="row">
<div className="col-12">
{/* <iframe 
className='w-full h-[400px]  md:w-[600px]'
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1169009392206!2d28.93325181533691!3d41.02269832648633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba3dd6187817%3A0xd90b4ee95d890ef3!2zS2FyYWfDvG1yw7xrLCBBcnBhIEVtaW5pIEvDtnByw7xzw7wgU2suIDRBLCAzNDA5MSBGYXRpaC_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1677151787954!5m2!1sen!2str"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}




<iframe

className='w-full h-[400px]  md:w-[600px]'

src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48345.345340252185!2d29.893301454765453!3d40.77117167719608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb45ede312a043%3A0x3220faa3114a5e24!2sIzmit%20Seka%20State%20Hospital!5e0!3m2!1sen!2str!4v1678783438939!5m2!1sen!2str" 
loading="lazy" referrerpolicy="no-referrer-when-downgrade"
></iframe>



</div>
</div>
</section>



    </div>
    </Layout>
  )
}
