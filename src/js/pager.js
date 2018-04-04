// pagination helper
// ======================================================/

export default function Pager(opts) {
  this.itemCount = opts.itemCount;
  this.perPage = opts.perPage;
  this.currentPage = 1;
}

Pager.prototype = {
  getTotalPages: function() {
    // ret num
    return Math.ceil(this.itemCount / this.perPage);
  },
  getCurrentOffset: function() {
    // ret num
    return (this.currentPage - 1) * this.perPage; 
  },
  hasNext: function() {
    // ret boolean
    return this.currentPage !== this.getTotalPages();
  },
  hasPrev: function() {
    // ret boolean
    return this.currentPage !== 1;
  },
  prev: function() {
    // ret num
    if (this.hasPrev()) {
      this.currentPage = this.currentPage - 1;
    } else {
      this.currentPage = this.getTotalPages();
    }
    return this.currentPage;
  },
  next: function() {
    // ret num
    if (this.hasNext()) {
      this.currentPage = this.currentPage + 1;
    } else {
      this.currentPage = 1;
    }
    return this.currentPage;
  },
  isValidPage: function(num) {
    // ret boolean
    return num > 0 && num <= this.getTotalPages();
  }
};