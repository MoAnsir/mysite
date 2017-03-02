//presentation Components
const Skills = () => {
	return(
		<section className="row">
			<div className="col-sm-12">
				<h2 className="text-center">Skills</h2>
				<div className="table-responsive">
				<table className="table table-striped">
					<tbody>
						<tr>
							<td>HTML(5)</td>
							<td>Bootstrap</td>
							<td>AWS</td>
						</tr>
						<tr>
							<td>CSS(3)</td>
							<td>Git / Svn</td>
							<td>LAMP stack</td>
						</tr>
						<tr>
							<td>SASS</td>
							<td>Grunt</td>
							<td>Terminal <span className="hidden-xs">/</span> <br className="visible-xs" />CMD</td>
						</tr>
						<tr>
							<td>Javascript</td>
							<td>Npm</td>
							<td>Adobe <br className="visible-xs" /> test & target</td>
						</tr>
						<tr>
							<td>ES6</td>
							<td>Webpack</td>
							<td>Adobe CQ</td>
						</tr>
						<tr>
							<td>jQuery</td>
							<td>Responsive <br className="visible-xs" /> development</td>
							<td>Tealium</td>
						</tr>
						<tr>
							<td>React</td>
							<td>W3C <br className="visible-xs" /> Standards <br className="visible-xs" /> Accessibility</td>
							<td>SEO</td>
						</tr>
						<tr>
							<td>Angular</td>
							<td>Agile</td>
							<td>Jira</td>
						</tr>
						<tr>
							<td>D3</td>
							<td>Stash</td>
							<td>Confluence</td>
						</tr>
					</tbody>
				</table>
				</div>
			</div>
		</section>
	)
}
export default Skills;