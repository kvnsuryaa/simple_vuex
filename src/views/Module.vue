<template>
    <div>
        <div class="container mt-4">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center">Module List</h3>
                            <hr>
                            <ul>
                                <li v-for="(mo, index) in modules" :key="index">
                                    <router-link :to="{name: mo.link}" class="text-decoration-none">{{ mo.label }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'module_list',
    data: () => {
        return {
            modules: [
                {label: 'Module 1 | Test API with Axios', link: 'test1'},
                {label: 'Module 2', link: ''},
                {label: 'Module 3', link: ''},
                {label: 'Module 4', link: ''},
                {label: 'Module 5', link: ''}
            ]
        }
    }
}
</script>