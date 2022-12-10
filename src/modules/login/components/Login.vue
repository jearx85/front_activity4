<template>
    <div class="container">
        <h1>Inicio de sesion</h1>
        <form @submit.prevent ="login">
            <div class="mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="email"  v-model="user.email" class="form-control" id="inputEmail3" required>
                </div>
            </div>
            <div class="mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" v-model="user.password" class="form-control" id="inputPassword3" required>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
               
    </form>
</div>


</template>

<script>
    export default {
        data(){
            return {

                user: {
                    email: null,
                    password: null
                 
                }

            }
        },
        methods:{
            async login(){
                
                const options = {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    body:  JSON.stringify(this.user)
                }

                const response = await fetch("http://127.0.0.1:8000/api/auth/login", options);
                const data = await response.json();
                localStorage.setItem('token', data.token)
                localStorage.setItem('rol', data.rol)
                //console.log(localStorage.getItem('token'));
                //console.log(localStorage.getItem('rol'));
                //console.log(data.rol);

                if(data.token && data.rol == 1){
                   this.$router.replace({path: '/programs'});
                }else if(data.token && data.rol == 2){ 
                    this.$router.replace({path: '/view/programs'});
                }else if(!data.token){
                    this.$router.replace({path: '/'});
                    alert('Usuario o contraseña incorrecta')
                }
                 
              
            }
        }
}

</script>


<style>
.container{
    margin-top: 20px;
    width: 400px;
    height: 800px;
    margin: 2em auto;
}

h1{
    text-align: center;
}
</style>