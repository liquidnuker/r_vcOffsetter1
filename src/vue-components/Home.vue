<template>
  <div>
  <ul v-for="i in country">
    <li>
     {{ i.name }} {{ i.region }}
    </li>
  </ul>

    <button @click="prev()">&lt; prev</button>
    <button @click="next()">next &gt;</button>
    <button @click="goToPage(31)">goto</button>
    
  </div>
</template>
<script>
import axios from "axios";
  export default {
    data () {
      return {   
        itemCount: "",        
        perPage: 8,
        totalPages: "",
        currentPage: 1,
        currentOffset: "",

        country: ""

      }
    },
    mounted: function () {
      this.getItemCount();
    },
    methods: {
      getItemCount: function() {
        // let self = this;
        axios.get('./src/php/getitemcount.php')
        .then((response) => {
          // console.log(response.data); // ok
          this.itemCount = response.data;
          this.getTotalPages();
          console.log(this.totalPages);
        })
        .then(() => {
          // send offset/limit
          this.getItems();
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      getItems: function () {
        let itemData = new FormData();
        itemData.append("f_offset", this.getCurrentOffset());
        itemData.append("f_limit", this.perPage);
        
        // let self = this;
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
      getTotalPages: function() {
        this.totalPages =  Math.ceil(this.itemCount / this.perPage);
      },
      getCurrentOffset: function() {
        this.currentOffset = (this.currentPage - 1) * this.perPage; 
        return this.currentOffset;       
      },
      next: function() {
        if (this.currentPage !== this.totalPages) {
          this.currentPage = this.currentPage + 1;
        } else {
          this.currentPage = 1;
        }
        this.getItems();
      },
      prev: function() {
        if (this.currentPage !== 1) {
          this.currentPage = this.currentPage - 1;
        } else {
          this.currentPage = this.totalPages;
        }
        this.getItems();
      },
      goToPage: function(num) {
        if (num > 0 && num <= this.totalPages) {
          console.log(num + " ok");
        } else {
          console.log("invalid num");
        }
      }
      
    }
  }
</script>