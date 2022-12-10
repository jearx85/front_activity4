<template>
    <div class="container">
        <h1>Registro</h1>
        <form>
            <div class="row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="name" v-model="user.name">
                </div>
            </div>
            <div class="row mb-3">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="email" v-model="user.email">
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" v-model="user.password">
                </div>
            </div>
            <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">Perfil</legend>
                <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="1" v-model="user.role_id">
                    <label class="form-check-label" for="gridRadios1">
                    Docente
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="2" value="2" v-model="user.role_id">
                    <label class="form-check-label" for="gridRadios2">
                    Estudiante
                    </label>
                </div>
                </div>
            </fieldset>
            <button type="submit" class="btn btn-primary" @click="newUser">Sign in</button>
        </form>
    </div>

</template>

<script>
 export default{
    data(){
        return{
            user:{
                name:"",
                email:"",
                password:"",
                role_id:""
            }
        }
    },
    methods:{
        async newUser(e){
            e.preventDefault();
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json"},
            body:  JSON.stringify(this.user)
            }
            const response = await fetch("http://127.0.0.1:8000/api/user/store", options);
            const data = await response.json();
            console.log(data);

            this.user = data.data;
            this.$router.replace({path: '/'});
            alert("Usuario creado con exito");
        }
    }
 }

</script>

<style scoped>
.container{
    margin-top: 20px;
    width: 400px;
    padding:10px;
    margin: 2em auto;
    background-color: #2596be;
    border-radius: 20px;
    color: white;
    box-shadow: 10px 5px 5px black;
}

h1{
    text-align: center;
    background-color: white;
    border-radius: 20px;
    color: black;
}
</style>