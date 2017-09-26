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
			visible: 'is-active'
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

var app = new Vue({

	el: '#root',

	data: {
		showModal: false
	}



});