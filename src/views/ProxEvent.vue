<template>
    <v-container class="prox_eventos">
        <!-- Mostrar Eventos -->
        <div class="prox_eventos-mosaicos">
            <div class="titulo-prox-eventos">
                <h3 class="titulo">{{titulo}}</h3>
            </div>
            <!-- Mostrar los Eventos Agrupados -->
            <div class="grupo" v-bind:id="index" 
            v-for="(grupoEvento, index) of eventosAgrupados" :key="grupoEvento.id"
            v-show="indice === index">
                <div class="evento" v-bind:id="index + '-' + index2" 
                v-for="(evento, index2) of grupoEvento" :key="evento.id">
                    <span class="evento-fecha">{{evento.fecha}}</span>
                    <div class="evento_foto">
                        <div v-if="evento.ubicacionImg === ''">
                            <img src="@/assets/img/fondoPrueba.jpg" v-bind:alt="'Imagen ' + evento.tema">
                        </div>
                        <div v-else>
                            <img v-bind:src="evento.ubicacionImg" v-bind:alt="'Imagen ' + evento.tema">
                        </div>
                    </div>
                    <span class="evento_tema">Tema: {{evento.tema}}</span>
                    <span class="evento_expositor">Expositor: {{evento.expositor}}</span>
                    <button class="btn btn-success evento_btn_inscribir">Inscripción</button> <!-- B4 -->
                </div>
            </div>
            <!-- Navegacion con indices -->
            <div class="indice-eventos">
                <div>
                    <span v-on:click="fLeft">
                        &lt;
                    </span>
                    <span v-on:click="ubicarIndice(index)"
                    v-for="(grupoEvento, index) of eventosAgrupados" :key="grupoEvento.id"
                    v-bind:id="index + '-a'">
                        {{index + 1}}
                    </span>
                    <span v-on:click="fRight">
                        &gt;
                    </span>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'ProximosEventos',
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
            eventosAgrupados: [],
            indice: 0,
        }
    },
    methods:{
        ponerNegrita(index){
            for(let elemt_evento of this.eventosAgrupados) {
                if (index === this.eventosAgrupados.indexOf(elemt_evento)){
                    // poner en negrita
                    let elemt_a = document.getElementById(index + '-a');
                    elemt_a.style.fontWeight = "bold";
                } else {
                    // sin negrita
                    let elemt_a = document.getElementById(this.eventosAgrupados.indexOf(elemt_evento) + '-a');
                    elemt_a.style.fontWeight = "normal";
                }
            }
        },
        ubicarIndice(index){
            this.indice = index;
            this.ponerNegrita(index)
        },
        fLeft(){
            if(this.indice - 1 >= 0){
                this.indice = this.indice - 1;
                this.ponerNegrita(this.indice)
            };
        },
        fRight(){
            if(this.indice + 1 <= this.eventosAgrupados.length - 1){
                this.indice = this.indice + 1;
                this.ponerNegrita(this.indice)
            };
        },
        agruparEventos(){
            let cont = 0;
            let act = 0;
            let grupoEvento = [];
            this.eventosAgrupados = [];
            for(let evento of this.eventos){
                cont++;
                act++;
                if(cont < 5){
                    grupoEvento.push(evento);
                    if(grupoEvento.length === 4){
                        this.eventosAgrupados.push(grupoEvento);
                        grupoEvento = [];
                        cont = 0;
                    }else if(act === this.eventos.length){
                        this.eventosAgrupados.push(grupoEvento);
                        grupoEvento = [];
                    }
                }
                
            }
        }
    },
    created(){
        let datosDB = JSON.parse(localStorage.getItem('prox-eventos'));
        if(datosDB === null){
            this.eventos = [];
        }else{
            this.eventos = datosDB;
            this.agruparEventos();
        }
    },
    mounted(){
        let elemt_a = document.getElementById('0-a');
        if(elemt_a){
            elemt_a.style.fontWeight = "bold";
        }
    },
}
</script>

<style scoped>
/* Clases de bootstrap */
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
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
}
.btn-success{
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}

/* DIV Principal */
.prox_eventos {
    margin-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

/* Contenedor de Mostrador de evento agrupados en 4 */
.prox_eventos-mosaicos {
    min-height: 487px;
    width: 50%;
    padding: 10px;
    /* display:flexbox;
    align-items: center;
    justify-content: center; */
}

.titulo-prox-eventos {
    padding: 0 3% 0 3%;
}

.titulo {
    border-bottom: black 2px solid;
    padding-bottom: 5px;
    margin-bottom: 5px;
    font-size: 1.75rem;
    font-weight: 500;
}

.grupo {
    display:block;
    min-height: 450px;
    padding: 20px 10px 20px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
/* Estilos de cada Evento en forma de tarjeta*/
.evento {
    border: black 1px solid;
    margin: 15px 10px 15px 10px;
    padding: 7px;
    width: 250px;
    height: 180px;
    background: #fff;
    position: relative;
}

.evento-fecha {
    position: absolute;
    transform: translateY(-113%);
    z-index: 90;
    background: #fff;
}

.evento_foto {
    box-sizing: border-box;
    max-width: 95%;
    max-height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 80;
}
.evento_foto img {
    max-width: 100%;
    max-height: 100%;
}
                
.evento_tema,
.evento_expositor,
.evento_btn_inscribir {
    position: absolute;
    font-size: small;
}

.evento_tema {
    top: 79%;
    left: 2px;
    background: #fff;
    z-index: 110;
}
.evento_expositor {
    top: 88%;
    left: 2px;
    background: #fff;
    z-index: 100;
}
.evento_btn_inscribir {
    top: 79%;
    left: 63%;
    z-index: 120;
}

/* Contenedor de la navegación de eventos agrupados */
.indice-eventos {
    margin: 5px 0 5px 0;
    padding: 5px;
    display: flex;
    justify-content: center;
}

.indice-eventos div {
    padding: 0 2px 0 2px;
}

.indice-eventos div span {
    color: #000;
    font-size: 20px;
    margin: 1px;
    padding: 1px;
    cursor: pointer;
}

/* Ajustar al tamaño de la ventana */
@media (min-width: 700px){
    .prox_eventos-mosaicos {
        min-height: 200px;
        width: 640px;
        padding: 10px;
    }
}

@media (max-width: 700px){
    .prox_eventos {
        padding: 10px 0 10px 0;
    }
    .prox_eventos-mosaicos {
        min-height: 200px;
        width: 100%;
        padding: 10px;
    }
    .grupo {
        min-height: 300px;
    }
} 
@media (max-width: 600px){
    .grupo {
        padding: 20px 0;
    }
    .evento {
        margin: 15px 0;
    }
} 
</style>