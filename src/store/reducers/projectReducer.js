const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]

}

const projectReducer = (state = initState, action) => {
  if(action.type === 'CREATE_PROJECT'){
    console.log(action.project);
    return state;
  }
  if(action.type === 'CREATE_PROJECT_ERROR'){
    console.log('create project error', action.err);
    return state;
  }

  return state;
}

export default projectReducer
