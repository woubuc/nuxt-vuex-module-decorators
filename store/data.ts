import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
	name: 'data',
	stateFactory: true,
	namespaced: true,
})
export default class DataStore extends VuexModule {

	private data : string[] = ['hello world'];

	get last() {
		return this.data[this.data.length - 1];
	}

	@Mutation
	addData(item: string) {
		this.data.push(item);
	}
}
