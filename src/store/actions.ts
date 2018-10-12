import { ActionTree } from 'vuex';
import test from '../services/index';

const actions: ActionTree<any, any> = {
  async test({ commit }, data) {
    const res: any = await test.test(data);
    if (res) {
      commit('test', res);
    }
  }
};

export default actions;
