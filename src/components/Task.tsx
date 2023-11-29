"use client";

import { Checkbox, Box, Text, Center, CheckboxGroup } from "@chakra-ui/react"
import { AiFillDelete } from "react-icons/ai";

type Props = {
  id: string
  name: string
  isDone: boolean
  index: number
  toggleIsDone: (index: number) => void
  destroyTask: (id: string) => void
}

export const Task = (props: Props) => {
  const { id, name, destroyTask } = props
  return (
    <Box mb="16px" display="flex" alignItems="center">
      <Checkbox
        isChecked={props.isDone}
        colorScheme="blue"
        size="lg"
        onChange={() => {
          props.toggleIsDone(props.id, props.index);
        }}
        mr="2"
      >
        <Text>{name}</Text>
      </Checkbox>
      <AiFillDelete onClick={() => destroyTask(id)} />
    </Box>
  )
}
