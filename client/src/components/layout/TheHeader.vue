<template>
    <div class="max-w-screen  w-full sticky">
        <div class="flex flex-col h-full w-full top-0 left-0  shadow shadow-white">
            <section class="flex px-20 py-1 gap-4 text-[10px] bg-[#343532] font-extralight text-white">
                <h3 class="">(XX)-9XXXX-XXXX</h3>
                <h3>test@email.com</h3>
            </section>
            <header class="h-full bg-white px-20 flex flex-1 justify-between items-center">
                <div class="h-full flex items-center">
                    <div class="flex flex-col justify-center items-center max-h-max max-w-min border-b">
                        <h2 class="font-[Roboto Mono] tracking-[10px] font-thin text-2xl text-black">Três</h2>
                        <h2 class="font-[Roboto Mono] tracking-[10px] font-thin text-2xl text-[#8b56a5]">amigos</h2>
                    </div>
                </div>
                <nav class="flex justify-center gap-12 *:text-black">
                    <ul class="flex justify-center gap-8 font-light">
                        <li class="hover-effect-7">Página Inicial</li>
                        <li class="hover-effect-7">Quartos</li>
                        <li class="hover-effect-7">Contate-nos</li>
                        <li class="hover-effect-7">Sobre nós</li>
                        <li class="hover-effect-7">Avaliações</li>
                    </ul>
                    <router-link to="/login" className="content-center">Login</router-link>
                    <!-- <button @click="console.log('oi')">Login</button> -->
                </nav>
            </header>
        </div>
    </div>
</template>

<script setup></script>