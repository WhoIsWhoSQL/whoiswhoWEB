import React from 'react';
import { Alert } from 'reactstrap';

export default function Mensajes({mensaje, tipo}) {

  return (
    <div>
       <Alert color={tipo} isOpen={true}>
        {mensaje}
      </Alert>
    </div>
  )
  }

