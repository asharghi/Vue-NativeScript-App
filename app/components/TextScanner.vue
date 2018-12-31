<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <ActionItem @tap="onCancelButtonTap" position="left">
           </ActionItem>
        </ActionBar>
        <StackLayout>
                <Label text="2. Scan tekst" horizontalAlignment="center" />
                <MLKitTextRecognition
                    width="100%"
                    height="300"
                    preferFrontCamera="false"
                    @scanResult="onScanResult">
                </MLKitTextRecognition>
                <Label :text="labelText" horizontalAlignment="center" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                labelText: "Info"
            };
        },
        methods: {
            onScanResult: function(event) {
                console.log("onScanResult: "+event);
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
