import React, { FC } from 'react'

import { Footer, Header, Sidebar } from '..'

export const Layout: FC = ({ children }) => (
	<>
		<Header />

		<div>
			<Sidebar />
			{children}
		</div>

		<Footer />
	</>
)
