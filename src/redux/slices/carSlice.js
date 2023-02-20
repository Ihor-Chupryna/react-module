import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { carService } from "../../services";

const initialState = {
    cars: [],
    prev: null,
    next: null,
    errors: null,
    carForUpdate: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({ page }, thunkAPI) => {
        try {
            const { data } = await carService.getAll(page);
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
            thunkAPI.dispatch(getAll({ page: 1 }))
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
                const { items, prev, next } = action.payload
                state.cars = items
                state.prev = prev
                state.next = next
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, state => {
                state.loading = true
            })
})

const { reducer: carReducer, actions: { setCarForUpdate } } = carSlice;

const carActions = { getAll, create, deleteById, setCarForUpdate, updateById };

export { carActions, carReducer }
