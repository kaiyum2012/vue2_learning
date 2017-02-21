
Vue.component('my-message',{
	props:['title','body'],
	template:`
	<article class="message" v-show="isVisible">
	  <div class="message-header">
	    <p>{{ title }}</p>
	    <button class="delete" @click="isVisible = false"></button>
	  </div>
	  <div class="message-body">
	    {{ body }}
	  </div>
	</article>
	`,
  data(){
      return{
        isVisible:true
      }
    }
});

Vue.component('my-model',{
  props:['body'],
  template:`
   <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        {{ body }}
        <slot></slot>
      </div> 
    </div>
    <button class="modal-close" @click="$emit('close')"></button>
  </div>
  `,
  data(){
    return{
      isVisible:true
    }
  },
  methods:{
    close:function(){
      this.isVisible = false;
    }
  }
});


Vue.component('tabs',{

  template:`
  <div>
  <div class="tabs">
    <ul>
      <li v-for='tab in tabs' :class="{'is-active': tab.isActive}">
        <a @click="setActive(tab)" :href="tab.href">{{ tab.name }}</a>
      </li>
    </ul>
  </div>
 <div class="tabs-details">
  <slot></slot>
 </div>
 <div>
  `,
  data(){
    return{
      tabs:[]
    }
  },
  methods:{
    setActive:function(selectedTab){
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  },
  mounted(){
     console.log(this.$children);
  },
  created(){
    this.tabs = this.$children;
    console.log(this.tabs);
  }
});

Vue.component('tab',{
  props:{
    name : {require: true},
    selected :{default: false}
  },
  template:`
  <div v-show="isActive">
    <slot></slot>
  </div>
  `,
  data(){
    return{
      isActive : false
    }
  },
  methods:{

  },
  computed:{
      href:function(){
        return '#' + this.name.toLowerCase().replace(/ /g,'-');
    }
  },
  mounted(){
    this.isActive = this.selected
  }
});

var app = new Vue({
		el:'#app',
		mounted(){
			console.log("mounted");
		},
    data:{
      modelVisible:false
    },
    methods:{
      ToggleModel:function(){
        if(this.modelVisible)
          this.modelVisible = false;
        else
          this.modelVisible = true;
      }
    }
		
});