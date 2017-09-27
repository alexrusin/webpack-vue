Vue.component('task-list', {

	template: '<div><task v-for="task in tasks">{{task.description}}</task></div>',

	data() {
		return {
			tasks: [
					{description: 'Go to the store', completed: false},
					{description: 'Take the garbage', completed: true},
					{description: 'Finish lesson', completed: false},
					{description: 'Clear inbox', completed: true}
				]
			};
	}

});

Vue.component('task', {

	template: '<li><slot></slot></li>'

});

Vue.component('message',{
	props: ['title', 'body'],

	data() {
		return {
			isVisible: true
		};
	},

	template: `

		<article v-show="isVisible" class="message">
	      <div class="message-header">
	        <p>{{title}}</p>
	        <button @click="hideModal" class="delete" aria-label="delete"></button>
	      </div>
	      <div class="message-body">
	       {{body}}
	      </div>
	    </article> 
	`,

	methods: {
		hideModal() {
			this.isVisible = false;
		}
	}

});

Vue.component('my-modal', {

	data() {
		return {
			visible: 'is-active',
		};
	},
	template: `
	  <div class="modal is-active">
	    <div class="modal-background"></div>
	    <div class="modal-content">
	      <div class="box">
	        <slot></slot>
	      </div>
	    </div>
	    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
	  </div>
	`
});

Vue.component('tabs', {
	template: `
	<div>
		<div class="tabs">
		  <ul>
		     <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
		     	<a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
		     </li>
		  </ul>
		</div>

		<div class="tabs-details">
			<slot></slot>
		</div>
	</div>
	`,

	data() {
		return {
			tabs: []
		};
	},

	created() {
		this.tabs = this.$children;
	},



	methods: {
		selectTab(selectedTab){
			this.tabs.forEach((tab)=>{
				tab.isActive = (tab.name == selectedTab.name);
			});
			
		}
	}

});

Vue.component('tab',{

	props: {
		'name': {required: true},
		'selected': {default: false}
	},
	template: `
		<div v-show="isActive"><slot></slot></div>
	`,

	data() {
		return {
			isActive: false
		};
	},

	computed: {
		href() {
			return '#' + this.name.toLowerCase().replace(/ /g, '-');
		}
		
	},

	mounted() {
		this.isActive = this.selected;
	}

});

var app = new Vue({

	el: '#root',

	data: {
		showModal: false,
		showTab: true
	}

});