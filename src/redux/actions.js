import { ADD_TEXT, REMOVE_ALL, REMOVE_TEXT } from "./actionTypes"

export const addText = content => ({
  type: ADD_TEXT,
  content
})

export const removeText = content => ({
  type: REMOVE_TEXT,
  key: content.key
})

export const removeAll = content => ({
  type: REMOVE_ALL
})