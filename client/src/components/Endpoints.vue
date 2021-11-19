<template>
    <div class="wrapper">
        <div class="column">
            <h4>Endpoint: /api/test</h4>
            <button class="button" @click="testTestEndpoint">
                Test Endpoint
            </button>
            <div style="font-weight: bold" v-if="result1">
                {{ result1 }}
            </div>
        </div>
        <div class="column">
            <h4>Endpoint: /api/items</h4>
            <button class="button" @click="testItemsEndpoint">Test Endpoint</button>
            <div style="font-weight: bold" v-if="result2.length">
                <ul>
                    <li v-for="item in result2" :key="item.id">
                        Name: {{ item.name }}, ID: {{ item.id }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Endpoints",
    data: () => ({
       result1: '',
       result2: [],
    }),
    methods: {
        async testTestEndpoint() {
            try {
                const responseFirst = await fetch('/api/test');
                const json = await responseFirst.json();
                this.result1 = json?.message;
            } catch (e) {
                alert('Something went wrong!');
                console.log(e);
            }
        },
        async testItemsEndpoint() {
            try {
                const response = await fetch('/api/items');
                const json = await response.json();
                this.result2 = json?.data;
            } catch (e) {
                alert('Something went wrong!');
                console.log(e);
            }
        },
    }
}
</script>

<style scoped>
.button {
    text-transform: uppercase;
    outline: green;
    background: lightgreen;
    border-radius: 5px;
    padding: 10px 15px;
    font-weight: bold;
}
.wrapper {
    display: flex;
}
.column:first-child {
    border-right: 1px solid gray;
}
.column {
    width: 50%;
    text-align: center;
}
</style>
