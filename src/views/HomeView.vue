<template>
    <b-container fluid="sm" style = "max-width:90%">
        <h1>skAIrocKet Home Page</h1>
        <b-row>
            <b-col>
                <TrendList></TrendList>
            </b-col>
            <b-col>
                <h2>ABOUT</h2>
                <b-img src="@/assets/pictures/AIrocket.png" fluid-grow alt="Responsive image"></b-img>
                <p>
                    skAIrocKet aims to discover stocks with high potential of energy.
                </p>
            </b-col>
            <b-col>
                <NotLoginCard></NotLoginCard>
            </b-col>
        </b-row>
        
    </b-container>
    
</template>

<script>
import TrendList from "@/components/TrendList.vue";
import NotLoginCard from "@/components/NotLoginCard.vue";

export default { 
    components: { TrendList, NotLoginCard },
    
}
</script>