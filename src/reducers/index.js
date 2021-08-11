

const initState = {};

const repoReducer = (state=initState, action) => {
    switch(action.type) {
        case 'LOAD_REPOS':
            return ({...state, repos         })
    }

}