<template>
  <div>
    <footer class="footer">
      <ul class="pagination">
        <li>1</li>
        <li>...</li>
        <li>4</li>
        <li><strong>5</strong></li>
        <li>6</li>
        <li>...</li>
        <li>59</li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  display: flex;
  justify-content: center;
  padding: 30px;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
}
.pagination {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  color: #fff;
  max-width: 150px;
  text-decoration: none;
  list-style-type: none;
}
</style>
