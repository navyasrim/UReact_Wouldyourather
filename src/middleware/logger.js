const logger = (store) => (next) => (action) => {
    //shows any time new action is dispatched as well as what new state is going to be after finish dispatched
    console.group(action.type)
    //logging the action
    console.log('The action is :', action)
    //getting return value from next(action) , so that it will update the state
    const returnValue = next(action)
    //displaying the updated new state
    console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue

}

export default logger