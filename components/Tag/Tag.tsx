import cn from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import styles from './Tag.module.css'

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'm'
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary'
	href?: string
}

export const Tag: FC<Props> = ({ size = 's', children, color = 'ghost', href, className, ...props }) => (
	<div
		className={cn(styles.tag, className, {
			[styles.s]: size == 's',
			[styles.m]: size == 'm',
			[styles.ghost]: color == 'ghost',
			[styles.red]: color == 'red',
			[styles.grey]: color == 'grey',
			[styles.green]: color == 'green',
			[styles.primary]: color == 'primary',
		})}
		{...props}>
		{href ? <a href={href}>{children}</a> : <>{children}</>}
	</div>
)
