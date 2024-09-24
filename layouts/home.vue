<template>
    <div class="h-full">
    <header class="hero min-h-1/4 bg-cover bg-top lg:bg-center xl:bg-bottom">
        <div class="pt-0 md:pt-2"></div>
        <Headernav />
        <h2 class="text-9xl font-bold tracking-wide text-yellow-100 pt-24 text-center">Hello, world</h2>
    </header>

    <main><slot /></main>
    
   <MFooter />

    </div>

</template>

<style scoped>
.hero{
    background-image: linear-gradient(rgba(0, 0, 0, 0) 10%, rgba(9,0,37,1) 80%),
    url("/assets/images/hero.webp");
}
</style>
