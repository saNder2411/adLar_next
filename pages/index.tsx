import { useState } from 'react'

import { Button, HTag, PTag, RatingFRef, Tag } from '../components'
import { withLayout } from '../layout'

function Home() {
	const [rating, setRating] = useState(4)

	return (
		<>
			<HTag tag="h1">Text</HTag>
			<HTag tag="h2">Text</HTag>
			<HTag tag="h3">Text</HTag>
			<Button appearance="primary">Button</Button>
			<Button appearance="ghost" arrow="down">
				Button
			</Button>
			<PTag size="s">S paragraph</PTag>
			<PTag size="m">M paragraph</PTag>
			<PTag size="l">L paragraph</PTag>
			<Tag size="s" color="ghost">
				S tag
			</Tag>
			<Tag size="m" color="ghost">
				M tag
			</Tag>
			<Tag size="m" color="red">
				S tag
			</Tag>
			<Tag size="m" color="green">
				S tag
			</Tag>
			<Tag size="m" color="grey">
				S tag
			</Tag>
			<Tag size="m" color="primary">
				S tag
			</Tag>
			<RatingFRef isEditable rating={rating} setRating={setRating} />
		</>
	)
}

export default withLayout(Home)
