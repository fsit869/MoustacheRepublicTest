import SizeOption from "@/models/SizeOption";
import {Button, ButtonGroup, Flex, Text} from '@mantine/core';
import classes from './SizeOption.module.css'

interface sizeOptionProps {
  sizes: SizeOption[] | null
  sizeState: string,
  setSizeState : any
}

export default function SizeOptions(props: sizeOptionProps) {

  const onButtonClick = (newValue) => {
    props.setSizeState(newValue);
  };

  const getSizes = () => {
    if (props.sizes == null || props.sizes.length == 0) {
      return <Text>No sizes available</Text>
    }

    return props.sizes.map((size) => {
      return <Button
        className={classes.button}
        key={size.id}
        value={size.label}
        active={props.sizeState == size.label}
        onClick={() => onButtonClick(size.label)}
      >
        {size.label}
      </Button>
    })
  }


  return (
    <>
      <Flex
        gap="xs"
        justify="flex-start"
        align="stretch"
        direction="row"
        wrap="wrap"
      >
        <Text size="xs" c="gray.6">SIZE<span style={{ color: 'red' }}>*</span></Text>
        <Text size="xs" fw={500}>{props.sizeState}</Text>
      </Flex>

      <ButtonGroup className={classes.buttonGroup}>
        {getSizes()}
      </ButtonGroup>
    </>

  );
}
