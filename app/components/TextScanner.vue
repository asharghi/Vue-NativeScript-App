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
                    height="350"
                    preferFrontCamera="false"
                    @scanResult="onScanResult">
                </MLKitTextRecognition>
                <Label :text="labelText" textWrap="true" horizontalAlignment="center" />
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
               let comp = this;
               if(event && event.value && event.value.blocks && event.value.blocks.length > 0){
                    let tempLabel = "";
                    event.value.blocks.forEach(function(element) {
                        tempLabel += element.text + "\n";
                    });
                    comp.labelText = tempLabel;
               }
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
