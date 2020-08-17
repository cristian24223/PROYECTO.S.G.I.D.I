var d = new Date();

// // $("input:radio[name='pregunta']:checked").val();

// guardar todos los datos.
$('#saveForm').click(() => {
    var datas = {
        tda: $('#tipoAtencion'),
        fac: $('#fechaActual'),
        fat: $('#fechaAtencion'),
        man: $('#nombreCompleto'),
        edd: $('#edadEncuestado'),
        idn: $('#idIdentificacion'),
        tel: $('#telefono'),
        eps: $('#epsPaciente'),
        p01: $('input:radio[name=pregunta1]:checked'),
        p02: $('input:radio[name=pregunta2]:checked'),
        p03: $('input:radio[name=pregunta3]:checked'),
        p04: $('input:radio[name=pregunta4]:checked'),
        p13: $('#pregunta13'),
        p14: $('#pregunta14'),
        com: $('#comentarios'),
    }
    console.log('ejecutando...')
    console.log(datas)
    console.log(d)
});

// $('#clearForm').click(()=>{
//   alert('ERROR ')
// });

