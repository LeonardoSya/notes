```js
// Action Type
const DELETE_TODO = 'posts/deleteTodo';
// Action
{
    type: DELETE_TODO,
    payload: id, // optional
}

// Action creators
// a function returns an action
const deleteTodo = (id) => (
    {type:DELETE_TODO, payload: id}
)

// Reducer
// a function, immutable and always returns a copy of the entire state
const initialState = {
    todos: [
        { id: 1, text: 'Eat' },
        { id: 2, text: 'Sleep' },
    ],
    loading: false,
    hasErrors: false,
}
function todoReducer(state = initialState, action) {
    switch(action.type) {
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id!== action.payload),
            }
        default:
            return state
    }
}

// Store
// where state lives in, initialized with a reducer, <Provider> wrap the application, anything within the Provider can have access to Redux
const store = createStore(todoReducer)
render(
    <Provider store={store}>
    ...</Provider>
    document.getElenemtById('root')
)

// Dispatch
// a method on the store object that accepts an object which is used to **update** the Redux state.
// dispatch is the result of invoking an action creator.
const Component = ({dispatch}) => {
    useEffect(() => {
        dispatch(deleteTodo())
    }, [dispatch])
}

