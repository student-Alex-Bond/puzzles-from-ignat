

const initState = {
    isLoading: false
}

type initialStateType = typeof initState

export const loadingReducer = (state: initialStateType = initState, action: loadingACType): initialStateType => { // fix any
    switch (action.type) {
        case 'VIEW_GIF': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'VIEW_GIF',
        isLoading
    }
} // fix any

type loadingACType = ReturnType<typeof loadingAC>