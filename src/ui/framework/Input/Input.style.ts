import styled from "styled-components";

export enum InputType {
  Text = 'text',
  Number = 'number',
}

export const Input = styled.input.attrs({ type: InputType.Text })``;

export const Number = styled.input.attrs({ type: InputType.Number })``;

export const TextArea = styled.textarea``;