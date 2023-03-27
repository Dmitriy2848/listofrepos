import { FC } from 'react';

import ReposList from 'features/ReposList';
import SearchRepo from 'features/SearchRepo';

const Search: FC = () => {
	return (
		<div>
			<SearchRepo />
			<ReposList />
		</div>
	);
};

export default Search;
