    <template>
        <div 
            ref="portfolioCard"  
            data-tilt 
            class="portfolio-card">
        <slot></slot>
        </div>
    </template>
    
    <script > 
    import VanillaTilt from 'vanilla-tilt'
    
    export default {
        mounted() {
        // Initialize VanillaTilt on the element
        VanillaTilt.init(this.$refs.portfolioCard, {
            max: 15,
            speed: 200,
            glare:true,
            "max-glare":0.25,
            reverse: true,
        });
        },
    };
    </script>
