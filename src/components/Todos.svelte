<script>
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import TodoItem from "./TodoItem.svelte";
  import { db } from "../lib/firebase";

  export let uid;

  let text = "some task";

  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  const todos = collectionData(query, "id").pipe(startWith([]));

  function add() {
    db.collection("todos").add({
      uid,
      text,
      complete: false,
      created: Date.now()
    });

    text = "";
  }

  function updateStatus(event) {
    const { id, newStatus } = event.detail;
    db.collection("todos")
      .doc(id)
      .update({ complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("todos")
      .doc(id)
      .delete();
  }
</script>

<style>
  input {
    display: block;
  }
</style>

<!-- markup (zero or more items) goes here -->
<ul>
  {#each $todos as todo}
    <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
  {/each}
</ul>

<input bind:value={text} />

<button on:click={add}>Add Task</button>
