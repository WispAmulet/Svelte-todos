<script>
  import { authState } from "rxfire/auth";
  import Profile from "./components/Profile.svelte";
  import Todos from "./components/Todos.svelte";
  import { auth, googleProvider } from "./lib/firebase";

  let user;

  const unsubscribe = authState(auth).subscribe(u => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<section>
  {#if user}
    <Profile {...user} />
    <button on:click={() => auth.signOut()}>Logout</button>
    <hr />
    <Todos uid={user.uid} />
  {:else}
    <button on:click={login}>Signin with Google</button>
  {/if}
</section>
