<template>
    <main class="flex flex-col items-center h-450 relative top-0 right-0">
        <div class="w-full min-h-screen relative flex flex-col gap-8 items-center justify-center p-4">
            <div
                class="absolute top-0 left-0 -z-1 h-full w-full bg-cover blur-[1px] brightness-70 bg-center bg-no-repeat bg-[url('../assets/images/HomeView/HomeViewBackGround.jpg')]">
            </div>
            <div class="relative z-1 text-5xl font-extralight">
                <h2 class="uppercase text-white border-b">Bem vindo ao Hotel Três Amigos</h2>
            </div>
            <div class="flex relative text-white gap-12 items-center justify-center text-l max-w-sceen">
                <button
                    class="border-white border hover:shadow-xs hover:shadow-white hover:bg-[#bad1cd] uppercase p-2 rounded w-46 transition-all delay-100">
                    Faça um tour →
                </button>
                <button
                    class="border-white border hover:shadow-xs hover:shadow-white hover:bg-[#bad1cd] uppercase p-2 rounded w-46 transition-all delay-100">
                    Entrar →
                </button>
            </div>
        </div>
        <div class="bg-[#343532] w-2xl min-h-26 -mt-4 relative flex max-w-screen">
            <div class="flex text-white w-full justify-center items-center *:flex-1 *:text-center shadow">
                <div>
                    <h2>Check-in</h2>
                    <div><i class="fa fa-calendar" aria-hidden="true"></i></div>
                </div>
                <div>
                    <h2>Garagem</h2>
                    <div><i class="fa fa-car" aria-hidden="true"></i></div>
                </div>
                <div>
                    <h2>Quarto</h2>
                    <div><i class="fa fa-building" aria-hidden="true"></i></div>
                </div>
                <div>
                    <h2>Pessoas</h2>
                    <div><i class="fa fa-user" aria-hidden="true"></i></div>
                </div>
                <div class="bg-[#f2d1c9] h-full w-full flex flex-col justify-center *:font-bold">
                    <h2>Cheque</h2>
                    <h2 class="-mt-1">Disponibilidade</h2>
                </div>
            </div>
        </div>
        <h1 class="mt-8 text-3xl font-light tracking-wide">
            Nossas acomodações para voce!
            <i class="pi pi-angle-down"></i>
        </h1>
        <div class="w-230 min-w-min">
            <Carousel :value="carouselImages" :responsive-options="responsiveOptions" class="h-full w-full">
                <template #item="slotProps">
                    <div class=" dark:border-surface-700 rounded m-2 p-4 w-full h-full">
                        <div class="mb-4 w-full h-full">
                            <div class="relative mx-auto w-full h-full">
                                <img :src="slotProps.data.image" class="w-full h-full object-cover rounded" />
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>

    </main>
</template>

<script setup>
import { ref } from 'vue'

const carouselImages = ref([
    { image: '/images/HomeViewCarousel/1.jpg' },
    { image: '/images/HomeViewCarousel/2.jpg' },
    { image: '/images/HomeViewCarousel/3.jpg' },
    { image: '/images/HomeViewCarousel/4.jpg' },
])

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
])
</script>