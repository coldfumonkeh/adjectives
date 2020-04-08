<template>
  <div>

    <b-row>

      <b-col>

        <b-form>

          <div class="radioHolders">

            <b-form-radio-group
              v-model="category"
              :options="categoryOptions"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"></b-form-radio-group>

          </div>

          <div class="generateButton hvr-grow" @click="generate">{{ buttonText }}</div>

        </b-form>

      </b-col>

    </b-row>

    <b-row>

      <b-col>

        <div id="generated" class="hvr-shrink" 
          v-if="generatedCombination"
          v-b-tooltip.hover :title="tooltipText"
          v-clipboard:copy="generatedCombination"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError">
          {{ generatedCombination }}
        </div>

      </b-col>

    </b-row>

  </div>
</template>

<script>
// import _ from 'lodash';
export default {
  name: 'Home',
  data() {
    return {
      categoryOptions: [
        { item: 'sombre', name: 'Sombre' },
        { item: 'any', name: 'Make it fun!' }
      ],
      loaded            : false,
      category: 'sombre',
      adjectiveData     : null,
      adjectivesCombined: [],
      generatedCombination: null,
      tooltipText: "Click to copy to your clipboard"
    }
  },
  computed: {
    buttonText: function(){
      return ( this.generatedCombination ) ? 'Generate again!' : 'Generate!';
    }
  },
  methods: {
    fetchAppData: function(){
      var _self = this;
      fetch( '/data/adjectives.json' )
      .then( response => response.json() )
      .then( data => {
        for( var item in data ){
          for( var adj in data[ item ] ){
            _self.adjectivesCombined.push( data[ item ][ adj ] );
          }
        }
        _self.adjectiveData = data;
        _self.loaded = true;
      } );
    },
    generate: function(){
      this.tooltipText = 'Click to copy to your clipboard';
      if( this.category == 'sombre' ){
        this.generatedCombination = this.fetchRandomSombreItem() + ' and ' + this.fetchRandomSombreItem();
      } else {
        this.generatedCombination = this.fetchRandomItem() + ' and ' + this.fetchRandomItem();
      }

      // this.generatedCombination = this.fetchRandomItem() + ' and ' + this.fetchRandomItem();
      // this.generatedCombination = _.capitalize( this.fetchRandomItem() + ' and ' + this.fetchRandomItem() );
    },
    fetchRandomSombreItem: function(){
      return this.adjectiveData[ 'sombre' ][ Math.floor( Math.random() * this.adjectiveData[ 'sombre' ].length ) ];
    },
    fetchRandomItem: function(){
      return this.adjectivesCombined[ Math.floor( Math.random() * this.adjectivesCombined.length ) ];
    },
    onCopy: function(){
      this.tooltipText = 'Copied!';
    },
    onError: function(){
      alert( 'Failed to copy texts' );
    }
  },
  created() {
    this.fetchAppData();
  }
}
</script>
<style>
.radioHolders {
  padding: 20px;
}
.generateButton {
  padding: 20px;
  cursor: pointer;
  background: #b4d455;
  color: black;
  width: 300px;
  font-weight: bold;
}
div#generated {
  margin-top: 50px;
  font-size: 100px;
  border: 2px dashed #b4d455;
  cursor: pointer;
  padding: 20px;
}
</style>