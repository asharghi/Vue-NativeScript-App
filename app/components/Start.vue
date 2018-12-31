<template>
    <Frame>
        <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Start v0.03" horizontalAlignment="center" />
        </ActionBar>
        <StackLayout>
            <Button @tap="goToSimpleScanner" text="Ta bilde"/>
            <Button @tap="goToBarcodeScanner" text="Barcode Scan"/>
            <Button @tap="goToTextScanner" text="Text Scan"/>
        </StackLayout>
        </Page>
    </Frame>
</template>

<script>
    import SimpleScanner from "./SimpleScanner";
    import BarcodeScanner from "./BarcodeScanner";
    import TextScanner from "./TextScanner";

    export default {
        methods: {
            goToSimpleScanner() {
                this.$navigateTo(SimpleScanner);
            },
            goToBarcodeScanner() {
                this.$navigateTo(BarcodeScanner);
            },
            goToTextScanner() {
                this.$navigateTo(TextScanner);
            }
        },
        
    };
</script>

<style scoped lang="scss">
    @import '../app-variables';
</style>
