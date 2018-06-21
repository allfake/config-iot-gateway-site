<template>
  <div>
    <div v-bind:class="serverDownModelClassObject" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <header class="modal-card-head">
          <p class="modal-card-title">Server error</p>
        </header>
        <section class="modal-card-body">
          

        <pre class="yukkuri">
                へ-ﾍ　　　／￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣＼
               ﾐ*´ｰ｀ﾐ　＜　　　　Please contact Admin, nya~|
             ／　　　　|　　＼＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿／
            / 　　　   |                                  
           / "⌒ヽ | ｲ  |                                  
      ＿＿ |　　　.ノ | | | |＿＿                            
         ノく＿＿つ∪∪　　  ＼                                
        （（＿＿＿＿＿＿＿＿_   ＼                            
     ￣￣ヽつ￣￣￣￣￣￣ | |￣                               
      ＿＿＿＿＿＿＿＿＿__| |                                
                         | |                                 
        </pre>
        </section>
      </div>
    </div>

    <div v-bind:class="deleteModelClassObject" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <header class="modal-card-head">
          <p class="modal-card-title">Confirm delete</p>
          <button class="delete" v-on:click="CancelDeletePopup" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="level-item">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <a class="button" v-on:click="CancelDeletePopup">Cancel</a>
              </p>
              <p class="control">
                <a class="button is-danger" v-on:click="DeleteConfig">Delete</a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <button v-on:click="CancelDeletePopup" class="modal-close is-large" aria-label="close"></button>
    </div>
    <section class="hero is-primary">
      <div class="mqtt hero-body">
        <div class="container">
          <h1 class="title">
            Mqtt Config
          </h1>
        </div>
      </div>
    </section>

    <div class="config container">

      <br/>
      <div class="level">
        <div class="field level-item" v-if="showAddNewConfig == false">
          <div class="control">
            <button class="button is-info is-outlined" v-on:click="showAddNewConfig = true">Add new mqtt</button>
          </div>
        </div>
      </div>

      <form v-on:submit.prevent v-if="showAddNewConfig" class="form-add">
        <br/>
        <label class="label">Add new mqtt config</label>
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('connection') }}</label>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model.trim="mqttConfig.connection" class="input is-small" type="text" placeholder=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('address') }}</label>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model.trim="mqttConfig.address" class="input is-small" type="text" placeholder=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('remote_username') }}</label>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model.trim="mqttConfig.remote_username" class="input is-small" type="text" placeholder=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('remote_password') }}</label>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model.trim="mqttConfig.remote_password" class="input is-small" type="text" placeholder=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('remote_clientid') }}</label>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model.trim="mqttConfig.remote_clientid" class="input is-small" type="text" placeholder=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('topic') }}</label>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model.trim="mqttConfig.topic" class="input is-small" type="text" placeholder=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <a class="button is-light" v-on:click="showAddNewConfig = false">Cancel</a>
            </p>
            <p class="control">
              <a class="button is-primary" v-on:click="AddConfig(mqttConfig)">Add new mqtt config</a>
            </p>
        </div>
        <br/>
      </form>

      <div v-for="(m, index) in mqttConfigList">
        <div v-if="!m.isEdit">
          <br/>
          <span>
            <p class="label">Mqtt config <a type="checkbox" v-on:click="m.isEdit = true">Edit</a></p>
          </span>
          <br/>
          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">{{ TitleLabel('connection') }}</label>
            </div>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input readonly v-model="m.connection" class="input is-small" type="text" placeholder=""/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">{{ TitleLabel('address') }}</label>
            </div>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input readonly v-model="m.address" class="input is-small" type="text" placeholder=""/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">{{ TitleLabel('remote_username') }}</label>
            </div>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input readonly v-model="m.remote_username" class="input is-small" type="text" placeholder=""/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">{{ TitleLabel('remote_password') }}</label>
            </div>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input readonly v-model="m.remote_password" class="input is-small" type="text" placeholder=""/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">{{ TitleLabel('remote_clientid') }}</label>
            </div>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input readonly v-model="m.remote_clientid" class="input is-small" type="text" placeholder=""/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">{{ TitleLabel('topic') }}</label>
            </div>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input readonly v-model="m.topic" class="input is-small" type="text" placeholder=""/>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div v-if="m.isEdit">
          <br/>
          <form v-on:submit.prevent class="form-edit">
            <br/>
            <label class="label">Edit config</label>
            <div class="field is-horizontal">

              <div class="field-label">
                <label class="label">{{ TitleLabel('connection') }}</label>
              </div>

              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input is-small" type="text" placeholder="" :ref="'connection' + index" v-bind:value="m.connection"/><br/>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">

              <div class="field-label">
                <label class="label">{{ TitleLabel('address') }}</label>
              </div>

              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input is-small" type="text" placeholder="" :ref="'address' + index" v-bind:value="m.address"/><br/>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">

              <div class="field-label">
                <label class="label">{{ TitleLabel('remote_username') }}</label>
              </div>

              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input is-small" type="text" placeholder="" :ref="'remote_username' + index" v-bind:value="m.remote_username"/><br/>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">

              <div class="field-label">
                <label class="label">{{ TitleLabel('remote_password') }}</label>
              </div>

              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input is-small" type="text" placeholder="" :ref="'remote_password' + index" v-bind:value="m.remote_password"/><br/>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">

              <div class="field-label">
                <label class="label">{{ TitleLabel('remote_clientid') }}</label>
              </div>

              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input is-small" type="text" placeholder="" :ref="'remote_clientid' + index" v-bind:value="m.remote_clientid"/><br/>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">

              <div class="field-label">
                <label class="label">{{ TitleLabel('topic') }}</label>
              </div>

              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input is-small" type="text" placeholder="" :ref="'topic' + index" v-bind:value="m.topic"/><br/>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <a class="button is-light" v-on:click="m.isEdit = false">Cancel</a>
                </p>
                <p class="control">
                  <a class="button is-primary" v-on:click="UpdateConfig(index)">Update</a>
                </p>
                <p class="control">
                  <a class="button is-danger" v-on:click="PopupDelete(index)">Delete</a>
                </p>
            </div>
            <br/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MqttConfig',
  props: {

  },
  computed: {
    serverDownModelClassObject: function () {
      return {
        "is-active" : this.isServerError
      }
    },
    deleteModelClassObject: function () {
      return {
        "is-active" : this.showConfireDelete
      }
    },
  },
  mounted() {
    this.$http.get('http://localhost:8000/api/v1/mqtt/config').then(response => {

      var body = response.body;
      console.log(body)

      for (var i = body.length - 1; i >= 0; i--) {
        var objectBody = JSON.parse(body[i]);
        body[i] = objectBody;
        body[i].isEdit = false;
      }

      this.mqttConfigList = body;

    }, response => {
      this.isServerError = true;
      console.log("error");
    });
  },
  methods: {
    CancelDeletePopup: function() {
      this.needDeleteIndex = "";
      this.showConfireDelete = false;      
    },
    PopupDelete: function(index) {
      this.showConfireDelete = true;
      this.needDeleteIndex = index;
    },
    TitleLabel: function(title) {
      var replaceTitle = title.replace(new RegExp('_', 'g'), " ");
      return replaceTitle.charAt(0).toUpperCase() + replaceTitle.slice(1);
    },
    UpdateConfig: function(index)
    {
      var connectionRef = "connection" + index;
      var addressRef = "address" + index;
      var remote_usernameRef = "remote_username" + index;
      var remote_passwordRef = "remote_password" + index;
      var remote_clientidRef = "remote_clientid" + index;
      var topicRef = "topic" + index;

      var updateConfig = {};

      updateConfig.connection = this.$refs[connectionRef][0].value.trim();
      updateConfig.address = this.$refs[addressRef][0].value.trim();
      updateConfig.remote_username = this.$refs[remote_usernameRef][0].value.trim();
      updateConfig.remote_password = this.$refs[remote_passwordRef][0].value.trim();
      updateConfig.remote_clientid = this.$refs[remote_clientidRef][0].value.trim();
      updateConfig.topic = this.$refs[topicRef][0].value.trim();
      updateConfig.f_name = this.mqttConfigList[index].f_name.trim();

      this.$http.patch('http://localhost:8000/api/v1/mqtt/config',{config: updateConfig}).then(response => {

          this.mqttConfigList[index].connection = response.body.config.connection;
          this.mqttConfigList[index].address = response.body.config.address;
          this.mqttConfigList[index].remote_username = response.body.config.remote_username;
          this.mqttConfigList[index].remote_password = response.body.config.remote_password;
          this.mqttConfigList[index].remote_clientid = response.body.config.remote_clientid;
          this.mqttConfigList[index].topic = response.body.config.topic;
          this.mqttConfigList[index].isEdit = false;

      }, response => {
        console.log("error");
      });

    },
    AddConfig: function(newConfig) {
      var newMqttConfig = {
        connection: newConfig.connection,
        address: newConfig.address,
        remote_username: newConfig.remote_username,
        remote_password: newConfig.remote_password,
        remote_clientid: newConfig.remote_clientid,
        topic: newConfig.topic,
      }

      this.$http.post('http://localhost:8000/api/v1/mqtt/config',{config: newMqttConfig}).then(response => {

          response.body.config.isEdit = false;
          this.mqttConfigList.unshift(response.body.config);
          this.showAddNewConfig = false;

      }, response => {
        console.log("error");
      });
    },
    DeleteConfig: function() {
      var index = parseInt(this.needDeleteIndex);
      this.$http.delete('http://localhost:8000/api/v1/mqtt/config/delete/' + this.mqttConfigList[index].f_name).then(response => {

          if (response.body == "Done")
          {
            var removeThisIndex = -1;
            for (var i = 0; i < this.mqttConfigList.length; i++)
            {
              if (this.mqttConfigList[i].f_name == this.mqttConfigList[index].f_name)
              {
                removeThisIndex = i;
              }
            }

            if (removeThisIndex != -1)
            {
              this.mqttConfigList.splice(removeThisIndex, 1);
            }

            this.CancelDeletePopup();
          }
          else 
          {
            console.log("error");            
          }

      }, response => {
        console.log("error");
      });
    },
  },
  data: function() {
    return {
      isServerError: false,
      needDeleteIndex: "",
      showConfireDelete: false,
      deleteConfigFName: "",
      showAddNewConfig: false,
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
.yukkuri {
  font-family: "Courier New", Courier, monospace;
}

.mqtt.hero-body
{
  padding: 1rem 1.5rem;
}
.form-add {
  background: #0000; border: 2px solid transparent; border-image:linear-gradient(to right, #f0f 0px, #f0f 128px, #fff 80px, #fff 136px, #0ff 136px, #0ff 100% ); border-image-slice: 1;
}

.form-edit {
  background: #0000; border: 2px solid transparent; border-image:linear-gradient(to right, #feffc0 0px, #feffc0 128px, #fff 80px, #fff 136px, #0ff 136px, #0ff 100% ); border-image-slice: 1;
}

</style>
