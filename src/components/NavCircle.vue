<template>
  <div>
    <div class="nav_circle"></div>
    <router-link :to="{name: 'ba'}" tag="button" class="circle_button first block"><i class="icon heart center_block"></i></router-link>
    <router-link :to="{name: 'story'}" tag="button" class="circle_button second block"><i class="icon book center_block"></i></router-link>
    <router-link :to="{name: 'propose'}" tag="button"  class="circle_button third block"><i class="icon mail center_block"></i></router-link>
  </div>
</template>

<script>
export default { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/all";
// diamètre du demi-cercle
$circle_diameter: 90vh;
$IsLeftSide: false;

.nav_circle {
  @include demi-circle($circle_diameter, $IsLeftSide);
  top: 50vh - $circle_diameter/2;
  left: -(35/100)*$circle_diameter;
  position: absolute;
}

//diamètre des boutons
$button_diameter: 5vh;

.circle_button {
  height: $button_diameter;
  width: $button_diameter;
  border-radius: $button_diameter/2;
  border: solid 1px black;
  position: absolute;

  &.first {
    top: 25vh;
    left: 5vh;
  }

  &.second {
    top: 47vh;
    left: 11vh;
  }

  &.third {
    top: 70vh;
    left: 5vh;
  }
}

.block {
    display: block;
}

.center_block {
  margin-left: auto;
  margin-right: auto;
}

</style>
