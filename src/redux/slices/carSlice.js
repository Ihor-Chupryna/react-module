import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { carService } from "../../services/carService";

const initialState = {
    cars: [],
    errors: null,
    carForUpdate: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await carService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({ car }, thunkAPI) => {
        try {
            await carService.create(car);
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/delete',
    async ({ id }, thunkAPI) => {
        try {
            await carService.delete(id)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/update',
    async ({ id, car }, thunkAPI) => {
        try {
            await carService.update(id, car)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = action.payload
                state.errors = action.payload
            })
            .addCase(getAll.pending, state => {
                state.loading = true
            })
})

const { reducer: carReducer, actions: { setCarForUpdate } } = carSlice;

const carActions = { getAll, create, deleteById, setCarForUpdate, updateById };

export { carActions, carReducer }
