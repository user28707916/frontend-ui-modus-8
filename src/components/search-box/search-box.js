export default {
	data() {
		return {
			shown: false
		};
	},
	methods: {
		toggle() {
			this.shown = !this.shown;
		}
	}
};
