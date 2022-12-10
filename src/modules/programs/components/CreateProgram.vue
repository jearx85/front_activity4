<template>
    <div class="container">
            <form>
                <div class="row">
                    <div class="col">
                        <label for="Semestre" class="form-label" >Semestre</label>
                        <input type="number" 
                        class="form-control" id="Semestre" required name = "Semestre" v-model="programs.semester_id"/>
                    </div>
                    <div class="col">
                        <label for="materia" class="form-label" >Meteria</label>
                        <input type="text" 
                        class="form-control" id="Semestre" required name = "materia" v-model="programs.name"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="credits" class="form-label" >Creditos</label>
                        <input type="number" 
                        class="form-control" id="credits" required name = "credits" v-model="programs.credits"/>
                    </div>
                    <div class="col">
                        <label for="teacher" class="form-label" >Docente</label>
                        <input type="text" 
                        class="form-control" id="teacher" required name = "teacher" v-model="programs.teacher"/>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="prerrequisito" class="form-label" >Asignatura prerrequisito</label>
                    <input type="text" 
                    class="form-control" id="prerrequisito" name = "prerrequisito" v-model="programs.asig_pre"/>
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <label for="horas_aut" class="form-label" >Horas trabajo autonomo</label>
                        <input type="number" 
                        class="form-control" id="horas_aut" required name = "horas_aut" v-model="programs.aut_hours"/>
                    </div>
                    <div class="col">
                        <label for="horas_dir" class="form-label" >Horas trabajo dirigido</label>
                        <input type="number" 
                        class="form-control" id="horas_dir" required name = "horas_dir" v-model="programs.dir_hours"/>
                    </div>
                </div>

                <button type="submit" class="btn btn_update" @click="newProgram">Crear</button>
                <router-link to="/Programs">
                <button type="submit" class="btn btn_cancel">cancelar</button>
                </router-link>
            </form>
        </div>

</template>

<script>
 export default{
    data(){
        return{
            programs:{
                name:"",
                credits:"",
                teacher:"",
                asig_pre:"",
                aut_hours:"",
                dir_hours:"",
                semester_id:""
            }
        }
    },
    methods:{
        async newProgram(e){
            e.preventDefault();
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json"},
            body:  JSON.stringify(this.programs)
            }
            const response = await fetch("http://127.0.0.1:8000/api/program/store", options);
            const data = await response.json();
            console.log(data);

            this.programs = data.data;
            this.$router.replace({path: '/programs'});
            alert("programa creado con exito");
        }
    }
 }

</script>

<style scoped>
.container {
    width: 50%;
    margin-top: 15px;
    align-items: stretch;
    padding: 15px;
    border: 1px black;
}

.btn_update{
    background-color: lightslategrey;
    font-weight: bold;
    box-shadow: 1px 1px black;
    width: 15%;
    margin-right: 10px;
}
.btn_update:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
.btn_cancel{
    background-color: lightslategrey;
    font-weight: bold;
    box-shadow: 1px 1px black;
    width: 15%;
    margin-right: 10px;
}
.btn_cancel:hover {
  background-color: orange;
  color: white;
}

</style>