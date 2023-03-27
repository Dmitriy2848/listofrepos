import { ChangeEvent, FC, useEffect } from 'react';

import { fetchAllRepos } from 'app/store/api';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { updateField } from 'app/store/reposSlice';

import { ReactComponent as MagnifyingGlass } from 'shared/assets/magnifying-glass.svg';

const SearchRepo: FC = () => {
	const dispatch = useAppDispatch();
	const { query, limit, page } = useAppSelector((state) => state.repos);

	const handleClick = () => {
		if (query.length >= 3) {
			dispatch(fetchAllRepos({ query, limit, page }));
		}
	};
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(updateField({ query: e.target.value }));
	};

	useEffect(() => {
		dispatch(fetchAllRepos({ query, limit, page }));
	}, [limit, page]);

	return (
		<div className='mb-7'>
			<div className='mt-2 mx-auto relative overflow-hidden w-72'>
				<input
					onChange={handleChange}
					type='text'
					placeholder='Не менее трех символов'
					className='block w-5/6 py-1 px-2 text-sm border rounded-l border focus:border-blue-500 outline-0'
				/>
				<button
					disabled={query.length < 3}
					onClick={handleClick}
					className='disabled:bg-blue-400 disabled:cursor-not-allowed absolute top-0 right-0 h-full w-1/6 rounded-r bg-blue-500 p-1.5 flex justify-center fill-white text-white text-sm hover:bg-blue-700'
				>
					<MagnifyingGlass />
				</button>
			</div>
		</div>
	);
};

export default SearchRepo;
