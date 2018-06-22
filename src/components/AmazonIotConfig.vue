<template>
  <div>
<!--     <div v-bind:class="serverDownModelClassObject" class="modal">
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
 -->

    <section class="hero is-primary">
      <div class="amazonIot hero-body">
        <div class="container">
          <h1 class="title">
            Amazon Iot Config
          </h1>
        </div>
      </div>
    </section>

    <div class="config container">

      <br/>

      <div v-if="!amazonIotConfig.isEdit">
        <br/>
        <span>
          <p class="label">Amazon Iot config <a type="checkbox" v-on:click="amazonIotConfig.isEdit = true">Edit</a></p>
        </span>
        <br/>
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('topic') }}</label>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <input readonly v-model="amazonIotConfig.topic" class="input is-small" type="text" placeholder=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('client_id') }}</label>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <input readonly v-model="amazonIotConfig.client_id" class="input is-small" type="text" placeholder=""/>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('endpoint') }}</label>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <input readonly v-model="amazonIotConfig.endpoint" class="input is-small" type="text" placeholder=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('aws_certs path') }}</label>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <input readonly v-model="amazonIotConfig.aws_certs" class="input is-small" type="text" placeholder=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('Cert Root CA') }}</label>
          </div>

          <div class="field-body">
            <div class="field is-grouped">
              <p class="control">
                <p class="file">
                  <label class="file-label">
                    <input class="file-input" type="file" name="rootCA" @change="fileUploadChange($event.target.name, $event.target.files);">
                    <span class="file-cta">
                      <p class="file-label">
                        {{ uploadFileName['rootCA'] ? uploadFileName['rootCA'] : "Select file" }}
                      </p>
                    </span>
                  </label>
                </p>
              </p>
              <p class="control">
                
              </p>

              <p class="control">
                <a class="button" v-on:click="UploadFile('rootCA')">Upload</a>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('cert.pem') }}</label>
          </div>

          <div class="field-body">
            <div class="field is-grouped">
              <p class="control">
                <p class="file">
                  <label class="file-label">
                    <input class="file-input" type="file" name="cert" @change="fileUploadChange($event.target.name, $event.target.files);">
                    <span class="file-cta">
                      <p class="file-label">
                        {{ uploadFileName.cert ? uploadFileName.cert : "Select file" }}
                      </p>
                    </span>
                  </label>
                </p>
              </p>
              <p class="control">
                
              </p>

              <p class="control">
                <a class="button" v-on:click="UploadFile('cert')">Upload</a>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">{{ TitleLabel('Private key') }}</label>
          </div>

          <div class="field-body">
            <div class="field is-grouped">
              <p class="control">
                <p class="file">
                  <label class="file-label">
                    <input class="file-input" type="file" name="privateKey" @change="fileUploadChange($event.target.name, $event.target.files);">
                    <span class="file-cta">
                      <p class="file-label">
                        {{ uploadFileName.privateKey ? uploadFileName.privateKey : "Select file" }}
                      </p>
                    </span>
                  </label>
                </p>
              </p>
              <p class="control">
                
              </p>

              <p class="control">
                <a class="button" v-on:click="UploadFile('privateKey')">Upload</a>
              </p>
            </div>
          </div>
        </div>        

      </div>
      <div v-if="amazonIotConfig.isEdit">
        <br/>
        <form v-on:submit.prevent class="form-edit">
          <br/>
          <label class="label">Edit config</label>
          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">{{ TitleLabel('topic') }}</label>
            </div>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-small" type="text" placeholder="" :ref="'topic'" v-bind:value="amazonIotConfig.topic"/><br/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">{{ TitleLabel('client_id') }}</label>
            </div>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-small" type="text" placeholder="" :ref="'client_id'" v-bind:value="amazonIotConfig.client_id"/><br/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">{{ TitleLabel('endpoint') }}</label>
            </div>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-small" type="text" placeholder="" :ref="'endpoint'" v-bind:value="amazonIotConfig.endpoint"/><br/>
                  <p class="help">eg. : data.iot.us-west-2.amazonaws.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">{{ TitleLabel('aws_certs path') }}</label>
            </div>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-small" type="text" placeholder="" :ref="'aws_certs'" v-bind:value="amazonIotConfig.aws_certs"/><br/>
                  <p class="help">recommend : {{ recommend.aws_certs }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <a class="button is-light" v-on:click="amazonIotConfig.isEdit = false">Cancel</a>
              </p>
              <p class="control">
                <a class="button is-primary" v-on:click="UpdateConfig()">Update</a>
              </p>
          </div>
          <br/>
        </form>
      </div>
      <br/>
      <br/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'amazonIotConfig',
  props: {

  },
  computed: {
    serverDownModelClassObject: function () {
      return {
        "is-active" : this.isServerError
      }
    },
  },
  mounted() {
    this.$http.get(this.basePath + ':8000/api/v1/amazonIot/config').then(response => {

      var body = response.body;
      this.amazonIotConfig.topic = body.topic;
      this.amazonIotConfig.client_id = body.client_id;
      this.amazonIotConfig.endpoint = body.endpoint;
      this.amazonIotConfig.aws_certs = body.aws_certs;
      this.amazonIotConfig.isEdit = false;

    }, response => {
      this.isServerError = true;
      console.log("error");
    });

    this.$http.get(this.basePath + ':8000/api/v1/amazonIot/config/recommend').then(response => {

      this.recommend.aws_certs = response.body.aws_certs;

    }, response => {
      this.isServerError = true;
      console.log("error");
    });

  },
  methods: {
    fileUploadChange: function(fieldName, fileData) {
      this.uploadFileName[fieldName] = fileData[0].name;
      this.uploadFileData[fieldName] = fileData[0];

      this.$forceUpdate();
    },
    UploadFile: function(certType) {

      if (this.uploadFileName[certType] == '') 
      {
        return
      }

      var formData = new FormData();
      formData.append('cert', this.uploadFileData[certType], this.amazonIotConfig.topic);

      this.$http.post(this.basePath + ':8000/api/v1/amazonIot/config/certs/' + certType, 
      formData)
      .then(response => {

        this.uploadFileName[certType] = "";
        this.$forceUpdate();
        console.log("upload complete");

      }, response => {
        this.isServerError = true;
        console.log("error");
      });

    },
    TitleLabel: function(title) {
      var replaceTitle = title.replace(new RegExp('_', 'g'), " ");
      return replaceTitle.charAt(0).toUpperCase() + replaceTitle.slice(1);
    },
    UpdateConfig: function()
    {
      var topicRef = "topic";
      var client_idRef = "client_id";
      var endpointRef = "endpoint";
      var aws_certsRef = "aws_certs";

      var updateConfig = {};

      updateConfig.topic = this.$refs[topicRef].value.trim();
      updateConfig.client_id = this.$refs[client_idRef].value.trim();
      updateConfig.endpoint = this.$refs[endpointRef].value.trim();
      updateConfig.aws_certs = this.$refs[aws_certsRef].value.trim();

      this.$http.patch(this.basePath + ':8000/api/v1/amazonIot/config',{config: updateConfig}).then(response => {

        this.amazonIotConfig.topic = response.body.config.topic;
        this.amazonIotConfig.client_id = response.body.config.client_id;
        this.amazonIotConfig.endpoint = response.body.config.endpoint;
        this.amazonIotConfig.aws_certs = response.body.config.aws_certs;
        this.amazonIotConfig.isEdit = false;

      }, response => {
        this.isServerError = true;
        console.log("error");
      });

    },
  },
  data: function() {
    return {
      basePath: window.location.protocol + "//" + window.location.hostname,
      certType: "",
      privateKeyName:  "",
      certPemName: "",
      uploadFileName: {},
      privateKey: "",
      certPem: "",
      uploadFileData: {},
      isServerError: false,
      showAddNewConfig: false,
      message: 'Hello Vue!',
      recommend: {},
      amazonIotConfig: {
        topic: "",
        client_id: "",
        endpoint: "",
        aws_certs: "/root/.agent/certs",
        isEdit: false
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

.amazonIot.hero-body
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
