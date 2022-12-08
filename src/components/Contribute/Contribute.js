import React from 'react'
import emailjs from "emailjs-com"

function Contribute() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_hgb0fpd', e.target, 'user_aPi0lDHY25L9HwfWL9Muf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }



    return (
        <div>
             <div className="container mb-5 p-3" style={{background: "#3f3d56"}}>
<div className="container  " style={{textAlign: "center" , color: "white"}} >
<h2>Want to Contribute?</h2>
              <h4>Send a structured google drive link with proper structured names.</h4>
</div>
            
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="googleDriveLink"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto mb-5">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contribute
