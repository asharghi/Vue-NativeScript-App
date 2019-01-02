import firebase from "nativescript-plugin-firebase";
import config from "./shared/firebase-config";

import Vue from "nativescript-vue";
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools);

Vue.config.silent = (TNS_ENV === 'production');

import Start from "./components/Start";

Vue.registerElement('MLKitBarcodeScanner', () => require("nativescript-plugin-firebase/mlkit/barcodescanning").MLKitBarcodeScanner);
Vue.registerElement('MLKitTextRecognition', () => require("nativescript-plugin-firebase/mlkit/textrecognition").MLKitTextRecognition);

new Vue({
    render: h => h(Start),
    created() {
        firebase.init(config).then(
            instance => {
                console.log("firebase.init done");
            },
            error => {
                console.log(`firebase.init error: ${error}`);
            }
        );
    }
}).$start({
    getRootView(self) {
      return self.$el.nativeView;
    },
  });
