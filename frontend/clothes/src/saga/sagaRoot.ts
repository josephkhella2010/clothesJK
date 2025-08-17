// sagaRoot.ts
import { all, fork } from "redux-saga/effects";
import { watchProductSaga } from "./ProductSaga";
import { watchFetchUserSaga, watchPostUserSaga } from "./UserSaga";
import { watchLoginUser } from "./LoginUserSaga";

export function* sagaRoot() {
  yield all([
    fork(watchProductSaga),
    fork(watchFetchUserSaga),
    fork(watchPostUserSaga),
    fork(watchLoginUser),

    // products saga
    // fork(watchOtherSaga), // other sagas here
  ]);
}
