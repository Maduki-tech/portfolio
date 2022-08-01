import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'


export const Tech = (props : { framework: String }) => {
	return (
		<div className="flex gap-4 items-center">
			<CheckCircleIcon className="w-10 h-10 text-secondary"/>
			<h1 className="text-2xl ">{props.framework}</h1>
		</div>
	)
}
