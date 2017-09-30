
<template>
  <div class="box">

	<p>
    	<slot></slot>
    </p>
    
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
     
    }
  }
}

</script>

<style>

.box {
	background-color: #ccc;
	padding: 10px;
	border: 3px solid #000;
	margin-bottom: 20px;
}

</style>