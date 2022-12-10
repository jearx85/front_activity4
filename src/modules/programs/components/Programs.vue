<template>
    <h1 class = "title">Materias</h1>
    <div class="container">
        
        <table class="table table-hover table-responsive-lg">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Creado</th>
                <th scope="col">Actualizado</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prog in programs" :key="prog.id" >
                <td v-bind:id="id">{{ prog.id }}</td>
                <td>{{ prog.name }}</td>
                <td>{{ prog.created_at }}</td>
                <td>{{ prog.updated_at }}</td>
                <td><router-link :to = "prog.id + '/update/program'">
                    <button class="btn_edit">Editar</button>
                    </router-link>
                    <button class = "btn_delete" @click="deleteProgram(prog.id)">Eliminar</button>
                </td>
                </tr>
                
            </tbody>
        </table>
        
        <router-link to = '/create/program'>
        <button type="button" class="btn">Nueva materia</button>
        </router-link>

</div>
</template>

<script>
export default {
    props: ['id'],
       async created(){
        //console.log('Token',localStorage.getItem('token'));
            const options = {
                method: "GET", 
                headers: { 
                   
                   'Authorization': 'Token ' + localStorage.getItem('token')
               }
            }

            const response = await fetch("http://127.0.0.1:8000/api/program/all", options);
            const data = await response.json();

            console.log(data);
            

            this.programs = data.data;
        },
        data(){
            return{
                programs: []
            }
        },
        methods:{

            async deleteProgram(id){
                console.log(localStorage.getItem('token'));
                const options = {
                method: "DELETE",
                headers: { 
                   
                    'Authorization': 'Token ' + localStorage.getItem('token')
                },
            }

                const response = await fetch("http://127.0.0.1:8000/api/program/"+ id +"/destroy", options);
                const data = await response.json();
                alert("programa eliminado")
                this.programs = data.data;
            
            }
        }
    }

</script>


<style scoped>
.container{
    margin-top: 15px;
    width: 100%;
}

.title{
    text-align: center;
    margin-top: 15px;
}

.btn{
    background-color: #2596be;
    font-weight: bold;
    box-shadow: 1px 1px black;
    margin-right: 10px;
}
.btn:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}

.btn_edit{
    background-color: #2596be;
    margin-right: 2px;
    border-radius: 5px;
}
.btn_edit:hover{
    background-color: yellow; 
}
.btn_delete{
    background-color: #2596be;
    border-radius: 5px;
}
.btn_delete:hover{
    background-color: red; 
}

</style>

