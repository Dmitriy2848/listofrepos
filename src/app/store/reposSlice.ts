import { createSlice } from '@reduxjs/toolkit';

import { IFetchAllRepos, fetchAllRepos, fetchRepo } from 'app/store/api';

interface ISettingsSlice {
	query: string;
	repos: IFetchAllRepos;
	limit: number;
	isLoading: boolean;
	isError: boolean;
}

const initialState: ISettingsSlice = {
	query: '',
	repos: {
		total_count: 0,
		incomplete_results: false,
		items: []
	},
	limit: 10,
	isLoading: false,
	isError: false
};

const settingsSlice = createSlice({
	name: 'repos',
	initialState: initialState,
	reducers: {
		updateRepo() {},
		deleteRepo() {}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllRepos.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchAllRepos.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			})
			.addCase(fetchAllRepos.fulfilled, (state, { payload }) => {
				state.repos = payload;
				state.isLoading = false;
			});
	}
});

export default settingsSlice.reducer;

export const { updateRepo, deleteRepo } = settingsSlice.actions;
