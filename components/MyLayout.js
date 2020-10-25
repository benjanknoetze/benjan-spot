//Global settings and layout

/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head 
Notice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */
import Head from 'next/head'
import Header from './Header' //Header component

{/* Global layout */}
const Layout = props => (
	<div>
		<Head>
			{/* Bootstrap */}
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossOrigin="anonymous"
			/>
			{/* Google Fonts */}
			<link 
			rel="stylesheet" 
			href="https://fonts.googleapis.com/css?family=Allerta" 
			/>
			<link 
			rel="stylesheet" 
			href="https://fonts.googleapis.com/css?family=Bitter:400,700" 
			/>
		</Head>
		<div>
			<Header /> {/* Navigation */}
			{props.children}
		</div>
	</div>
);

export default Layout;