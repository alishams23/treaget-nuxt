<template>
  <div class="h-full" style="min-height: 100%; max-height: 100%; height: 100%">
    <div
      class="d-flex flex-row h-full lg:bg-white pt-4 p-0 m-0"
      style="min-height: 100%; max-height: 100%; height: 100%"
    >
      <!--  message-->
      <div class="col-12 bg-white h-full">
        <div class="pt-5 d-block d-sm-none" />
        <div
        v-if="loadingGetMessage == true"
              class="d-flex flex-column align-items-center pt-5 mt-5"
            >
              <span class="loader" />
            </div>
        <div v-if="user == null" class="pt-5 mt-5 px-5">
          <div class="d-flex align-items-center justify-content-center">
            <div>گفت و گوی جدیدی را آغاز کنید</div>
          </div>
        </div>
        <div class="h-full">
          <div class="pt-lg-5 p-0 h-full">
            <!-- my message-->
            <div
              id="messages-list"
              style="height: 100%; overflow-y: scroll; padding-bottom: 30px"
              class="d-flex scrollBarStyleSmall flex-column justify-content-between"
            >
              <div>
             
                <div
                  v-for="data in messages"
                  
                  :key="data.id + 'message-chat-'"
                  :class="data.username == userSelf ? 'flex-row-reverse' : ''"
                  class="flex m-3 lg:items-center"
                >

                  <div class="w-8 h-8 d-none d-sm-block" />
                  <div
                    class="py-2 px-3 rounded-2xl relative h-full"
                    :class="
                      data.username == userSelf
                        ? 'text-white bg-treaget shadow-lg text-right '
                        : 'text-gray-700  shadow-lg border-t text-right relative '
                    "
                  >
                    <div>{{ data.content }}</div>
                    <div>
                      <div v-if="data.read == 'True'">
                        <svg
                          v-if="data.username == userSelf"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-check2-all"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                          />
                          <path
                            d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"
                          />
                        </svg>
                      </div>
                      <div v-else>
                        <svg
                          v-if="data.username == userSelf"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-check2"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div
                v-if="user != null && loadingGetMessage == false"
                ref="inputSendMessage"
                class="inputSendMessage px-3"
                style="position: sticky; bottom: 0px"
              >
                <div
                  v-show="user != ''"
                  class="d-flex align-items-center flex-row justify-content-between"
                >
                  <input
                    v-model="inputData"
                    placeholder="Your Message.."
                    type="text"
                    style="
                      word-break: break-all;
                      border-radius: 30px !important;
                      border-top: 1px solid #e2e8f0;
                    "
                    class="shadow-2 rtl bg-white"
                    @keyup.enter="sendMessage()"
                  >
                  <div class="d-flex align-items-center px-2">
                    <button
                      id="text-submit"
                      type="submit"
                      class="bg-gradient-blue d-flex align-items-center justify-content-center rounded-full shadow-2 w-10 h-10 text-white"
                      @click="sendMessage()"
                    >
                      <i class="fa fa-paper-plane text-white" />
                    </button>
                  </div>
                </div>
                <div class="pb-5 mb-1 d-block d-sm-none" />
              </div>
            </div>
           
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import Empty from '~/components/Empty.vue'
export default {
  components: { Empty },
  layout: 'chat',
  data () {
    return {
      test: [],
      message: [],
      messages: [],
      inputData: '',
      user: this.$route.params.user,
      username: this.$route.params.username,
      userSelf: this.$store.state.username,
      scrollStatus: true,
      counter: 0,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${this.$store.state.token}`
      },
      setInterval2: null,
      setInterval3: null,
      loadingGetMessage: false,
      chatSocket: null
    }
  },
  mounted () {
    if (
      this.$route.params.user == null ||
      this.$route.params.roomName == null
    ) {
      if (this.$route.params.username != null) {
        
        // this.$router.push({
        //   name: 't-chat-username-loading'
        // })
      
        
        fetch(
          `https://treaget.com/api/chat/ChatRetrieve/${this.$route.params.username}/`,
          {
            headers: this.headers
          }
        )
          .then(response => response.json())
          .then((data) => {
            this.username = data.contact.username
            this.$route.params.username = this.username
            this.user = data.contact
            this.$route.params.user = this.user
            this.roomName = data.room_name
            this.$route.params.roomName = this.roomName
            this.$forceUpdate(); 
            // this.$router.push({
            //   name: 't-chat-username-roomName',
            //   params: {
            //     username: data.contact.username,
            //     user: data.contact,
            //     roomName: data.room_name
            //   }
            // }
            // )
          })
      } else {
        this.slideBarActivator()
      }
    } else {
      this.connectToWebsocket(this.$route.params.roomName)
    }
  },
  beforeDestroy () {
  //   console.log(document.getElementById('wrapper').classList.contains("sidebar-active") == false)
  //   if (document.getElementById('wrapper').classList.contains("sidebar-active") == false) {
  //      this.$router.push('/t/chat')
  // }
    if (this.chatSocket != null) {
      this.chatSocket.close()
    }
  },
  methods: {
    sendMessage () {
      this.chatSocket.send(
        JSON.stringify({
          command: 'new_message',
          room_name: this.$route.params.roomName,
          message: this.inputData
        })
      )
      this.inputData = ''
    },

    scrollMessage () {
      if (this.loadingGetMessage == false) {
        const myDiv = document.getElementById('messages-list')
        myDiv.scrollTop = myDiv.scrollHeight
      }
    },
    addMessage (data) {
      this.messages.push(data)
    },slideBarActivator() {
      document.getElementById('wrapper').classList.add("sidebar-active")
    },
    connectToWebsocket (roomName) {
      this.loadingGetMessage = true
      this.chatSocket = new WebSocket(
        'wss://' + 'treaget.com' + '/ws/chat/' + roomName + '/' +  this.$store.state.token + '/'
      )

      this.chatSocket.onopen = (e) => {
        this.chatSocket.send(
          JSON.stringify({ command: 'fetch_message', room_name: roomName })
        )
      }
      this.chatSocket.onmessage = (e) => {
        const data = JSON.parse(e.data)
       
        if (data.command === 'fetch_message') {
          this.messages = data.message
          this.loadingGetMessage = false
          this.$nextTick( ()=> {
            this.scrollMessage()})
        } else if (data.command === 'new_message') {
          this.addMessage(data)
          this.$nextTick( ()=> {
          this.scrollMessage()})
          this.chatSocket.send(
          JSON.stringify({ command: 'read_message', room_name: roomName,message:data.id })
        )
        } else if (data.command === 'img') {
          this.addMessage(data)
          this.$nextTick( ()=> {
            this.scrollMessage()})
        } else if (data.command === 'read_message') {
        
          for(var i in this.messages){
            if(this.messages[i].id == data.id){
              this.messages[i].read = 'True';
              this.$forceUpdate();
            }
           }
         
        }
      }
      this.chatSocket.onclose = (e) => {
        console.error('Chat socket closed unexpectedly')
      }
    },
 
  }
}
</script>

<style scoped></style>
