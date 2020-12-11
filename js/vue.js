// JavaScript Document
// In your Vue.js component.
<div id="slider">
  <input checked="" type="radio" name="slider" id="slide1" selected="false">
  <input type="radio" name="slider" id="slide2" selected="false">
  <input type="radio" name="slider" id="slide3" selected="false">
  <input type="radio" name="slider" id="slide4" selected="false">
  <div id="slides">
    <div id="overflow">
      <div class="inner">
        <article>
          <content select="img:nth-of-type(1)"></content>
        </article>
        <article>
          <content select="img:nth-of-type(2)"></content>
        </article>
        <article>
          <content select="img:nth-of-type(3)"></content>
        </article>
        <article>
          <content select="img:nth-of-type(4)"></content>
        </article>
      </div> <!-- .inner -->
    </div> <!-- #overflow -->
  </div>
  <label for="slide1"></label>
  <label for="slide2"></label>
  <label for="slide3"></label>
  <label for="slide4"></label>
</div>

Vue.component('img-slider', {
template: '#img-slider-template',
replace: true
})
// boot up demo
new Vue({
el: '#demo'
})