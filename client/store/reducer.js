const reducer = (
  previousState = { selects:null},
  action
)=>{
  let new_state = Object.assign({},previousState)
  switch(action.type){
    case 'CHANGE_SELECTS' :
    
      new_state.selects = action.payload
      return new_state
  }
  return previousState 
}


module.exports = reducer
