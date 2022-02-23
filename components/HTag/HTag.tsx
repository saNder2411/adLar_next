import React, { FC } from 'react'

import styles from './HTag.module.css'

type Props = { tag: 'h1' | 'h2' | 'h3' }

export const HTag: FC<Props> = ({ tag, children }) => (
	<>
		{
			{
				h1: <h1 className={styles.h1}>{children}</h1>,
				h2: <h2 className={styles.h2}>{children}</h2>,
				h3: <h3 className={styles.h3}>{children}</h3>,
			}[tag]
		}
	</>
)
