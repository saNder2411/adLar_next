import React, { FC } from 'react'
import styles from './Layout.module.css'
import { Footer, Header, Sidebar } from '..'

const Layout: FC = ({ children }) => (
	<div className={styles.wrapper}>
		<Header className={styles.header} />
		<Sidebar className={styles.sidebar} />
		<div className={styles.body}>{children}</div>
		<Footer className={styles.footer} />
	</div>
)

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}
