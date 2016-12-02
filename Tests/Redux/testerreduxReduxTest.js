import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/testerreduxRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.testerreduxRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.testerreduxSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.testerreduxFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
