<template>
       <b-container class="bv-example-row" id="r1">
          
        <b-form @submit = "onSubmit" @reset = "onReset" v-if = "show" class="pt-2 pb-2">
          <h3>CONTACT US</h3>
          <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model= "form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
        
        <b-form-group id="textarea-1" label="Your Message:" label-for="textarea">
              <b-form-textarea
                  id="textarea"
                  v-model= "text"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
              ></b-form-textarea>

         </b-form-group>

      <b-button type="submit" variant="dark">Submit</b-button>
      
    </b-form>

       </b-container>
     
</template>

<script>
export default {
  name:'continfo',
  data(){
    return{
      form: {
          email: '',
          name: '',
          text:''
        },
        show: true
    }
  }
  ,
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
   }
}
</script>

<style lang = "scss">
   #r1{
      background-color: rgba(255, 255, 255, 0.734);
      color: grey;
      border-radius: 20px;
   }
  
</style>