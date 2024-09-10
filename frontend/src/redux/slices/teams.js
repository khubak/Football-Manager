import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTeams from "../../api/getTeams";

const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    teams: [],
    errors: [],
    status: "idle",
  },
  reducers: {
    allTeams(state) {
      state.teams = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTeams.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllTeams.fulfilled, (state, action) => {
        state.status = "succeded";
        state.teams = action.payload;
      })
      .addCase(fetchAllTeams.rejected, (state, action) => {
        state.status = "failed";
        state.errors = action.error.message;
      });
  },
});

export const fetchAllTeams = createAsyncThunk("teams/fetchAll", async () => {
  const response = await getTeams();
  return response.data;
});

export const { allTeams } = teamsSlice.actions;
export default teamsSlice.reducer;