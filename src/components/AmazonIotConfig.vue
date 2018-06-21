<template>
  <div class="hello">
    <div v-for="(m, index) in mqttConfigList">
      <div v-if="!m.isEdit">
        <span> {{m.connection}} </span><br/>
        <span> {{m.address}} </span><br/>
        <span> {{m.remote_username}} </span><br/>
        <span> {{m.remote_password}} </span><br/>
        <span> {{m.remote_clientid}} </span><br/>
        <span> {{m.topic}} </span><br/>
        <input type="checkbox" v-model="m.isEdit">
      </div>
      <div v-if="m.isEdit">
        <input :ref="'connection' + index" v-bind:value="m.connection"/><br/>
        <input :ref="'address' + index" v-bind:value="m.address"/><br/>
        <input :ref="'remote_username' + index" v-bind:value="m.remote_username"/><br/>
        <input :ref="'remote_password' + index" v-bind:value="m.remote_password"/><br/>
        <input :ref="'remote_clientid' + index" v-bind:value="m.remote_clientid"/><br/>
        <input :ref="'topic' + index" v-bind:value="m.topic"/><br/>
        <button v-on:click="m.isEdit = false">Cancel</button>
        <button v-on:click="UpdateConfig(index)">Submit</button>

      </div>
    </div>

    input form 1 <br/>
    <input v-model="mqttConfig.connection"/><br/>
    <input v-model="mqttConfig.address"/><br/>
    <input v-model="mqttConfig.remote_username"/><br/>
    <input v-model="mqttConfig.remote_password"/><br/>
    <input v-model="mqttConfig.remote_clientid"/><br/>
    <input v-model="mqttConfig.topic"/><br/>

    <button v-on:click="AddConfig(mqttConfig)">Submit</button>
  

  </div>
</template>

<script>
export default {
  name: 'AmazonIot',
  props: {

  },
  mounted() {
    // this.$http.get('data',{url: "zzzz"}).then(response => {

    //   this.someData = response.body;

    // }, response => {
    //   console.log("error");
    // });
  },
  methods: {
    UpdateConfig: function(index)
    {
      var connectionRef = "connection" + index;
      var addressRef = "address" + index;
      var remote_usernameRef = "remote_username" + index;
      var remote_passwordRef = "remote_password" + index;
      var remote_clientidRef = "remote_clientid" + index;
      var topicRef = "topic" + index;

      this.mqttConfigList[index].connection = this.$refs[connectionRef][0].value;
      this.mqttConfigList[index].address = this.$refs[addressRef][0].value;
      this.mqttConfigList[index].remote_username = this.$refs[remote_usernameRef][0].value;
      this.mqttConfigList[index].remote_password = this.$refs[remote_passwordRef][0].value;
      this.mqttConfigList[index].remote_clientid = this.$refs[remote_clientidRef][0].value;
      this.mqttConfigList[index].topic = this.$refs[topicRef][0].value;
      this.mqttConfigList[index].isEdit = false;
    },
    AddConfig: function(newConfig) {
      var newMqttConfig = {
        connection: newConfig.connection,
        address: newConfig.address,
        remote_username: newConfig.remote_username,
        remote_password: newConfig.remote_password,
        remote_clientid: newConfig.remote_clientid,
        topic: newConfig.topic,
        isEdit: false
      }
      this.mqttConfigList.push(newMqttConfig);
    },
  },
  data: function() {
    return {
      message: 'Hello Vue!',
      mqttConfigList : [],
      mqttConfig: {
        connection: "",
        address: "",
        remote_username: "",
        remote_password: "",
        remote_clientid: "",
        topic: "",
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
