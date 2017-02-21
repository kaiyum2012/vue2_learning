Vue.component('incomplete-tasks',{
	template:`<div>
	<li v-for="task in incompleteTasks" title="click me to mark as done" @click="markAsDone" :data-id="task.id" >
	{{ task.description }}
	</li><div>`,

	data(){
		return {
		 newtask: null,
		 tasks:[],
		}
	},
	methods:{
 		addTask: function(){
        event.preventDefault();
        console.log("here");
          if(this.newtask){
            var arr = this.tasks.map(function(task){
              return task.id
            });
            var id = 0;  

            if(arr.length == 0){
              id = 1;
            }else{
              id = Math.max.apply(null,arr) + 1;
            }
          var newtask = { id : id , description:this.newtask,completed:false};
          
          this.tasks.push(newtask);
          this.newtask='';
         }
      },
      markAsDone: function($event){
       var task_id = $event.target.attributes["data-id"].value;
       console.log(task_id);
       this.tasks.filter(function(task){
          task.id == task_id ? task.completed = true : ''
       }); 
      },
      markAsUnDone: function($event){
       var task_id = $event.target.attributes["data-id"].value;
       console.log(task_id);
       this.tasks.filter(function(task){
          task.id == task_id ? task.completed = false : ''
       }); 
      }
	},
	computed:{
      incompleteTasks: function () {
         return this.tasks.filter(function(task){
          return !task.completed ? task : '';
         });
       },
      completeTasks: function () {
         return this.tasks.filter(function(task){
          return task.completed ? task : '';
         });
       }       
    }

});

var app = new Vue({
	el:"#app"
});