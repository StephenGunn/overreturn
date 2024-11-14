<script lang="ts">
	let { data } = $props();
</script>

<h1>OverReturn</h1>

<p>A cautionary tale about the dangers of returning too much from a load() function.</p>

<h2>Blog Post</h2>

<p>
	This is an example project used in <a
		href="https://jovianmoon.io/posts/overreturn-a-cautionary-tale">OverReturn: A Cautionary Tale</a
	> and is an example of what not to do.
</p>

<h2>Users of this site:</h2>

<ul>
	{#each data.users as user}
		<li>{user.id}: {user.name}</li>
	{/each}
</ul>
