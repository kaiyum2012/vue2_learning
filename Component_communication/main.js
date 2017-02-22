window.Event = new Vue();

window.EventBus = new class{

	constructor(){
		this.vue = new Vue();
	}

	fire(event,data=null){
		this.vue.$emit(event,data);
	}

	listen(event,callback){
		this.vue.$on(event,callback);
	}
};

Vue.component('notification',{
	props:{
		id:{require: true},
		data: ''
	},
	template:`
	<div>
		<div class="container" v-show="id == 1">
			<div class="notification is-primary">
  				<button class="delete" @click="close"></button>
				 Hey you done it ! calling from section --> {{ id }} and sending me {{ data }} huhhhh!
			</div>
		</div>
		<div class="container" v-show="id == 2">
			<div class="notification is-primary">
  				<button class="delete" @click="close1"></button>
				 Hey you done it ! calling from section --> {{ id }} and sending me {{ data }} huhhhh!
			</div>
		</div>
		<div class="container" v-show="id == 3">
			<div class="notification is-primary">
  				<button class="delete" @click="close2"></button>
				Hey you done it ! calling from section --> {{ id }} and sending me {{ data }} huhhhh!
			</div>
		</div>
	</div>	
	`,
	data(){
		return{
			
		}
	},
  methods:{
   close:function(){
   		this.$emit('toggle');
   },
   close1:function(){
   		Event.$emit('notification',null);
   },
   close2:function(){
   		EventBus.fire('notification',null);
   }
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
		if(this.value == 'undefine' || this.value == null) return;
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
			Event.$emit('notification',this.value);
		}
	},
	mounted(){
		console.log("child-component1 is mounted");
	}
});

Vue.component('child-component2',{
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
			EventBus.fire('notification',this.value);
		}
	},
	mounted(){
		console.log("child-component1 is mounted");
	}
});



var app = new Vue({
	el:'#app',
	data:{
		isNotified:false,
		callerId :null,
		injectedData : ''
	},
	methods:{
		//  this is for child-component
		parentHandlingEventForInput:function(data){
			this.callerId = 1;
			this.isNotified = !this.isNotified;
			this.injectedData = data;
			// console.log("yeah i'm listing child-component, You send me " + data + "And notification status is =" + this.isNotified );
		}
	},
	created(){
		// this is for handling child-component1 events using Shaed EVENT vue instance
		Event.$on('notification',function(data){
			app.callerId = 2;
			app.isNotified = !app.isNotified; // Important --> refer to 'app' rather then 'this'
			app.injectedData = data;
			// console.log("yeah i'm listing child-component1, You send me " + data + "And notification status is = " + app.isNotified );
		});

		// this is for handling child-component2 events using EVENTBUS vue wrapper
		EventBus.listen('notification',function(data){
			app.callerId = 3;
			app.isNotified = !app.isNotified; // Important --> refer to 'app' rather then 'this'
			app.injectedData = data;
			// console.log("yeah i'm listing child-component1, You send me " + data + "And notification status is = " + app.isNotified );
		});
	}
});






