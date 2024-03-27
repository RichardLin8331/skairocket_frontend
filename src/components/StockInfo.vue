<template>
    <h2>{{ stocknum }}</h2>
</template>

<script>
export default {
    data() {
        return {
            stocknum : this.$route.params.stocknum
        }
        
    }
}
</script>