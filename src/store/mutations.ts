import { State } from './state';
export default {
  test(state: State, data: any) {
    const currentState = data.data;
    state.isLoginSuccess = currentState.success;
  },
};
