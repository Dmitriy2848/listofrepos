import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IFetchAllRepos, fetchAllRepos, fetchRepo } from 'app/store/api';

interface ISettingsSlice {
	[key: string]: any;
	query: string;
	data: IFetchAllRepos;
	limit: number;
	isLoading: boolean;
	isError: boolean;
	page: number;
}

const initialState: ISettingsSlice = {
	query: '',
	data: {
		total_count: 0,
		incomplete_results: false,
		items: []
	},
	limit: 10,
	page: 1,
	isLoading: false,
	isError: false
};

const settingsSlice = createSlice({
	name: 'repos',
	initialState: initialState,
	reducers: {
		updateField(state, action: PayloadAction<Partial<ISettingsSlice>>) {
			for (const [key, value] of Object.entries(action.payload)) {
				state[key] = value;
			}
		},
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
				state.data = payload;
				state.isLoading = false;
			});
	}
});

export default settingsSlice.reducer;

export const { updateField, updateRepo, deleteRepo } = settingsSlice.actions;
