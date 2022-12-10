<template>
    <h1 class = "title">Materias</h1>
    <div class="container">
        
        <table class="table table-hover table-responsive-lg">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Semestre</th>
                <th scope="col">Profesor</th>
                <th scope="col">Asignatura prerrequisito</th>
                <th scope="col">Horas autonomas</th>
                <th scope="col">Horas dirigidas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prog in programs" :key="prog.id" >
                <td>{{ prog.name }}</td>
                <td>{{ prog.semester_id}}</td>
                <td>{{ prog.teacher}}</td>
                <td>{{ prog.asig_pre}}</td>
                <td>{{ prog.aut_hours}}</td>
                <td>{{ prog.dir_hours}}</td>
                </tr>
            </tbody>
        </table>
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

</style>

