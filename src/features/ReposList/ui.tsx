import { FC } from 'react';

import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { updateField } from 'app/store/reposSlice';

import RepoCard from 'entities/RepoCard';

import Pagination from 'shared/ui/Pagination';

const ReposList: FC = () => {
	const dispatch = useAppDispatch();
	const repos = useAppSelector((state) => state.repos);

	const setPage = (x: number) => {
		dispatch(updateField({ page: x }));
	};

	return (
		<div className='mx-[10%]'>
			<div className='flex flex-wrap gap-7 justify-center'>
				{repos.data.items?.map((repo) => (
					<RepoCard
						projectLink={repo.html_url}
						authorLink={repo.owner.html_url}
						key={repo.id}
						name={repo.name}
						author={repo.owner.login}
						stars={repo.stargazers_count}
						views={repo.watchers}
						avatar={repo.owner.avatar_url}
					/>
				))}
			</div>

			<div className='my-7 mx-auto w-fit'>
				<Pagination
					onPageChange={setPage}
					totalCount={repos.data.total_count}
					currentPage={repos.page}
					pageSize={repos.limit}
				/>
			</div>
		</div>
	);
};

export default ReposList;
