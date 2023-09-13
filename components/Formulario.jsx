import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from '../assets/styles/styles1';

export default function Formulario() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [def, setDef] = useState('');
  const [obsv, setObsv] = useState('');
  const [obsvColor, setObsvColor] = useState('');
  const [data, setData] = useState([]);



  const guardarDatos = () => {
    if (id && name && subject && nota1 && nota2 && nota3 && def && obsv && obsvColor) {
      const nuevoDato = {
        id,
        name,
        subject,
        nota1,
        nota2,
        nota3,
        def,
        obsv,
        obsvColor,
      };
      setData([...data, nuevoDato]);
      setId('');
      setName('');
      setSubject('');
      setNota1('');
      setNota2('');
      setNota3('');
      setDef('');
      setObsv('');
      setObsvColor('');
    } else {
      setObsv('Datos guardados correctamente.');
    }
  };

  const calcularDefinitiva = () => {

    const nota1Numero = parseFloat(nota1);
    const nota2Numero = parseFloat(nota2);
    const nota3Numero = parseFloat(nota3);

    if (isNaN(nota1Numero) || isNaN(nota2Numero) || isNaN(nota3Numero)) {
      setDef('Error: Ingresa notas válidas');
      return;
    }

    if (nota1Numero < 0 || nota1Numero > 5 || nota2Numero < 0 || nota2Numero > 5 || nota3Numero < 0 || nota3Numero > 5) {
      setDef('Error: Las notas deben estar en el rango de 0 a 5');
      return;
    }

    // Calcular la definitiva
    const definitiva = nota1Numero * 0.3 + nota2Numero * 0.35 + nota3Numero * 0.35;

    setDef(definitiva.toFixed(2)); // Redondea la definitiva a 2 decimales

    // Calcula la observación
    let observacion = '';
    let observacionColor = '';
    if (definitiva >= 3) {
      observacion = 'Ganaste!!!';
      observacionColor = 'green';
    } else if (definitiva < 2) {
      observacion = 'Pierde :(';
      observacionColor = 'red';
    } else if (definitiva >= 2 && definitiva < 2.95) {
      observacion = 'Habilita ';
      observacionColor = 'orange';
    }

    setObsv(observacion);
    setObsvColor(observacionColor);
  };




  const consultarDatos = () => {
    if (data.length === 0) {
      setObsv('No hay datos almacenados.');
    } else {
      let datosConsulta = 'Datos almacenados:\n';
      data.forEach((dato) => {
        datosConsulta += `ID: ${dato.id},\n Nombre: ${dato.name},\n Asignatura: ${dato.subject},\n Definitiva: ${dato.def},\n Observacion: ${dato.obsv}`;
      });
      setObsv(datosConsulta);
    }
  };

  const borrarDatos = () => {
    setData([]);
    setObsv('Datos borrados correctamente.');
  };
    
    return(


    <View style={styles.container}>


        <View style={{ flex: 8, width: '100%', alignItems: 'center', justifyContent: 'center', color:"white", marginTop:20}}>

        <Text style={{fontSize:20, margin:10, color:'white'}}>Identificacion:</Text>
        
        <TextInput
          label='Digite identificacion'
          onChangeText={id => setId(id)}
          value={id}
          style={{backgroundColor: 'lightgray'}}
          left={<TextInput.Icon icon="account"/>}
          />
        <Text style={{fontSize:20, margin:10, color:'white'}}>Asignatura:</Text>
        
        <TextInput
          label='Digite Asignatura'
          onChangeText={subject => setSubject(subject)}
          value={subject}
          style={{backgroundColor: 'lightgray'}}
          left={<TextInput.Icon icon="alien-outline"/>}
          />

        <Text style={{fontSize:20, margin:10, color:'white'}}>Nombre</Text>
        <TextInput
          label='Ingrese su nombre'
          onChangeText={name => setName(name)}
          value={name}
          style={{backgroundColor: 'lightgray'}}
          left={<TextInput.Icon icon="account-heart"/>}
          />



        <View style={{ flexDirection: 'row', paddingTop: 40 , margin: 10}}>
        <Text style={{fontSize:20, marginTop:0, color: 'white'}}>Nota 1 </Text>
          <TextInput
            label='   '
            onChangeText={nota1 => setNota1(nota1)}
            value={nota1}
            style={{backgroundColor: 'lightgray', width:150, height:30, marginLeft:20}}
            left={<TextInput.Icon icon="numeric"/>}
            />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 , margin: 10}}>
          <Text style={{fontSize:20, marginTop:0, color: 'white'}}>Nota 2 </Text>
          <TextInput
            label='   '
            onChangeText={nota2 => setNota2(nota2)}
            value={nota2}
            style={{backgroundColor: 'lightgray', width:150, height:30, marginLeft:20}}
            left={<TextInput.Icon icon="numeric"/>}
            />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 , margin: 10}}>
          <Text style={{fontSize:20, marginTop:0, color: 'white'}}>Nota 3 </Text>
          <TextInput
            label='   '
            onChangeText={nota3 => setNota3(nota3)}
            value={nota3}
            style={{backgroundColor: 'lightgray', width:150, height:30, marginLeft:20}}
            left={<TextInput.Icon icon="numeric"/>}
            />
        </View>



        
        <View style={{ paddingTop: 10}}>
        <text style={{}}>Definitiva:</text>
        <text>{def}</text>
        <text style={{paddingTop:10}}>Observaciones:</text>
        </View>



        <text style={{ backgroundColor: 'gray', padding: 15, borderRadius: 50, fontSize: 30, color: obsvColor, margin:50 }}>{obsv}</text>


        <Button style={{ backgroundColor: 'gray', width: 200, margin: 5 }} mode="contained" onPress={calcularDefinitiva}>
        Calcular
      </Button>
      <Button style={{ backgroundColor: 'gray', width: 200, margin: 5 }} mode="contained" onPress={guardarDatos}>
        Guardar
      </Button>
      <Button style={{ backgroundColor: 'gray', width: 200, margin: 5 }} mode="contained" onPress={consultarDatos}>
        Consultar
      </Button>
      <Button style={{ backgroundColor: 'gray', width: 200, margin: 5 }} mode="contained" onPress={borrarDatos}>
        Borrar
      </Button>

        </View>
    </View>

)

}