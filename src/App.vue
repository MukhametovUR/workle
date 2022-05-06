<template>
    <Products/>
    <Footer class="footer"/>
</template>
<script>
import Products from '../src/views/Products.vue'
import Footer from '../src/components/Footer.vue'

export default {
  components:{
    Products,
    Footer
  }
  
}
</script>

<style>
.footer {
  display: flex;
   position:fixed;
   left:0px;
   bottom:0px;
   height:30px;
   width:100%;
}
@media (min-width: 480px) and (max-width: 768px) {
  .photo {
    width: 400px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .photo {
    width: 250px;
    display: flex;
  }
}
@media (max-width: 320px) {
  .photo {
    width: 200px;
  }
}
</style>
