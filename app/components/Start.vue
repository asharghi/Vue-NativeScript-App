<template>
    <Frame>
        <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Start" horizontalAlignment="center" />
        </ActionBar>

        <Button @tap="goToSimpleScanner" text="Ta bilde scan"/>

        </Page>
    </Frame>
</template>

<script>
    import SimpleScanner from "./SimpleScanner";

    export default {
        methods: {
            goToSimpleScanner() {
                this.$navigateTo(SimpleScanner);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../app-variables';
</style>
