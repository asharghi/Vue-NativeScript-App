<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <ActionItem @tap="onCancelButtonTap" position="left">
           </ActionItem>
        </ActionBar>
        <StackLayout>
                <Label text="1. Scan strekkoden" horizontalAlignment="center" />
                <Image :src="imageSrc" style="width:300;height:300" />
                <Button @tap="scanImage()" text="Scan" />
        </StackLayout>
    </Page>
</template>

<script>
import { Image } from "tns-core-modules/ui/image";
import * as camera from "nativescript-camera";
    export default {
        data() {
            return {
                imageSrc: null,
            };
        },
        methods: {
            scanImage: function() {
                camera.requestPermissions();
                camera
                    .takePicture({ width: 700, height: 700, keepAspectRatio: true })
                    .then(
                    imageAsset => {
                        console.log("Result is an image asset instance");
                        this.imageSrc = imageAsset;
                    },
                    error => console.log(error)
                    )
                    .catch(err => {
                        console.log("Error -> " + err.message);
                    });
            },
            onCancelButtonTap() {
                this.$navigateBack();
            }
        }
    };
</script>

<style lang="scss">
    @import '../app-variables';
</style>
