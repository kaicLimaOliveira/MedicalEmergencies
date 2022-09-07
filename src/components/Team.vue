<template>
    <div class="row">
        <div class="col-2" v-text="props.data.nurse"></div>
        <div class="col-2" v-text="props.data.rescuer"></div>
        <div class="col-2" v-text="props.data.doctor"></div>
        <div class="col-2" v-text="props.data.car"></div>
        <div class="col-2" v-text="props.data.telephone"></div>
        <div class="col-2" v-text="props.data.resuscitationKit"></div>
    </div>
</template>

<script setup lang="ts">

interface Props {
    data: {
        nurse?: number;
        rescuer?: string;
        doctor?: string;
        car?: string;
        telephone?: string;
        resuscitationKit?: string;
    }
}

const props = defineProps<Props>()

</script>