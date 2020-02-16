<template>
	<div>
		<p>{{ data.length }} items in data, last one is {{ last }}</p>
	</div>
</template>

<script>
import { dataStore } from '~/store';

export default {
	computed: {
		data() { return dataStore.data },
		last() { return dataStore.last },
	},
	mounted() {
		dataStore.addData('foo');
		setTimeout(() => dataStore.addData('bar'), 1000);
		setTimeout(() => dataStore.addData('baz'), 2000);
		setTimeout(() => dataStore.addData('last item'), 3000);
	},
}
</script>
