<template>
        <section class="py-12">
            <h2 class="text-4xl px-5 text-yellow-100 md:text-5xl lg:text-6xl">
                My work
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
                <div class=" bg-black/30 hover:bg-black/50 flex items-center p-6 justify-center">
                    <img class="w-24" src="./assets/images/monitor.svg" alt="Project1">
                    <div><h3 class="text-yellow-100 text-3xl p-5">Project 1</h3>
                    <p class="text-gray-500 p-5">a nice picture of her and make it clap clap clap lorem isum yes or no fuck you i hope you die
                    </p>
                    </div>
                </div>
                <div class=" bg-black/30 hover:bg-black/50  flex items-center p-6 justify-center">
                    <img class="w-24" src="./assets/images/monitor.svg" alt="Project1">
                    <div><h3 class="text-yellow-100 text-3xl p-5">Project 2</h3>
                    <p class="text-gray-500 p-5">a nice picture of her and make it clap clap clap lorem isum yes or no fuck you i hope you die
                    </p>
                    </div>                 
                </div>
                <div class=" bg-black/30 hover:bg-black/50  flex items-center p-6 justify-center">
                    <img class="w-24" src="./assets/images/monitor.svg" alt="Project1">
                    <div><h3 class="text-yellow-100 text-3xl p-5">Project 3</h3>
                    <p class="text-gray-500 p-5">a nice picture of her and make it clap clap clap lorem isum yes or no fuck you i hope you die
                    </p>
                    </div>
                </div>
            </div>
        </section>
       
    
    </template>
    
    <script setup lang="ts">
    definePageMeta({
        layout: "default",
    });
    </script>