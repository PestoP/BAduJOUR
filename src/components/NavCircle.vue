<template>
  <div>
    <div class="nav_circle"></div>
    <router-link :to="{name: 'ba'}" tag="button" class="circle_button yellow_button first block"><i class="icon yellow_darken heart center_block"></i></router-link>
    <router-link :to="{name: 'story'}" tag="button" class="circle_button green_button second block"><i class="icon green_darken book center_block"></i></router-link>
    <router-link :to="{name: 'propose'}" tag="button"  class="circle_button blue_button third block"><i class="icon blue_darken mail center_block"></i></router-link>
  </div>
</template>

<script>
export default { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/all";

.nav_circle {
  // paramètres pour la mixin demi-cercle
  $circle_diameter: 90vh;
  $IsLeftSide: false;
  
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
  cursor: pointer;
  outline: none;
  
  i {
    font-size: 1.3rem!important;
  }

  &.yellow_button {
    background-color: $yellow;
    border-color: $yellow_darken;

    &:hover {
      border-color: $yellow_darken;
    }
  } 

  &.green_button {
    background-color: $green;
    border-color: $green_darken;

    &:hover {
      border-color: $green_darken;
    }
  }

  &.blue_button {
    background-color: $blue;
    border-color: $blue_darken;

    &:hover {
      border-color: $blue_darken;
    }
  } 

  &:active {
    transform: rotate(25deg);
  }

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
