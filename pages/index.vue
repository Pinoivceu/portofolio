<template>   
    <div>
        <div class="md:pt-16 lg:pt-32"></div>
        <section class="px-12 py-12 md:px-16 lg:px-48 xl:px-72 text-yellow-100" >
        <h2 class="text-4xl md:text-5xl">I'm Wildan<br/>
            -<br>
            Sr. Software Developer
        </h2>
        <h1 class=" py-12 text-6xl md:text-[8rem] lg:text[9rem]">Crafting
            <span class="bg-gradient-to-r to-blue-900 from-yellow-100 bg-clip-text text-transparent tracking-wide">
                digital 
            </span>experiences that help
            <span  class="bg-gradient-to-r to-yellow-100 from-blue-900 bg-clip-text text-transparent tracking-wide"> 
            people.</span></h1>
        </section>

        <section class="py-12 text-yellow-100 bg-black/30  bg[radial-gradient(#ffffff33_1px, #00091d_1px)] bg-[size:20px_20px]">
            <h2 class="text-4xl text-center md:text-5xl lg:text-6xl">About me</h2>
            <p class="px-5 md:px-24 md:text-xl lg:px-48 text-lg text-gray-300">
                Hi, I’m Wildan Aridh Takhfif, a student at Brawijaya University with a passion for <span class="font-bold text-yellow-100">web development</span> and programming. 
                I have experience in Python, HTML, CSS, JavaScript, PHP, MySQL, and modern frameworks like Vue.js, Nuxt.js, and 
                Next.js. I'm always eager to learn, continuously improving my skills and staying updated with the latest industry trends.
                I see every project as a chance to grow, tackle new challenges, and expand my knowledge in the ever-evolving world of technology.
            </p>
        </section>
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


        <section class="py-10">
            <h2 class="text-2xl px-5 text-yellow-100 md:text-5xl lg:text-6xl text-center">Languanges and Framework
            </h2>
            <div class= "pd-5 py-5 flex flex-col items-center  ">
                <div class="border-2 rounded-lg lg:w-1/2  bg-black/30 border-yellow-100 px-5 py-5 border-dashed grid grid-cols-4 gap-2 ">
                    <div class="flex flex-col items-center">
                        <img class="w-12" src="./assets/images/javascript-svgrepo-com.svg" alt="Javascript icon"></img>
                        <p class="text-yellow-100">JavaScript</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img class="w-12" src="./assets/images/nuxt-svgrepo-com.svg" alt="nuxtJS icon"></img>
                        <p class="text-yellow-100">NuxtJS</p>
                    </div>
                    <div class="flex flex-col items-center" >    
                    <img class="w-12" src="./assets/images/vue-svgrepo-com.svg" alt="VueJS icon"></img>
                        <p class="text-yellow-100">VueJS</p>
                    </div>
                        <div class="flex flex-col items-center" >
                        <img class="w-12" src="./assets/images/python-svgrepo-com.svg" alt="Python icon"></img>
                        <p class="text-yellow-100">Python</p>
                        </div>    
                        <div class="flex flex-col items-center" >
                        <img class="w-12" src="./assets/images/nodejs-icon-svgrepo-com.svg" alt="NodeJS icon"></img>
                        <p class="text-yellow-100">NodeJS</p>
                        </div>
                        <div class="flex flex-col items-center" >
                        <img class="w-12" src="./assets/images/html-5-svgrepo-com.svg" alt="Html icon"></img>
                        <p class="text-yellow-100">Html</p>
                        </div>
                        <div class="flex flex-col items-center" >
                        <img class="w-12" src="./assets/images/css-3-svgrepo-com.svg" alt="Css icon"></img>
                        <p class="text-yellow-100">CSS</p>
                        </div>
                        <div class="flex flex-col items-center" >
                        <img class="w-12" src="./assets/images/mysql-svgrepo-com.svg" alt="MySql icon"></img>
                        <p class="text-yellow-100">MySQL</p>
                        </div>
                        
                      
               
            
                
                </div>
               </div>
            

        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "home",
});
</script>
