import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IRepo } from 'app/store/IRepo';

type IFetchAllReposArgs = {
	query: string;
	limit: number;
	page: number;
};
interface IFetchAllRepos {
	total_count: number;
	incomplete_results: boolean;
	items: IRepo[];
}

interface IFetchRepoArgs {
	owner: string;
	repo: string;
}

const fetchAllRepos = createAsyncThunk<IFetchAllRepos, IFetchAllReposArgs>(
	'repos/fetchAllRepos',
	async ({ query, limit, page }) => {
		return await axios.get(
			`https://api.github.com/search/repositories?q=${query}&per_page=${limit}&page=${page}`
		);
	}
);
const fetchRepo = createAsyncThunk<IRepo, IFetchRepoArgs>(
	'repos/fetchRepos',
	async ({ owner, repo }) => {
		return await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
	}
);

export { fetchAllRepos, fetchRepo, IFetchAllRepos };
