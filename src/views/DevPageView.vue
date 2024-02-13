<template>
    <b-container fluid="sm" style = "max-width:90%">
        <h1>skAIrocKet Home Page</h1>
        <b-row>
            <b-col>
                <TrendList></TrendList>
            </b-col>
            <b-col>
                <h2>ABOUT</h2>
                <p>
                    skAIrocKet aims to discover stocks with high potential of energy.
                </p>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</template>

<script>
import TrendList from "@/components/TrendList.vue";

export default { components: { TrendList } }
</script>