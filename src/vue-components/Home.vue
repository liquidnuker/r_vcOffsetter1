<template>
<div>
  <ul v-for="i in country">
    <li>
      {{ i.name }} {{ i.region }}
    </li>
  </ul>
  <select v-model="perPage" @change="activatePager()">
    <option v-for="i in perPageItems" :value="i">
      {{ i }}
    </option>
  </select>
  <button @click="flip()">&lt; prev</button>
  <button @click="flip('next')">next &gt;</button>
  <button @click="goToPage(30)">goto</button>
</div>
</template>
<script>
import axios from "axios";
import Pager from "../js/pager.js";
  export default {
    data () {
      return {   
        pager: "",

        itemCount: "",
        perPageItems: [10, 20, 50],        
        perPage: 10,
                        
        country: ""
      };
    },
    mounted: function () {
      this.getItemCount();
    },
    methods: {
      getItemCount: function() {
        axios.get("./src/php/getitemcount.php")
        .then((response) => {
          this.itemCount = response.data;
          this.activatePager();          
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      activatePager: function() {
        this.pager = new Pager({
          itemCount: this.itemCount,
          perPage: this.perPage    
        });
        this.getItems();
      },
      getItems: function () {
        let itemData = new FormData();
        itemData.append("f_offset", this.pager.getCurrentOffset());
        itemData.append("f_limit", this.pager.perPage);
        
        axios.post("./src/php/getdata.php", itemData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then((response) => {
          this.country = response.data;
        }).catch(function () {
          console.log("error");
        });
      },
      flip: function(direction) {
        if (direction === "next") {
          this.pager.next();
        } else {
          this.pager.prev();
        }
        console.log(this.pager.currentPage);
        this.getItems();      
      },
      goToPage: function(num) {
        if (this.pager.isValidPage(num)) {
          console.log("valid page");
        } else {
          console.log("invalid page");
        }
      }
      
    }
  };
</script>