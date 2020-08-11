import React, {useState} from 'react';
import Container from "react-bootstrap/cjs/Container";
import Form from "react-bootstrap/cjs/Form";
import Button from "react-bootstrap/cjs/Button";
import InputGroup from "react-bootstrap/cjs/InputGroup";
import findTimeToAndromeda from "./lib/calculateTime";
import DropdownButton from "react-bootstrap/cjs/DropdownButton";
import Dropdown from "react-bootstrap/cjs/Dropdown";
import {Unit, UNIT_MAPPING} from "./lib/mathConstants";

const App = () => {
    const formControlSpeedInput = 'formControlSpeedInput';

    const [timeToAndromeda, setTimeToAndromeda] = useState(0);
    const [units, setUnits] = useState<Unit>({name: 'Unit', conversion: 0});

    const updateUnits = (eventKey: any) => {
        setUnits(UNIT_MAPPING[eventKey]);
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if(form.checkValidity()){
            event.preventDefault();
            event.stopPropagation();
        }

        setTimeToAndromeda(findTimeToAndromeda(form[formControlSpeedInput].value, units));
    }

    const resultHidden = timeToAndromeda === 0;

  return (
    <Container>
      <h2 className={'text-center m-5'}>
        {'How long will it take me to travel to the Andromeda galaxy?'}
      </h2>
        <Container className={'d-flex justify-content-center mb-5'}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId={formControlSpeedInput}>
                    <Form.Label>{'How fast are you going?'}</Form.Label>
                    <InputGroup>
                        <Form.Control type={'number'} placeholder={'Enter Speed'} required />
                            <DropdownButton
                                as={InputGroup.Append}
                                title={units.name}
                                variant={'outline-secondary'}
                                onSelect={updateUnits}
                            >
                                {UNIT_MAPPING.map((unit: Unit, index: number) =>
                                        <Dropdown.Item eventKey={index.toString()} key={unit.name}>
                                            {unit.name}
                                        </Dropdown.Item>
                                )}
                            </DropdownButton>
                    </InputGroup>
                </Form.Group>
                <Button variant={'primary'} type={'submit'}>
                    {'Find Out!'}
                </Button>
            </Form>
        </Container>
        <h5 hidden={resultHidden} className={'text-center'}>
            {`${timeToAndromeda} Years!`}
        </h5>
    </Container>
  );
}

export default App;
