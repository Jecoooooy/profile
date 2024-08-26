    <template>
    <v-app>
        <!-- <transition name="slide-down" mode="out-in" tag="div"> -->
        <v-expand-transition>
            <v-app-bar
                class="position-fixed"                
                color="primary"
            >
                <v-toolbar-title >
                <div class="d-flex">
                    <v-avatar
                            class="mr-3"
                            image="./images/logo.png">
                        </v-avatar>
                    <div class="d-flex align-end text-h4">
                        <strong>J</strong> 
                        <p>ecoooooy</p>
                    </div> 
                </div>
                </v-toolbar-title>
                <v-toolbar-items>
                    <v-btn  v-if="windowWidth >= 830 && drawer == false" href="#Home">Home</v-btn>
                    <v-btn  v-if="windowWidth >= 830 && drawer == false" href="#about">about</v-btn>
                    <v-btn  v-if="windowWidth >= 830 && drawer == false" href="#experience">experience</v-btn>
                    <v-btn  v-if="windowWidth >= 830 && drawer == false" href="#portfolio">portfolio</v-btn>
                    <v-btn  v-if="windowWidth >= 830 && drawer == false" href="#get-in-touch">get in touch</v-btn>
                    <v-btn v-else  icon="mdi-menu" @click.stop="drawer = !drawer"></v-btn>
                </v-toolbar-items>
            </v-app-bar>

        
        </v-expand-transition>
        <v-navigation-drawer
                v-model="drawer"
                color="subcolor"
                location="top">
                <v-list class="text-uppercase">
                    <v-list-item @click="closeDrawer()" href="#Home">Home</v-list-item>
                    <v-list-item @click="closeDrawer()" href="#about">about</v-list-item>
                    <v-list-item @click="closeDrawer()" href="#experience">experience</v-list-item>
                    <v-list-item @click="closeDrawer()" href="#portfolio">portfolio</v-list-item>
                    <v-list-item @click="closeDrawer()" href="#get-in-touch">get in touch</v-list-item>
                </v-list>
            </v-navigation-drawer>
        <!-- </transition> -->
        <transition name="slide-up" mode="out-in">
        <v-main >
            <section id="Home">
                <div class='light x1'>1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 0 1 0 1 1 0 1 1 1 0 0 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0</div>
                <div class='light x2'>1 0 1 1 1 0 1 0 1 1 1 0 0 0 1 0 1 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 1 0 0 0 1 0 1 1 0 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1</div>
                <div class='light x3'>1 0 1 1 1 0 1 0 1 1 1 0 0 0 1 0 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 0 0 1 1 0 1 1 1 0 0 0 1 0 0</div>
                <div class='light x4'>1 0 1 1 1 1 0 1 1 1 0 0 0 1 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 0 0 1 0 1 1 1 0 0 0 1 0 0 1 0 1</div>
                <div class='light x5'>1 1 1 1 0 0 0 1 0 1 1 0 1 1 1 0 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 0 1 0 1 0 1 1 1 1 0 0 0 0 1 0 1</div>
                <div class='light x6'>1 0 1 1 1 1 0 0 0 0 1 0 1 1 0 1 1 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 1 0 0 0 0 1 0 1</div>
                <div class='light x7'>1 0 1 1 0 0 0 0 1 1 0 1 1 0 1 1 1 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 0 0 0 1 0 1 1 0 0 0 1 0 0 1</div>
                <div class='light x8'>1 0 1 1 1 0 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 1 0 1 1 1 0 0 0 1 0 0 1</div>
                <div class='light x9'>1 0 1 1 1 0 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 1 1 0 0 0 1 0 0 1 0 1 1 1 0 0 0 1 0 0 1 0 1</div>
                <v-container fluid class="pa-0 pt-16 mt-16 overflow-hidden  position-relative   h-100">
                    
                    <transition name="slide-left" mode="out-in">
                        <p v-show="welcome" class="ml-6 text-h4 text-secondary">Welcome to my profile</p>
                    </transition>
                    <transition name="slide-up" mode="out-in">
                        <div v-show="intro" class="text-container">
                            <p class="d-inline-block mr-4 text-white">Hi! I'm Jerico B. Bencito a</p>
                            <div class="dropping-texts">
                                <div class="text-blue">Front-end Developer</div>
                                <div class="text-green">Back-end Developer</div>
                                <div class="text-yellow">Designer</div>
                                <div class="text-red">Cutie 😜</div>
                            </div>
                        </div>
                    </transition>

                    <v-spacer></v-spacer>
                    <div class="mx-6 mt-16" style=" max-width:1000px;">
                    <transition name="slide-right" mode="out-in">                    
                        <p v-show="introInfo1" :class="'text-h6 text-white text-justify ' +( windowWidthSize >= 700?  'text-h6' : 'text-body-1')">
                            Enthusiastic and motivated entry-level web developer, I am
                            passionate about building engaging and user-friendly websites.
                            With a hands-on experience includes developing projects that showcase
                            my ability to create responsive and visually appealing web pages.
                        </p>
                    </transition>
                    </div>
                </v-container>
                <div class="end-wrapper"></div>
            </section>



            <section id="about">
                <v-container class="position-relative" style="z-index:3;">
                    <h1  class="text-h3 text-uppercase text-secondary text-center mb-16" >About Me</h1>
                    <v-row class="justify-center">
                        <v-col cols="12" xs="12" sm="8" md="6">
                            <p class=" text-h4 text-uppercase text-center text-secondary">
                                Education
                            </p>
                            <v-card color="transparent" :elevation="0">
                                <v-card-item>
                                    <v-timeline  density="compact" side="end" truncate-line="start"  line-color="secondary">
                                        <v-timeline-item
                                            v-for="item in data.education"
                                            :key="item.id"
                                            :dot-color="item.color"
                                            :icon="item.icon"
                                            size="small"
                                            width="100%"
                                            
                                        >
                                        <!-- <template v-slot:opposite style="display:none;"> -->
                                        
                                        <!-- </template> -->
                                            <template v-slot:default>
                                                <div class="pa-2 bg-secondary">
                                                    <p class="text-h5">
                                                        {{ item.level }}
                                                    </p>
                                                    <p class="text-subtitle">
                                                        {{ item.school }}
                                                    </p>
                                                </div>
                                            </template>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-card-item>
                            </v-card>
                        </v-col>
                        <v-col cols="12" xs="12" sm="8" md="6">
                            <p class=" text-h4 text-uppercase text-center text-secondary">
                                    skills 
                                </p>
                                <div :class="'pa-2 ' +( windowWidthSize >= 1269?  'd-flex' : 'd-block')" >
                                    <v-tabs
                                        v-model="tab"
                                        color="secondary"
                                        bg-color='primary'
                                        :direction="windowWidthSize >= 1269? 'vertical' : 'horizontal'"
                                        selected-class="bg-primary"
                                    >
                                        <v-tab value="front">front-end</v-tab>
                                        <v-tab value="back">Back-end</v-tab>
                                    </v-tabs>
                                    <v-col >
                                        <v-tabs-window v-model="tab">
                                            <v-tabs-window-item value="front">
                                                <v-card color="transparent" :elevation="0">
                                                    <v-card-item class="py-0">
                                                        <div 
                                                            v-for="item in data.skills.front"
                                                            :key="item.id"
                                                            class="pb-4 d-flex justify-space-between align-center">
                                                            <!-- <p class="text-uppercase mr-4">HTML</p> -->
                                                            <v-progress-linear
                                                                class="text-white"
                                                                bg-color="fourth"
                                                                buffer-color="third"
                                                                buffer-opacity="1"
                                                                :buffer-value="item.buffer"
                                                                color="secondary"
                                                                height="30"
                                                                max="10"
                                                                min="0"
                                                                :model-value="item.progress"
                                                                >
                                                                <v-icon class="mx-2 ">{{item.icon}}</v-icon>{{ item.skill }}
                                                            </v-progress-linear>
                                                        </div>
                                                    </v-card-item>
                                                </v-card>
                                            </v-tabs-window-item>
                                            <v-tabs-window-item value="back">
                                                <v-card color="transparent" :elevation="0" >
                                                    <v-card-item class="py-0">
                                                        <div 
                                                            v-for="item in data.skills.back"
                                                            :key="item.id"
                                                            class="pb-4 d-flex justify-space-between align-center">
                                                            <!-- <p class="text-uppercase mr-4">HTML</p> -->
                                                            <v-progress-linear
                                                                class="text-white"
                                                                bg-color="fourth"
                                                                buffer-color="third"
                                                                buffer-opacity="1"
                                                                :buffer-value="item.buffer"
                                                                color="secondary"
                                                                height="30"
                                                                max="10"
                                                                min="0"
                                                                :model-value="item.progress"
                                                                >
                                                                <v-icon class="mx-2 ">{{item.icon}}</v-icon>{{ item.skill }}
                                                            </v-progress-linear>
                                                        </div>
                                                    </v-card-item>
                                                </v-card>
                                            </v-tabs-window-item>
                                        </v-tabs-window>
                                    </v-col>
                                </div>

                        </v-col>
                    </v-row>
                </v-container>
            </section>




            <section id="experience">
                <div class="custom-shape-divider-top-1723635599">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="custom-shape-divider-top-1723627849">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                    </svg>
                </div>
                <v-container class="pb-16 position-relative" style="z-index:3;">
                    <div class="mt-16 pt-16"></div>
                    <h1  class="text-h3 text-uppercase text-primary text-center mb-16 section-title" >Experience</h1>
                    <div class="timeline">
                        <div
                            v-for="(item,index) in data.experience"
                            :key="index"
                            :class="'timeline-item '  + (windowWidth >= 920? (index %2 == 0 ? 'left' : 'right') : 'right')">
                            <div class="content bg-secondary elevation-10 cursor-pointer">
                                <v-img
                                    :height="windowWidth >= 1920? 500: 400"
                                    cover
                                    :src="item.content"
                                    aspect-ratio="16/9"
                                    @click="openExperience(item)"
                                    class=" position-relative"
                                >
                                    <div class="timeline-item-overlay  text-white">
                                        <h2 >{{item.title}}</h2>
                                        <p >{{ item.company }}</p>
                                        <p >{{item.address}}</p>
                                    </div>
                                </v-img>
                            </div>
                            <div :class="'opposite-' + (windowWidth >= 920? (index %2 == 1 ? 'left' : 'right') : ' d-none')">
                                <div class="text-primary text-h6 mt-n2">
                                    {{ item.date }}
                                </div>
                            </div>
                        </div>
                    </div>
                </v-container>
                <div class="custom-shape-divider-bottom-1723635813">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="custom-shape-divider-bottom-1723635950">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>

    <!-- asd -->


            <section id="portfolio">
                <v-container class="position-relative" style="z-index:1;">
                <h1  class=" text-h3 text-uppercase text-secondary text-center mb-16" >portfolio</h1>
                    <v-row :class="windowWidth >= 1280? 'justify-start' : 'justify-space-around'">
                    
                        <v-col cols="10" xs="10" sm="7" md="5" lg="4" xl="3" v-for="(item,index) in data.portfolio" :key="index"> 
                            <tiltCard @click="openPorfolio(item)" class="cursor-pointer portfolio-card-content">
                                <v-img class=""
                                    height="400px"
                                    cover
                                    aspect-ratio="16/9"
                                    :src="item.photo">
                                    <div class="timeline-item-overlay  text-white">
                                        <h2 >{{item.title}}</h2>
                                        <p >{{ item.description }}</p>
                                    </div>
                                </v-img>
                            </tiltCard>
                        </v-col>
                    </v-row>
                </v-container>
                <div class="custom-shape-divider-bottom-1723660342">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>  
            </section>

            <section id="get-in-touch">
                <h1  class="text-h3 text-uppercase text-primary text-center mb-5" >Get in touch</h1>
                <v-container>
                    <v-row class="justify-center align-center">
                        <v-col
                            cols="12"
                            sm="8"
                            xs="10"
                            md="6"
                            lg="6"
                            xl="5"
                            
                        >
                            <div class="map-container bg-white rounded elevation-10">
                                <iframe
                                :src="mapSrc"
                                width="100%"
                                height="450"
                                style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </v-col>
                        <v-col
                            style="height:510px;"
                            cols="12"
                            sm="8"
                            xs="10"
                            md="6"
                            lg="6"
                            xl="5"
                        class="rounded elevation-10 text-center bg-primary d-flex flex-column justify-center" 
                        >
                            <v-img
                                height="100"
                                src="./images/logo.png">
                            </v-img>
                            <div class="text-h5 mt-4">
                                I enjoy working with people who share my passion. Let's get in touch!
                            </div>
                            <br>
                            <div class="text-h5">Social Links: 
                                <a v-tooltip="'go to my Facebook'" class="text-decoration-none text-white" href="https://www.facebook.com/jerico.bencito.5/"><v-icon> mdi-facebook</v-icon> </a>
                                <a v-tooltip="'go to my Instagram'" class="text-decoration-none text-white" href="https://www.instagram.com/jecoooooy/"><v-icon> mdi-instagram</v-icon> </a>
                                <a v-tooltip="'go to my Linked in'" class="text-decoration-none text-white" href="https://www.linkedin.com/in/jerico-bencito-36465831a/"><v-icon> mdi-linkedin</v-icon>   </a>
                            </div>

                        </v-col>
                    </v-row>
                </v-container>
            
            </section>
            <footer class="bg-primary">
                <div class="text-center">
                    This is a Laravel, Vue, Vuetify project 
                    <br> © 2024 by Jerico B. Bencito
                </div>
            </footer>
            <v-dialog v-model="experienceDialog" max-width="1400">
                <v-sheet :elevation="20" >

                    <v-row no-gutters class="bg-background">
                        <v-col class="position-relative " cols="6">
                            <v-sheet color="primary">
                                <v-img 
                                    aspect-ratio="1"
                                    :src="experienceData.content"
                                >
                                </v-img>
                            </v-sheet>
                        </v-col>
                        <v-col class="position-relative  pl-4 h-100" cols="6">
                            <div class=" d-flex justify-space-between align-center">
                                <v-spacer></v-spacer>
                                <v-btn 
                                    @click="experienceDialog = false" 
                                    icon="mdi-close" 
                                    tile 
                                    rounded 
                                    class="ma-2"
                                    density="comfortable"
                                    variant="tonal" 
                                    color="error">
                                </v-btn>
                            </div>
                            <div class=" d-flex flex-column align-center ">
                                <v-avatar
                                    size="120"
                                    class="elevation-5"
                                    :image="experienceData.logo"
                                >
                                </v-avatar>
                                <h1 class="pt-3">{{ experienceData.company }}</h1>
                            </div>
                            <div>
                                <h2>
                                    {{ experienceData.title }}
                                </h2>
                                <h4>
                                    {{ experienceData.address }}
                                </h4>
                            </div>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-dialog>
            <v-dialog v-model="portfolioDialog"   max-width="600" >
            <div class="position-relative overflow-visible  h-100 w-100 ">
                <!-- <v-sheet
                    tile
                    height="100%"
                    width="100%"
                    class="pa-2 card-behind">
                </v-sheet> -->
                <v-card 
                    tile
                    :max-height="windowWidth >= 1200? 700: 500"
                    width="100%"
                    class="pa-2 card-portfolio" >
                    <v-card-title 
                        style="z-index:3000;" 
                        class="position-fixed bg-primary w-100 mt-n3 ml-n2 text-h5  d-flex justify-space-between align-center ">
                        {{ portfolioData.title }}
                        <v-btn 
                            density="comfortable"
                            icon="mdi-close"
                            color="error"
                            @click="portfolioDialog = false" 
                            tile>
                        </v-btn>
                    </v-card-title>
                    <v-card-item class="mt-14 pa-0">
                        <v-img
                            :src="portfolioData.photo">
                        </v-img>
                    </v-card-item>
                </v-card>
            </div>
            </v-dialog>
        </v-main>

    </transition>
    </v-app>
    </template>
    <script>

    </script>
    <script setup>
    import{onMounted, ref,computed  } from 'vue'
    import data from './data/data.js'
    import tiltCard from './TiltedCard.vue'
    const drawer = ref(false)

    const welcome = ref(false)
    const intro = ref(false)
    const introInfo1 = ref(false)
    // const about = ref(false)
    const tab = ref(null)

    const mapSrc = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.210969653274!2d120.79376807576865!3d14.182418187176854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd85d941e2b2af%3A0x592a96976331fa7c!2sPumphouse!5e0!3m2!1sen!2sph!4v1723661355130!5m2!1sen!2sph')


    const experienceDialog = ref(false)
    const experienceData = ref({})
    function openExperience(item){
    experienceDialog.value = true
    experienceData.value = item
    
    }

    const portfolioDialog = ref(false)
    const portfolioData = ref({})
    function openPorfolio(item){
    portfolioData.value = item
    portfolioDialog.value = true
    }


    function closeDrawer(){
    drawer.value = false
    }










    function delay(){
    setTimeout(() => {
        intro.value = true
    }, 600);
    setTimeout(() => {
        introInfo1.value = true
    }, 800);

    setTimeout(() => {

        welcome.value = true
    }, 400);
    }
 
 

    const windowWidth = ref(window.innerWidth) 
    // const windowHeight= ref(window.innerHeight) 

    const handleResize = () => {
        windowWidth.value = window.innerWidth;
    };
    const windowWidthSize = computed(() => {
    return `${windowWidth.value}`;
    });


    onMounted(async () => {
    
    delay()

    window.addEventListener('resize', handleResize);
    })
    </script>