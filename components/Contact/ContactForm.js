//Contact page form

import { Button } from 'react-bootstrap'
import { FormspreeProvider } from '@formspree/react';

/*  class ContactForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		name: '',
		email: '',
		message: ''
	  }
	}

	render() {
	  return(
		<div className="formContainer p-4">
		<h5 className="Heading mb-4">Get in touch</h5>
		  <form id="contact-form">
			<div className="form-group">
			  <label htmlFor="name" className="contactText">Name</label>
			  <input type="text" className="form-control" value={this.state.name} />
			</div>
			<div className="form-group">
			  <label htmlFor="exampleInputEmail1" className="contactText">Email address</label>
			  <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} />
			</div>
			<div className="form-group">
			  <label htmlFor="message" className="contactText">Message</label>
			  <textarea className="form-control" rows="5" value={this.state.message} />
			</div>
			<Button type="submit" className="submitButton">Submit</Button>
		  </form>
		  <style global jsx>{`
			.Heading {
				color: #0d0411;
				font-family: Allerta, sans-serif;
				font-weight: 800;
			}
			.contactText {
				color: #0d0411;
				font-family: Bitter, serif;
			}
			.submitButton {
				width: 110px;
			}
			`}</style>
		</div>
	  );
	}
  }
  
  export default ContactForm;
 */

export default class MyForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.submitForm = this.submitForm.bind(this);
	  this.state = {
		status: ""
	  };
	}
  
	render() {
	  const { status } = this.state;
	  return (
		<FormspreeProvider project="{contact}">
		<h5 className="Heading pl-4">Get in touch</h5>
		<form 
		  className="p-4"
		  onSubmit={this.submitForm}
		  action="https://formspree.io/f/xrgoqvaq" 
		  method="POST"
		>
		  <label className="formLabel">Email:</label>
		  <br></br>
		  <input className="formInput" type="email" name="email" /> <br></br>
		  <label className="formLabel mt-2">Message:</label> <br></br>
		  <input className="formInput pb-5" type="text" name="message" /> <br></br>
		  {status === "SUCCESS" ? <p>Thanks!</p> : <Button className="submitButton mt-3">Submit</Button>}
		  {status === "ERROR" && <p>Ooops! There was an error.</p>}
		</form>
		<style global jsx>{`
			.Heading {
				color: #0d0411;
				font-family: Allerta, sans-serif;
				font-weight: 800;
			}
			.contactText {
				color: #0d0411;
				font-family: Bitter, serif;
			}
			.formLabel {
				font-family: Bitter, serif;
			}
			.formInput {
				background-color: #cdc9de;
				width: 50%;
				border: none;
				border-radius: 4px;
			}
			.submitButton {
				width: 110px;
			}
			`}</style>
		</FormspreeProvider>
	  );
	}
  
	submitForm(ev) {
	  ev.preventDefault();
	  const form = ev.target;
	  const data = new FormData(form);
	  const xhr = new XMLHttpRequest();
	  xhr.open(form.method, form.action);
	  xhr.setRequestHeader("Accept", "application/json");
	  xhr.onreadystatechange = () => {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
		  form.reset();
		  this.setState({ status: "SUCCESS" });
		} else {
		  this.setState({ status: "ERROR" });
		}
	  };
	  xhr.send(data);
	}
  }