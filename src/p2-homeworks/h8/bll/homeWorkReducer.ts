import {UserType} from "../HW8";

type actionTypeSort = {
    type: 'sort'
    payload: string
}

type actionTypeCheck = {
    type: 'check'
    payload: number
}


export const homeWorkReducer = (state: Array<UserType>, action: actionTypeSort | actionTypeCheck): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
               const newState = state.sort(function (a: UserType,b: UserType){
                   if(a.name < b.name){
                       return  -1
                   }
                   return  0

               })
                return [...newState]
            }
            if (action.payload === 'down') {
                const newState = state.sort(function (a: UserType,b: UserType){
                    if(a.name > b.name){
                        return  -1
                    }
                    return  0

                })
                return [...newState]
            }
            // need to fix
return [...state]
        }
        case 'check': {
            // need to fix
            const newStateFilter = state.filter(person => person.age > 18)
            const newState = newStateFilter.sort(function (a: UserType,b: UserType){
                if(a.name < b.name){
                    return  -1
                }
                return  0

            })
            return [...newState]
        }
        default:
            return state
    }
}