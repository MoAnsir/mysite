
//presentation Components
export const Header = (props) => {
	const {name, email, phone, location, linkedin, instagram} = props.details
	return(
		<header>
			<div className="jumbotron img-responsive">
				<div className="container">
					<div className="row">
						<h1 className="col-sm-12 text-center my-details">
							{name}
							<br />
							{email}
							<br />
							{phone}
							<br />
							{location}
						</h1>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header;