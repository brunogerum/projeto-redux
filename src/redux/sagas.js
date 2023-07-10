import { all } from "redux-saga/effects";
import user from './user/saga'

export default function* rootSaga(){
  //função geradora function* tipo async
  return yield all([
    //yield é tipo um await
    user,

  ])
}