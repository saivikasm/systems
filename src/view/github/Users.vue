<template>
    <div>{{users}}</div>
</template>
<script>
import User from "@/js/core/user"
export default{
    data(){
        return{
            users:[]
        }
    },
async created(){
this.users=await User.getUsers();
}
}
</script>