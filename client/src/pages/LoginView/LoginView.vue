<template>
    <div class="grid grid-cols-2 grid-rows-[6rem_minmax(0,1fr)_50px] h-screen">
        <TheHeader class="col-span-3 z-1"></TheHeader>
        <div class="rounded-4xl">a</div>
        <div class="bg-[#f2d1c9] flex flex-col justify-center items-center gap-8">
            <div class="flex flex-col justify-center items-center">
                <h1 class="text-3xl font-bold content-center">Faça o seu Login! <i class="pi pi-chevron-down"></i> </h1>
                <h4 class="text-[.9rem] mt-4 text-white border-b max-w-max">Preencha os seus dados.</h4>
            </div>
            <div class="card flex justify-center">
                <form @submit.prevent="console.log('oi')">
                    <div v-focustrap class="w-full sm:w-80 flex flex-col gap-6">
                    
                        <IconField>
                            <InputIcon >
                                <i class="pi pi-user"></i>
                            </InputIcon>
                            <InputText class="focus:border! focus:border-black!" id="input" v-model="name" type="text" placeholder="Username/Email" autofocus fluid  />
                        </IconField>
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-envelope"></i>
                            </InputIcon>
                            <InputText class="focus:border! focus:border-black!" id="password" v-model="password" type="password" placeholder="password" fluid />
                        </IconField>
                        <div class="flex items-center gap-2">
                            <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                            <label for="accept">I agree to the terms and conditions.</label>
                        </div>
                        <Button type="submit" label="Submit" class="mt-2 border bg-[#343532]! border-white/90!"></Button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-span-3">c</div>
    </div>
</template>

<style scoped></style>

<script setup>

import TheHeader from '../../components/layout/TheHeader.vue'
import { ref } from 'vue';

const name = ref();
const password = ref();
const accept = ref(false);

</script>