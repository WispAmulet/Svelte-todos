<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<h3>Hi {displayName}</h3>

<img src={photoURL} width="180" alt="usr avatar" />
<p>Your user ID is {uid}</p>
