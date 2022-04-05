import cn from 'classnames'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { format } from 'date-fns'

import styles from './Footer.module.css'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer: FC<Props> = ({ className, ...props }) => (
	<footer className={cn(className, styles.footer)} {...props}>
		<div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
		<a href="#" target="_blank">
			Пользовательское соглашение
		</a>
		<a href="#" target="_blank">
			Политика конфиденциальности
		</a>
	</footer>
)
