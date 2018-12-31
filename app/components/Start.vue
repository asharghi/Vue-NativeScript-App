<template>
    <Frame>
        <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Start" horizontalAlignment="center" />
        </ActionBar>

        <Button @tap="goToScanner" text="Go to scanner"/>

        </Page>
    </Frame>
</template>

<script>
    import Scanner from "./Scanner";

    export default {
        methods: {
            goToScanner() {
               // this.$navigateTo(Scanner, { props: { car: e.item } });
                this.$navigateTo(Scanner);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../app-variables';
</style>
