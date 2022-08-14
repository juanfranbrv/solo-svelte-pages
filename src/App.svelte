<script>
//   import Mensaje from "./Mensaje.svelte";
// import Boton from "./Boton.svelte"
let mensaje ="¡Hola, soy estático!"

function cambiarMensaje() {

  mensaje == "¡Hola, soy estático!"
    ? (mensaje = "...bueno, no siempre.")
    : (mensaje = "¡Hola, soy estático!");
}
  
</script>


<h1>{mensaje}</h1>
<img id="boton" src="boton_play.png" alt="" on:click="{cambiarMensaje}">
<p>GitHub Pages</p>

<style>
  h1 {
    font-weight: 800;
    font-size: 100px;
  }

  #boton {
    margin-top: 2rem;
    cursor: pointer;
}

</style>
