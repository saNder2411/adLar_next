import cn from 'classnames'
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import ArrowIcon from './arrow.svg'
import styles from './Button.module.css'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'ghost'
	arrow?: 'right' | 'down' | 'none'
}

export const Button: FC<Props> = ({ appearance, className, arrow = 'none', children, ...props }) => (
	<button
		{...props}
		className={cn(styles.btn, className, {
			[styles.primary]: appearance === 'primary',
			[styles.ghost]: appearance === 'ghost',
		})}>
		{children}
		{arrow !== 'none' && (
			<span className={cn(styles.arrow, { [styles.down]: arrow === 'down' })}>
				<ArrowIcon />
			</span>
		)}
	</button>
)
