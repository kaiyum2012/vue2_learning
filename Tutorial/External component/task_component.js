

Vue.component('task-list',{
  name:'task-list',
  template:`
  <div>
    <task v-for="task in tasks">{{ task.description }}</task>
  </div>
  `,
  data(){
    return{
      tasks:[
      { id : 1,description: "hey therehey therehey therehey therehey therehey therehey therehey therehey therehey therehey therehey there" },
      { id : 2,description: "hey there" },
      { id : 3,description: "hey there" },
      { id : 4,description: "hey there" },
      { id : 5,description: "hey there" },
      { id : 6,description: "hey there" },
      { id : 7,description: "hey there" },
      { id : 8,description: "hey there" },
      ],
    }
  }
});

// Vue.component('incomplete-task-list',{
//   name:'incomplete-task-list',
//   template:`
//   <ol>
//     <task v-for="task in tasks">{{ task.description }}</task>
//   </ol>
//   `,


// });


Vue.component('task',{
  name:'task',
  template:`
    
    <div @click="toggleState"class="w3-panel w3-card-4 w3-yellow"><slot></slot></div>
  `,
  data(){
    return {
      isCompleted :false
    }
  },
  methods:{
    toggleState(){
      if(this.isCompleted){
        this.isCompleted = false;
      }else{
        this.isCompleted = true;
      }
    }
  }
});

var app = new Vue({
  el:"#app",
  mounted(){
      console.log("app is mounted");
  }
});