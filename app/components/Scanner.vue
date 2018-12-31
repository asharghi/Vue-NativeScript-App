<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <ActionItem @tap="onCancelButtonTap" position="left">
           </ActionItem>
        </ActionBar>

        <Label text="Her kommer scanner" horizontalAlignment="center" />

    </Page>
</template>

<script>
    import { alert } from "ui/dialogs";

    export default {
        data() {
            return {
                
            };
        },
        methods: {
            onCancelButtonTap() {
                this.$navigateBack();
            }
        }
    };
</script>

<style lang="scss">
    @import '../app-variables';
</style>
