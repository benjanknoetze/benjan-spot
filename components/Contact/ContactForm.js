//Contact page form

import React from "react";

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
		<div>
	  <h5 className="Heading pl-3 mt-3">Get in touch</h5>
      <form className="p-3 contactForm"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xrgoqvaq"
        method="POST"
      >
        <label className="formLabel">Email:</label>
		  <br></br>
		<input className="formInput" type="email" name="email" /> <br></br>
        <label className="formLabel mt-2">Message:</label> <br></br>
		<input className="formInput pb-5" type="text" name="message" /> <br></br>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
	  <style global jsx>{`
			/* form button {\
			} */
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
				width: 75%;
				border: none;
				border-radius: 4px;
			}
			.contactForm button {
				width: 110px;
				border-radius: 4px;
				border: none; 
				color: #cdc9de !important;
				background-color: #635598;
				font-family: Bitter, serif;
				color: #dddbe6; 
				margin-top: 15px;
				padding: 6px 10px; 
			}
			.contactForm button:hover {
				background-color: #635598;
				transform: scale(1.03);
				color: white !important;
			}
			`}</style>
	  </div>
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
   
  
	/* render() {
	    const { status } = this.state;
	  return (
		<div>
		<h5 className="Heading pl-3 mt-3">Get in touch</h5>
		<form 
		  className="p-3"
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
				width: 75%;
				border: none;
				border-radius: 4px;
			}
			.submitButton {
				width: 110px;
			}
			`}</style>
		</div>
	  );
	} */



  

