const initState = {
    ChangeTheme: {currentTheme: 'some'}
};

export type initStateType = typeof initState

export const themeReducer = (state: initStateType = initState, action: ChangeThemeType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, ChangeTheme: {currentTheme: action.value}};
        }

        default:
            return state;
    }
};

export const changeThemeC = (value: string): any => {return {type: 'CHANGE-THEME', value: value}};


type ChangeThemeType = ReturnType<typeof changeThemeC>
// fix any