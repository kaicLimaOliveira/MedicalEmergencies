<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="team, index in teams" :key="index">
                <Equipe :data="team" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import Equipe from "./Team.vue"

const store = useStore()
const teams = computed(() => store.state.teams)

</script>