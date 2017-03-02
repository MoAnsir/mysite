//presentation Components
export const Nav = (props) => {
	return(
		<nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
        <div className="navbar-header">
            <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> 
            	<span className="sr-only">Toggle navigation</span> 
            	<span className="icon-bar"></span> 
            	<span className="icon-bar"></span> 
            	<span className="icon-bar"></span> 
            </button> 
            <a href="#" className="navbar-brand">Brand</a> </div>
        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Link</a></li>
            </ul>
        </div>
    </div>
</nav>
	)
}
export default Nav;