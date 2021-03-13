import { call, put } from 'redux-saga/effects'
import { requestGetUser } from '../requests/user'

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser)
    const { data } = response
  } catch (error) {
    console.log(error)
  }
}
