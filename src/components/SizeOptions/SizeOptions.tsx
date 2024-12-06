import SizeOption from "@/models/SizeOption";
import {useState} from "react";
import {RadioGroup, Radio, ButtonGroup, Button} from '@mantine/core';
import classes from './SizeOption.module.css'
interface sizeOptionProps {
  sizes: SizeOption[]
}

export default function SizeOptions(props: sizeOptionProps) {
  const [value, setValue] = useState('react'); // default selected value

  return (
    <ButtonGroup className={classes.buttonGroup} value={value} onChange={setValue}  description="SIZE">
      {props.sizes.map((size) => {
        return <Button className={classes.button} key={size.id} value={size.label}>
          {size.label}
        </Button>
      })}
    </ButtonGroup>
  );
}
