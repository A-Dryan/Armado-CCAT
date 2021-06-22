<template>
<v-row style="height: 100%; width: 100%">
  <v-col cols="3">
   <MenuInterface/>
  </v-col>
  <v-col cols="9" class="mt-4">
    <v-container class="add_eventos">
        <div class="add_event-main">
            <div class="titulo-prox-eventos">
                <h3 class="titulo">{{titulo}}</h3>
            </div>
            
            <v-btn type="button" color="success" id="button-plus" @click="estado_addEvent = !estado_addEvent"><!-- B4 -->
                <img src="@/assets/img/plus.png" alt="agregar eventos">
            </v-btn>

            <!-- Start: Ventana desplegable de Agregar Evento -->
            <form action="" method="POST" target="_blank">
                <div class="addEvento" id="addEvent2" v-show="estado_addEvent === true || eventos.length === 0">
                    <div class="addEvent-inputs"> <!-- B4  todos los inputs-->
                        <input type="text" class="form-control my-3" v-model="nuevoEvento.tema" name="tema" 
                        placeholder="Tema" required>
                        <input type="text" class="form-control my-3" v-model="nuevoEvento.expositor" name="expositor"
                        placeholder="Expositor" required>
                        <input type="date" class="form-control my-3" v-model="nuevoEvento.fecha" name="fecha"
                        placeholder="Fecha" required>
                        <input type="url" class="form-control my-3" v-model="nuevoEvento.url" name="url"
                        placeholder="URL: Facebook/pagweb" pattern="https://.*" required>
                    </div>
                    <div class="addEvent-img">
                        <div class="addEvent-img-browser">
                            <span>Subir foto: </span>
                            <input type="file" name="imgSubida" id="uploadImage-i" accept="image/png, .jpeg, .jpg, image/gif">
                            <label for="uploadImage-i" @click="previsualizarImagen('i')" class="addEvent-img-browser-subirFoto btn btn-primary"> <!-- B4 -->
                                <img src="@/assets/img/open.png" alt="subir foto">
                            </label>
                        </div>
                        <div id="preview-img-i" class="addEvent-img-preview">
                        </div>
                    </div>
                    <div class="addEvent-btn">
                        <v-btn type="submit" color="primary" id="btn_guardar" @click="agregarEvento"> <!-- B4 LISTO-->
                            Guardar
                        </v-btn>
                    </div>
                </div>
            </form>
            <!-- End: Ventana desplegable de Agregar Evento -->

            <!-- Start: Lista de evento -->
            <div class="listEvent" v-for="(evento, index) of eventos" :key="evento.id"> <!-- B4 -->
                <div role="alert" class="listEvent-item alert alert-success"> <!-- B4 LISTO -->
                    <div class="listEvent-item-head">
                        <div class="listEvent-item-head-info">
                            {{index + 1}}.- {{evento.tema}} &#8226; {{evento.expositor}} &#8226; {{evento.fecha}}
                            &#8226; {{evento.url}}
                        </div>
                        <div class="listEvent-item-head-btn">
                            <v-btn color="success" @click="updateIndice(index)"><!-- B4 LISTO -->
                                <img src="@/assets/img/pencil.png" alt="editar">
                            </v-btn>
                            <v-btn color="error" @click="eliminar(index)"><!-- B4 LISTO -->
                                <img src="@/assets/img/trash.png" alt="eliminar">
                            </v-btn>
                        </div>
                    </div>

                    <!-- Start: Ventana desplegable de editar -->
                    <form action="" method="POST" target="_blank">
                        <div class="editEvento" v-show="indexListEvent === index">
                            <div class="editEvent-inputs"> <!-- B4  todos los inputs-->
                                <input type="text" class="form-control my-3" v-model="evento.tema" 
                                placeholder="Tema" required>
                                <input type="text" class="form-control my-3" v-model="evento.expositor" 
                                placeholder="Expositor" required>
                                <input type="date" class="form-control my-3" v-model="evento.fecha" 
                                placeholder="Fecha" required>
                                <input type="url" class="form-control my-3" v-model="evento.url" 
                                placeholder="URL: Facebook/pagweb" pattern="https://.*" required>
                            </div>
                            <div class="editEvent-img">
                                <div class="editEvent-img-browser">
                                    <span>Subir foto: </span>
                                    <input type="file" name="imgSubida" v-bind:id="'uploadImage-' + index" accept="image/png, .jpeg, .jpg, image/gif">
                                    <label v-bind:for="'uploadImage-' + index" @click="previsualizarImagen(index)" 
                                    class="editEvent-img-browser-subirFoto btn btn-primary"
                                    color="primary"> <!-- B4 -->
                                        <img src="@/assets/img/open.png" alt="subir foto">
                                    </label>
                                </div>
                                <div v-bind:id="'preview-img-' + index" class="editEvent-img-preview">
                                    <div v-if="evento.ubicacionImg === ''">
                                        <img src="@/assets/img/fondoPrueba.jpg" v-bind:alt="'Imagen ' + evento.tema">
                                    </div>
                                    <div v-else>
                                        <img v-bind:src="evento.ubicacionImg" v-bind:alt="'Imagen ' + evento.tema">
                                    </div>
                                </div>
                            </div>
                            <div class="editEvent-btn">
                                <v-btn type="submit" color="primary" id="" @click="guardar"> <!-- B4 LISTO -->
                                    Guardar
                                </v-btn>
                            </div>
                        </div>
                    </form>
                    <!-- End: Ventana desplegable de editar -->

                </div>
            </div>
            <!-- End: Lista de evento -->

        </div>
    </v-container>
     </v-col>
</v-row>
</template>

<script>
import MenuInterface from '../components/MenuInterface'

export default {
    name: 'AgregarEventos',

    components: {
      MenuInterface,
    },
    data() {
        return {
            titulo:'PROXIMOS EVENTOS',
            eventos: [],
            nuevoEvento:{
                tema: 'Habilidades Blandas',
                expositor: 'Karla',
                fecha: '2021-03-21',
                url: 'https://facebook.com/CCAT',
                estado: '',
                ubicacionImg: ''
            },
            estado_addEvent: false,
            indexListEvent: -1,

        }
    },
    methods:{
        previsualizarImagen(index){
            try {
                document.getElementById(`uploadImage-${index}`).onchange = function(e){
                    let reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    reader.onload= function(){
                        let preview = document.getElementById(`preview-img-${index}`);
                        let image = document.createElement('img');
                        image.src = reader.result;
                        preview.innerHTML = '';
                        preview.append(image);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
        updateIndice(index){
            if(this.indexListEvent === index){
                this.indexListEvent = -1;
            } else {
                this.indexListEvent = index;
            }
        },
        agregarEvento(){
            this.eventos.push({
                tema: this.nuevoEvento.tema,
                expositor: this.nuevoEvento.expositor,
                fecha: this.nuevoEvento.fecha,
                url: this.nuevoEvento.url,
                estado: '',
                ubicacionImg: this.nuevoEvento.ubicacionImg
            });
            this.nuevoEvento={
                tema: 'Habilidades Blandas',
                expositor: 'Karla',
                fecha: '2021-03-21',
                url: 'https://facebook.com/CCAT',
                estado: '',
                ubicacionImg: ''
            };
            localStorage.setItem('prox-eventos',JSON.stringify(this.eventos));
        },
        guardar(){
            localStorage.setItem('prox-eventos',JSON.stringify(this.eventos));
        },
        eliminar(index){
            this.eventos.splice(index,1);
            localStorage.setItem('prox-eventos',JSON.stringify(this.eventos));
        }
    },
    created(){
        let datosDB = JSON.parse(localStorage.getItem('prox-eventos'));
        if(datosDB === null){
            this.eventos = [];
        }else{
            this.eventos = datosDB;
        }
    }
}
</script>
<style>
.addEvent-img-preview img,
.editEvent-img-preview img  {
    max-width: 100%;
    max-height: 100%;
}
</style>

<style scoped>
/* Clases de bootstrap */
.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.my-3 {
    margin-bottom: rem;
    margin-top: 1rem;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-appearance: button;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
}
.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}
.btn-primary:hover{
    background-color: #238cfc;
}
.alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
}
.alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
}

/* Estilos del DIV principal*/
.add_eventos {
    position: relative;
    margin-top: 50px;
    padding: 10px 10px 0;
    width: 100%;
    min-height: 487px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Contenedor del Agregar Eventos y sus  filas añadidas */
.add_event-main {
    width: 770px;
}
.titulo-prox-eventos {
    padding: 0;
}

.titulo {
    padding-bottom: 5px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.75rem;
}
.addEvento{
    position: relative;
    margin: 15px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 10px;
    width: 100% ;
    height: auto;
    background-color: #bbfc2356;
}
.addEvent-inputs {
    width: 370px;
    height: 230px;
    margin: 5px;
}
.addEvent-img {
    flex-direction: column;
    justify-content: center;
    width: 290px;
    height: 230px;
    margin: 5px;
}
.addEvent-img-browser{
    position: relative;
    margin-top: 15px;
    width: 100%;
    height: 50px;
}
.addEvent-img-browser span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5%;
    text-align: left;
    width: auto;
    padding-top: 9px;
}
.addEvent-img-browser input{
    display: none;
}
.addEvent-img-browser-subirFoto{
    position: absolute;
    left: 40%;
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.addEvent-img-preview {
    margin: 5px 0px;
    height: 150px;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.addEvent-btn{
    width: 370px;
    height: auto;
    margin: 5px 5px;
}
.addEvent-btn button {
    width: 370px;
}
/* Lista de eventos */
.listEvent {
    margin-top: 1rem;
}
.listEvent-item-head {
    display: flex;
    justify-content:space-between;
    align-items: center
}

.listEvent-item-head-info {
    overflow: hidden;
    width: 60%;
}
.listEvent-item-head-btn {
    display: flex;
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100px;
}
.listEvent-item-head-btn button {
    min-width: 40px !important; 
    padding: 0 !important;
}

/* Ventana desplegable de editar */
.editEvento{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0 0;
    width: 100% ;
    height: auto;
}
.editEvent-inputs {
    width: 370px;
    height: 230px;
    margin: 5px;
}
.editEvent-img {
    flex-direction: column;
    justify-content: center;
    width: 290px;
    height: 230px;
    margin: 5px;
}
.editEvent-img-browser{
    position: relative;
    margin-top: 15px;
    width: 100%;
    height: 50px;
}
.editEvent-img-browser span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5%;
    text-align: left;
    width: auto;
    padding-top: 9px;
}
.editEvent-img-browser input{
    display: none;
}
.editEvent-img-browser-subirFoto{
    position: absolute;
    left: 40%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.editEvent-img-preview {
    margin: 5px 0px;
    height: 150px;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.editEvent-img-preview div {
    height: 150px;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.editEvent-img-preview div img  {
    max-width: 100%;
    max-height: 100%;
}
.editEvent-btn{
    width: 370px;
    height: auto;
    margin: 5px 5px 0;
}
.editEvent-btn button {
    width: 370px;
}

@media (min-width: 810px){
    .add_event-main {
        width: 770px
    }
}

@media (max-width: 810px){
    .add_event-main {
        width: 100%;
        margin: 0 10px
    }
    .editEvent-btn{
        margin: 5px;
        padding-left: .8em;
    }
    .addEvent-btn{
        padding-left: .8em;
    }
}
@media (max-width: 750px){
    .editEvent-img {
        width: 370px
    }
    .editEvent-btn{
        width: 370px;
        padding-left: 0;
    }
    .addEvento::before{
        height: 520px;
    }
    .addEvent-img {
        width: 370px
    }
    .addEvent-btn{
        width: 370px;
        padding-left: 0;
    }
}
@media (max-width: 440px){
    .editEvent-btn{
        width: 100%;
        margin: 5px;
    }
    .editEvent-btn button {
        width: 100%;
    }
    .addEvent-btn{
        width: 100%;
        margin: 5px;
    }
    .addEvent-btn button {
        width: 100%;
    }
    .listEvent-item-head-btn {
        width: 60px;
    }
}

@media (max-width: 390px){
    .editEvent-img, .addEvent-img,
    .editEvent-inputs, .addEvent-inputs{
        width: 100%;
    }
}

</style>