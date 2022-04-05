import React, { FC } from 'react'
import styles from './GridTest.module.css'

export const GridTest: FC = () => (
	<div className={styles.container}>
		<div className={styles.header}>header</div>
		<div className={styles.body}>body</div>
		<div className={styles.sidebar}>sidebar</div>
		<div className={styles.footer}>footer</div>
	</div>
)
