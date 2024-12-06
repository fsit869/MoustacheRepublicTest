import SizeOption from "@/models/SizeOption";
import {useState} from "react";
import {RadioGroup, Radio, ButtonGroup, Button, Text, Flex} from '@mantine/core';
import classes from './SizeOption.module.css'
interface sizeOptionProps {
  sizes: SizeOption[]
}

export default function SizeOptions(props: sizeOptionProps) {
  const [value, setValue] = useState(null); // default selected value

  const onButtonClick = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Flex
        gap="xs"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <Text size="xs" c="gray.6">SIZE<span style={{ color: 'red' }}>*</span></Text>
        <Text size="xs" fw={500}>{value}</Text>
      </Flex>

      <ButtonGroup className={classes.buttonGroup}>
        {props.sizes.map((size) => {
          return <Button
            className={classes.button}
            key={size.id}
            value={size.label}
            active={value == size.label}
            onClick={() => onButtonClick(size.label)}
          >
            {size.label}
          </Button>
        })}
      </ButtonGroup>
    </>

  );
}
