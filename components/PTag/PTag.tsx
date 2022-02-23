import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './PTag.module.css'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 's' | 'm' | 'l'
}

export const PTag: FC<Props> = ({ size, className, children, ...props }) => (
	<p
		{...props}
		className={cn(styles.p, className, {
			[styles.s]: size === 's',
			[styles.m]: size === 'm',
			[styles.l]: size === 'l',
		})}>
		{children}
	</p>
)
