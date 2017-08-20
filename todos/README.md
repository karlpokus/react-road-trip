# Things to learn
- [x] presentational vs container components
- [x] redux
- [x] mapStateToProps
- [x] mapDispatchToProps
- [x] reducers
- [x] split reducers
- [x] store
- [ ] async + thunk
- [ ] redux middleware
- [ ] [reselect](https://github.com/reactjs/reselect)

# data lifecycle
1. `store.dispatch(action)`
2. redux store calls the root reducer (may contain several reducers) into a single state tree
3. redux store saves the complete state tree
