<style lang="scss" scoped>
.card_title {
    background:linear-gradient(to right, rgba(199, 100, 229, 0.5), rgba(238, 27, 227, 0.5));
    
}
.card-body {
    background: white;
    position:relative; height:300px; 
    overflow-y:scroll; 
}
</style>

<template>
    <b-card no-body header = "Top 20 Stock" class = "card_title" >
        <b-card-body  class = "card_body">
            <b-table :items="items">
                <template #cell(Num)="data">
                    <a :href="`/stock/${data.value}`">{{ data.value }}</a>
                </template>
                <template #cell(Name)="data">
                    <p>{{data.value[0]}} <br/> {{ data.value[1] }}</p>
                </template>
            </b-table>
        </b-card-body>
    </b-card>

</template>

<script>
    export default {
        data() {
            return {
                items: [
                {Num: "2330", Name: ["TSMC","tsmc"]},
                {Num: "2330", Name: ["TSMC","tsmc"]},
                {Num: "2330", Name: ["TSMC","tsmc"]},
                {Num: "2330", Name: ["TSMC","tsmc"]},
            ]
            }
            
        }
    }

</script>