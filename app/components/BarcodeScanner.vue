<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <ActionItem @tap="onCancelButtonTap" position="left">
           </ActionItem>
        </ActionBar>
        <StackLayout>
                <Label text="1. Scan strekkoden" horizontalAlignment="center" />
                <!-- formats="QR_CODE, EAN_8, EAN_13" -->
                <MLKitBarcodeScanner
                    width="100%"
                    height="300"
                    processEveryNthFrame="20"
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
                    this.labelText = JSON.stringify(barcodes)

                    alert({
                        title: "Barcode Scanned!",
                        message: "",
                        okButtonText: "Lukk"
                    }).then(() => {
                        console.log("Alert dialog closed");
                    });

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
