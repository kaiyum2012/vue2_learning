window.Event = new Vue();

Vue.component('notification',{
	template:`
		<div class="container">
			<div class="notification is-primary">
  				<button class="delete" @click="$emit('hideNotification')"></button>
				 Hey you done it !
			</div>
		</div>
	`,
	data(){
		return{
			isActive:true
		}
	},
  methods:{
   
  }
});	


Vue.component('child-component',{
	template:
	`<div >
	<label class="label">Name</label>
	<p class="control">
	  <input class="input" type="text" placeholder="put some input" @blur="emitFireUpEvent" v-model:value="value"/>
	</p></div>
	`,
	data(){
		return{
			value:null
		}
	},
	methods:{
		emitFireUpEvent:function(){
			this.$emit('fireup',this.value);
		}
	},
	mounted(){
		console.log("child-component is mounted");
	}
});

Vue.component('child-component1',{
	template:
	`<div >
	<label class="label">Name</label>
	<p class="control">
	  <input class="input" type="text" placeholder="put some input" @blur="emitFireUpEvent" v-model:value="value"/>
	</p></div>
	`,
	data(){
		return{
			value:null
		}
	},
	methods:{
		emitFireUpEvent:function(){
			Event.$emit('fireup1',this.value);
		}
	},
	mounted(){
		console.log("child-component1 is mounted");
	}
});


var app = new Vue({
	el:'#app',
	data:{
		isNotified:false
	},
	methods:{
		parentListing:function(data){
			this.isNotified = true;
			console.log("yeah i'm listing, You send me this " + data);

		},

	    hideNotification:function(){
	      console.log("asdad");
	      this.isNotified = false;
	    }
	},
	created(){
		Event.$on('fireup1',function(){
			console.log("fireup1");
			this.isNotified = true;
		});

		Event.$on('hideNotification',function(){
			console.log("hideNotification");
			this.isNotified = false;
		});
	}
});



// Window.Event = new class{

// 	constructor(){
// 		this.vue = new Vue();
// 	}

// 	fire(event,data=null){
// 		this.vue.$emit(event,data);
// 	}

// 	listen(event,callback){
// 		this.vue.on(event,callback);
// 	}
// };


