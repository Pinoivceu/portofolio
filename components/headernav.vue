<template>
    <header class="hero min-h-1/4 bg-cover bg-top lg:bg-center xl:bg-bottom">
        <div class="pt-0 md:pt-2"></div>
        <nav class="h-10 md:w-4/5 mx-auto bg-primary rounded-2xl hover:shadow-lg hover: shadow-md shadow-blue-600 p-8 bg-opacity-30 backdrop-blur-sm">
            <ul class="flex items-center justify-around font-bold h-full text-yellow-100">
                <li>
                    <NuxtLink  class="cursor-pointer duration-500 hover:text-yellow-300" to="/" active-class="text-yellow-300">Home</NuxtLink>
                </li>
                <span class="h-8 border-2 border-yellow-100"></span>
                <li>
                    <NuxtLink  class="cursor-pointer duration-500 hover:text-yellow-300" to="/about" active-class="text-yellow-300" >About</NuxtLink>
                </li>
                <span class="h-8 border-2 border-yellow-100"></span>
                <li>
                    <NuxtLink  class="cursor-pointer duration-500 hover:text-yellow-300" to="/portofolio" active-class="text-yellow-300" >Portfolio</NuxtLink>
                </li>
                <span class="h-8 border-2 border-yellow-100"></span>
                <li>
                    <a href="/path/to/your-cv.pdf" download="Wildan_Aridh_Takhfif_CV"
   class="cursor-pointer inline-flex items-center px-4 h-8 bg-black/30 text-yellow-100 font-medium text-sm rounded-md hover:text-yellow-300 hover:bg-black/30 transition duration-500 ease-in-out">
  Download CV
</a>


                </li>

            </ul>
        </nav>
        
    </header>
</template>