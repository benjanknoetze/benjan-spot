//Global settings and layout

/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head 
Notice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */
import Header from './Header' //Header component

import Head from 'next/head'

{/* Global layout */ }
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
			{/* Google Analytics */}
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-63HLEECX4G"
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-63HLEECX4G');
        `,
				}}
			/>
		</Head>
		<div>
			<Header /> {/* Navigation */}
			{props.children}
		</div>
	</div>
);

export default Layout;