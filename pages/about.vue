<template>
<div class=" w-auto flex px-24 justify-center relative">
    
    <div  class="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
        <div class="mr-10">
           <img
             class="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
             src="./assets/images/PinoUB.jpg"
             alt="image of myself"
           />
        </div>
        <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
    <h1 class="text-white font-bold text-3xl mt-6 mb-8">
      Hey it's me, Wildan Aridh Takhfif
    </h1>

    <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
        Hi, I’m Wildan Aridh Takhfif, a student at Brawijaya University with a passion for <span class="font-bold text-yellow-100">web development</span> and programming. 
                I have experience in Python, HTML, CSS, JavaScript, PHP, MySQL, and modern frameworks like Vue.js, Nuxt.js, and 
                Next.js. I'm always eager to learn, continuously improving my skills and staying updated with the latest industry trends.
                I see every project as a chance to grow, tackle new challenges, and expand my knowledge in the ever-evolving world of technology.
    </p>

    <div id="social" class="flex flex-wrap justify-start items-center gap-4">
      <a rel="noopener" target="_blank" href="https://github.com/pinoivceu" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
          <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
          <span>Visit my Github</span>
      </a>
      <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/wildan-takhfif-593503245" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
          <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg" width="20px" height="20px" alt="LinkedIn" />
          <span>Follow me on Linkedin</span>
      </a>
      <a rel="noopener" target="_blank" href="https://www.instagram.com/pino.ivceuxee/" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
          <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="./assets/images/instagram-1-svgrepo-com.svg " width="20px" height="20px" alt="Twitter" />
          <span>Follow me on Instagram</span>
      </a>
  </div>
        </div>
    </div>
  </div>
   

</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});
</script>