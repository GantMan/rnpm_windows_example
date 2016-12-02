/* ***********************************************************
* Wiring Instructions
* To make this test work, you'll need to:
*  - Add a Fixture named gettester2saga to the
*    ./App/Services/FixtureApi file. You can just keep adding
*    functions to that file.
*************************************************************/

import test from 'ava'
import FixtureAPI from '../../App/Services/FixtureApi'
import { call, put } from 'redux-saga/effects'
import { gettester2saga } from '../../App/Sagas/tester2sagaSaga'
import tester2sagaActions from '../../App/Redux/tester2sagaRedux'

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', t => {
  const step = stepper(gettester2saga(FixtureAPI, {data: 'taco'}))
  // first yield is the API
  t.deepEqual(step(), call(FixtureAPI.gettester2saga, 'taco'))
})

test('success path', t => {
  const response = FixtureAPI.gettester2saga('taco')
  const step = stepper(gettester2saga(FixtureAPI, {data: 'taco'}))
  // Step 1: hit the api
  step()
  // Second step successful return and data!
  t.deepEqual(step(response), put(Tester2sagaActions.tester2sagaSuccess(21)))
})

test('failure path', t => {
  const response = {ok: false}
  const step = stepper(gettester2saga(FixtureAPI, {data: 'taco'}))
  // Step 1: hit the api
  step()
  // Second step failed response
  t.deepEqual(step(response), put(Tester2sagaActions.tester2sagaFailure()))
})
