<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <ActionItem @tap="onCancelButtonTap" position="left">
           </ActionItem>
        </ActionBar>
        <StackLayout>
                <Label text="1. Scan strekkoden" horizontalAlignment="center" />
                <MLKitBarcodeScanner
                    width="100%"
                    height="300"
                    formats="QR_CODE, EAN_8, EAN_13"
                    processEveryNthFrame="10"
                    preferFrontCamera="false"
                    @scanResult="onScanResult">
                </MLKitBarcodeScanner>
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
                let barcodes = event.value.barcodes;
                if(barcodes.length > 0){
                    this.labelText = barcodes[0].format + ": " + barcodes[0].value;
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
