import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/tester2reduxRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.tester2reduxRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.tester2reduxSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.tester2reduxFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
