
//presentation Components
export const Contact = (props) => {
	return(
		<div>
			<h2 className="text-center">Contact</h2>
			<form className="form-horizontal" id="myform" method="post">
			  <div className="form-group">
			    <label htmlFor="your-email" className="col-sm-2 control-label">Your email:</label>
			    <div className="col-sm-10">
			      <input type="email" className="form-control" id="your-email" name="reply_to" placeholder="Your email" />
			    </div>
			  </div>
			  <div className="form-group">
			    <label htmlFor="your-name" className="col-sm-2 control-label">Your Name:</label>
			    <div className="col-sm-10">
			      <input type="text" className="form-control" id="your-name" name="from_name" placeholder="Your name" />
			    </div>
			  </div>
			  <div className="form-group">
			    <label htmlFor="emailBody" className="col-sm-2 control-label">Email:</label>
			    <div className="col-sm-10">
			      <textarea className="form-control" rows="5" cols="108" id="emailBody" name="message_html" placeholder="Type your message here"></textarea>
			    </div>
			  </div>
			  <div className="form-group">
			    <div className="col-sm-offset-2 col-sm-10">
			      <button type="submit" className="btn btn-default">Send email</button>
			    </div>
			  </div>
			</form>
			<br />
			<div className="row">
				<div className="col-sm-2">
					<p className="lead text-right">
						Tel: 
					</p>
				</div>
				<div className="col-sm-10">
					<p className="lead">
						07847 527698
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-2">
					<p className="lead text-right">
						Email: 
					</p>
				</div>
				<div className="col-sm-10">
					<p className="lead">
						mohammed.ansir@gmail.com
					</p>
				</div>
			</div>
		</div>
	)
}
export default Contact;
