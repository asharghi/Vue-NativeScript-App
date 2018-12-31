import firebase from "nativescript-plugin-firebase";
import config from "./shared/firebase-config";

import Vue from "nativescript-vue";
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools);

Vue.config.silent = (TNS_ENV === 'production');

import cars from "./shared/cars/car-service";

import Start from "./components/Start";

new Vue({
    render: h => h(Start),
    created() {
        firebase.init(config).then(
            instance => {
                console.log("firebase.init done");

                cars.load().then((data) => {
                    this.cars = Object.values(data);
                })
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
