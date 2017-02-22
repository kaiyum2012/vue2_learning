//  TODO :: 
//  1) add function to delete(x) button
//  2) Add little bit extra configration to make it more practical
Vue.component('model',{
	props:{
		
	},
	template:`
	<div v-show="isActive">
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title"> 
				<!-- here is named slot - "header" with default text -->
				<slot name="header"> header  </slot>			      	      	
		      </p>
		      <button class="delete" @click="close"></button>
		    </header>
		    <section class="modal-card-body">
		      <!-- Content with default slot... -->
		     	<slot> Here is some default Content can be over wrriten by user. </slot>
		    </section>
		    <footer class="modal-card-foot">
		      <slot name="footer">
		      	<a class="button is-success">Okay</a>
		      </slot>
		    </footer>
		  </div>
		</div>
	</div>
	`
	,
	data(){
		return{
			isActive: true //make model visible default
		}
	},
  methods:{
  	close:function(){
  		this.isActive = false;
  	}
  }
});	

var app = new Vue({
	el:'#app',
	data:{
		
	},
	methods:{
		
	},
	created(){
		
	}
});






