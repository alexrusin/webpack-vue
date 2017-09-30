
window.Event = new Vue();


Vue.component('coupon',{

	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied" v-model="couponCode">',

	data() {
		return {
			couponCode: ''
		};
	},

	methods: {
		onCouponApplied() {
			this.$emit('applied', this.couponCode);
		}
	}
});

Vue.component('click-btn', {

	template: '<button class="button" @click="submitCoupon" v-text="btnText"></button>',

	data() {
		return {
			btnText: 'Submit Coupon'
		};
	},

	methods: {
		submitCoupon() {
			Event.$emit('submitted');
		}
	}
});

Vue.component('progress-view', {
	data() {
		return {
			completeRate: 10
		};
	}
});

new Vue({

	el: root,

	data: {
		showApplied: false
	},

	methods: {
		onCouponApplied(code) {
			alert('It was applied ' + code);
			this.showApplied = true;
		}
	},

	created() {
		Event.$on('submitted', ()=> {
			alert('Coupon Submitted!');
		});
	}
});


