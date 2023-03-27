import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Eye } from 'shared/assets/eye.svg';
import { ReactComponent as Pen } from 'shared/assets/pen.svg';
import { ReactComponent as Star } from 'shared/assets/star.svg';

interface IRepoCardProps {
	projectLink: string;
	authorLink: string;
	name: string;
	author: string;
	stars: number;
	views: number;
	avatar: string;
}

const RepoCard: FC<IRepoCardProps> = ({
	projectLink,
	authorLink,
	name,
	author,
	stars,
	views,
	avatar
}) => {
	const [comment, setComment] = useState('');

	return (
		<div className='w-72 rounded-lg border shadow-sm overflow-hidden p-3'>
			<Link
				to={projectLink}
				className='font-medium inline-block'
			>
				<h4>{name}</h4>
			</Link>
			<div className='flex items-center gap-3 mt-2'>
				<img
					src={avatar}
					alt=''
					className='rounded-lg w-10'
				/>
				<Link
					to={authorLink}
					className='block'
				>
					{author}
				</Link>
			</div>
			<div className='mt-2 flex gap-3'>
				<div className='flex items-center gap-1 h-4'>
					<Star />
					<span className='text-sm'>{stars}</span>
				</div>
				<div className='flex items-center gap-1 h-4'>
					<Eye />
					<span className='text-sm'>{views}</span>
				</div>
			</div>
			<div className='mt-2 relative overflow-hidden'>
				<input
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					type='text'
					placeholder='Комментарий к проекту'
					className='block w-5/6 py-1 px-2 text-sm border rounded-l border focus:border-blue-500 outline-0'
				/>
				<button
					onClick={() => setComment('')}
					className='absolute top-0 right-0 h-full w-1/6 rounded-r bg-blue-500 p-1.5 flex justify-center fill-white text-white text-sm hover:bg-blue-700'
				>
					<Pen />
				</button>
			</div>
		</div>
	);
};

export default RepoCard;
