import { getModule } from 'vuex-module-decorators';
import { Store } from 'vuex';

import DataStore from '~/store/data';

export let dataStore : DataStore;

function initializeStores(store: Store<any>): void {
	dataStore = getModule(DataStore, store);
}

export const plugins = [initializeStores];
