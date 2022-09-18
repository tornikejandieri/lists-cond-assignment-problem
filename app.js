const app = Vue.createApp({
  data(){
    return{
      input: '',
      listItem: [],
      buttonName: 'Hide',
      isClicked: true
    }
  },
  methods:{
    add(){
      this.listItem.push(this.input)
    },
    hide(){
      this.isClicked = !this.isClicked
      this.isClicked ? this.buttonName = 'Hide' : this.buttonName = 'Show'

    }
  }

})
app.mount('#assignment')