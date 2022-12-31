import React, { useContext,useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom'; //useNavigate reemplaza a useHistory
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Table from '../../shared/components/FormElements/Table'
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './Search.css';
import { useLocation } from 'react-router-dom';
import { instance } from '../../api';


const SearchItem = () => {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const config = location.state;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPersons, setLoadedPersons] = useState();

  
  const columns = [
    { field: "_id", header: "#" },
    { field: "dni", header: "Dni" },
    { field: "ap_pat", header: "Ap_pat" },
    { field: "ap_mat", header: "Ap_mat" },
    { field: "nombres", header: "Nombres" },
    { field: "fecha_nac", header: "Fecha_nac" },
    { field: "ubigeo_nac", header: "Ubigeo_nac" },
    { field: "ubigeo_dir", header: "Ubigeo_dir" },
    { field: "direccion", header: "Direccion" },
    { field: "sexo", header: "Sexo" },
    { field: "est_civil", header: "Est_civil" },
    { field: "madre", header: "Madre" },
    { field: "padre", header: "Padre" },
  ];

  let form;

  if(config === 'u1'){
    form = {
      document: {
        value: '',
        isValid: false
      },
      payload: {
        value: 'A',
        isValid: false
      }
    }
  }

  if(config === 'u2'){
    form = {
      fatherLastname: {
        value: '',
        isValid: false
      },
      motherLastname: {
        value: '',
        isValid: false
      },
      names: {
        value: '',
        isValid: false
      },
      payload: {
        value: 'B',
        isValid: false
      }
    }
  }

  if(config === 'u3'){
    form = {
      fatherLastname: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      },
      addressUbi: {
        value: '',
        isValid: false
      },
      payload: {
        value: 'C',
        isValid: false
      }
    }
  }

  if(config === 'u4'){
    form = {
      document: {
        value: '',
        isValid: false
      },
      fatherLastname: {
        value: '',
        isValid: false
      },
      motherLastname: {
        value: '',
        isValid: false
      },
      names: {
        value: '',
        isValid: false
      },
      payload: {
        value: 'D',
        isValid: false
      }
    }
  }

  const addJsonToSend = (json) => {
    let obj = {};

    Object.keys(json).forEach(key => {
      obj[key] = formState.inputs[key].value;
    })
    console.log(obj);
    return obj
  }

  const [formState, inputHandler] = useForm(
   form,
    false
  );

  const history = useNavigate();

  
  const searchSubmitHandler = async event => {
    event.preventDefault();

    try {
      //const response = await instance.post('/api/get-list-person', addJsonToSend(form));
      //console.log("resposne", response.data)
      const responseData = await sendRequest(
      'http://localhost:4000/api/get-list-person',
      'POST',
      JSON.stringify(addJsonToSend(form)),
      {'Content-Type': 'application/json'}
      );
       setLoadedPersons(responseData); 
       history.push('/');
      
    } catch (err) {
      console.error(err);
    }
  };

  /*
    useEffect(() => {
      const fetchPersons = async () => {
        try {
          const responseData = await sendRequest(
            'http://localhost:4000/api/get-list-person',
          );
          setLoadedPersons(responseData);      
        } catch (err) {}
      };
      fetchPersons();
      }, [sendRequest]);
*/

    return (
      <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />  
      <form className="search-form" onSubmit={searchSubmitHandler}>
      {isLoading && <LoadingSpinner asOverlay />}
      {
      (config === 'u1') ? (
      <React.Fragment>
      <Input id="document" element="input" name="document" type="text" label="Documento" validators={[VALIDATOR_REQUIRE()]} errorText="Porfavor Ingrese un Documento Válido." onInput={inputHandler}/>
      </React.Fragment>
      ) : (config === 'u2') ? (
      <React.Fragment>
      <Input id="fatherLastname" element="input" name="fatherLastname" type="text" label="Apellido Paterno" validators={[]} errorText="Porfavor Ingrese un Apellido Paterno Válido." onInput={inputHandler} />
      <Input id="motherLastname" element="input" name="motherLastname" type="text" label="Apellido Materno" validators={[]} errorText="Porfavor Ingrese un Apellido Materno Válido." onInput={inputHandler} />
      <Input id="names" element="input" name="names" type="text" label="Nombres" validators={[]}  errorText="Porfavor Ingrese Nombres Válido" onInput={inputHandler} />
      </React.Fragment>
      ) : (config === 'u3') ? (
      <React.Fragment>
      <Input id="fatherLastname" element="input" name="fatherLastname" type="text" label="Apellido Paterno" validators={[VALIDATOR_REQUIRE()]} errorText="Porfavor Ingrese un Apellido Paterno Válido." onInput={inputHandler} />
      <Input id="address" element="input" name="address" type="text" label="Ciudad" validators={[VALIDATOR_REQUIRE()]} errorText="Porfavor Ingrese una Dirección Válida." onInput={inputHandler} />
      <Input id="addressUbi" element="input" name="addressUbi" type="text" label="Direccion" validators={[VALIDATOR_REQUIRE()]} errorText="Porfavor Ingrese una Dirección Válida." onInput={inputHandler} />
      </React.Fragment>
      ) : (config === 'u4') ? (
      <React.Fragment>   
      <Input id="document" element="input" name="document" type="text" label="Documento" validators={[VALIDATOR_REQUIRE()]} errorText="Porfavor Ingrese un Documento Válido." onInput={inputHandler}/>
      <Input id="apellidopaterno" element="input" name="apellidopaterno" type="text" label="Apellido Paterno" validators={[VALIDATOR_REQUIRE()]} errorText="Porfavor Ingrese un Apellido Paterno Válido." onInput={inputHandler} />
      <Input id="apellidomaterno" element="input" name="apellidomaterno" type="text" label="Apellido Materno" validators={[VALIDATOR_REQUIRE()]} errorText="Porfavor Ingrese un Apellido Materno Válido." onInput={inputHandler} />
      <Input id="nombres" element="input" name="nombres" type="text" label="Nombres" validators={[VALIDATOR_REQUIRE()]} errorText="Porfavor Ingrese Nombres Válido" onInput={inputHandler} />
      </React.Fragment>
      ) : (config === 'u5') 
      }
      <Button type="submit" >Buscar</Button>
      </form>,
      <Table data={loadedPersons} columns={columns} hover={true} striped={true} />
      </React.Fragment>
      

  );
};

export default SearchItem;
