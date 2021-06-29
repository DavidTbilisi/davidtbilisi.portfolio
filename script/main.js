
Vue.component('menu-item', {
    props: {
        link: {default: '#'},
        active: {default: false}
    
},
    data: function () {
        return {}
      },
    template: '<li :class="{\'uk-active\':active}"><a :href="link"><slot></slot></a></li>'
})



Vue.component('gallery-item', {
  props: {
      tag: {default: 'tag-other'},
      image: {default: 'images/cloud.jpg'},
      caption: {default: 'Caption'},
      alt: {default: 'gallery image'}
  
},
  data: function () {
      return {}
    },
  template: `
  <li :class="tag">
    <a class="uk-inline" :href="image" :data-caption="caption">
        <img :src="image" :alt="alt">
    </a>
  </li>
  `
})


Vue.component('website-item', {
  props: {
      tag: {default: 'tag-other'},
      title: {default: 'Title'},
      image: {default: 'images/cloud.jpg'},
      link:{default: 'https://github.com/davidunilab'},
      caption: {default: 'https://github.com/davidunilab'},
      alt: {default: 'gallery image'}
  
},
  data: function () {
      return {
        style:{
          backgroundImage: "url("+this.image+")",
        }
      }
    },
  template: `
  <li :class="tag">
    <a class="" href="#modal-full" uk-toggle>
      <img :src="image" :alt="alt"> 
    </a>

    <div id="modal-full" class="uk-modal-full" uk-modal>
        <div class="uk-modal-dialog">
            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                <div class="uk-background-cover" :style="style" uk-height-viewport></div>
                <div class="uk-padding-large">
                  <slot></slot>
                </div>
            </div>
        </div>
    </div>
  </li>
  `
})



let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})