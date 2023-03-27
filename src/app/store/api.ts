import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IRepo } from 'app/store/IRepo';

type IFetchAllReposArgs = {
	query: string;
	limit?: number;
	page?: number;
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

const BASE_URL = 'https://api.github.com';

const fetchAllRepos = createAsyncThunk<IFetchAllRepos, IFetchAllReposArgs>(
	'repos/fetchAllRepos',
	async ({ query, limit = 10, page = 1 }) => {
		const res = await axios.get(
			`${BASE_URL}/search/repositories?q=${query}&per_page=${limit}&page=${page}`
		);
		return res.data;
	}
);
const fetchRepo = createAsyncThunk<IRepo, IFetchRepoArgs>(
	'repos/fetchRepos',
	async ({ owner, repo }) => {
		const res = await axios.get(`${BASE_URL}/repos/${owner}/${repo}`);
		return res.data;
	}
);

export { fetchAllRepos, fetchRepo, IFetchAllRepos };
