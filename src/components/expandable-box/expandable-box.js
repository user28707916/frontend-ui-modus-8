export default {
	data() {
		return {
			expanded: true
		};
	},
	methods: {
		toggle() {
			this.expanded = !this.expanded;
		}
	}
};
