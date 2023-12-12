import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchToDo = createAsyncThunk('todo/fetchTodo', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    return data
})

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todo: {},
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchToDo.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchToDo.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.todo = action.payload
            })
            .addCase(fetchToDo.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default todosSlice.reducer