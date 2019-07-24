
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
var app4 = new Vue({
  el: '#app-5',
  data: {
    message: "king"
  },
  methods:{
  	reverseMessage: function(){
  		this.message = this.message.split('').reverse().join('');
  	}
  }
})
var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'hello vue'
	}
})
Vue.component('fruits',{
	props:['fruit'],
	template: '<li>{{fruit.text}}</li>'
})
var app7 = new Vue({
	el: '#app-7',
	data: {
		fruitList: [
			{text: '可以在室内种植的水果'},
			{text: '火龙果'},
			{text: '金橘'},
			{text: '番石榴'}
		]
	}
})


Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({ el: '#components-demo' })