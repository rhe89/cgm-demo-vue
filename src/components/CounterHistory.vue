<template>
<div>
    <h2>
        Counter history
    </h2>
    <ul>
        <li v-for="item in $store.state.counterHistory" :key="item">
            Counter updated! New value: {{item}}
        </li>
    </ul>
</div>    
</template>

<script>
export default {
    name: "CounterHistory"
}
</script>