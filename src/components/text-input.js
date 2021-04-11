import React from 'react';
import Input from './input';
import ListItem from './list-item';
import {useTheme} from '@react-navigation/native';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: ${({theme}) => theme.spacing.s};
`;

const TextInput = ({
  value,
  style,
  label,
  onChangeText,
  placeholder,
  error,
  ...props
}) => {
  const theme = useTheme();

  return (
    <ListItem style={style} color={theme.colors.error}>
      <Container>
        <Input
          label={label}
          labelColor={theme.colors.error}
          placeholder={placeholder}
          value={value}
          isTextInput={true}
          onChangeText={onChangeText}
          textProps={{
            multiline: true,
            ...props,
          }}
          error={error}
        />
      </Container>
    </ListItem>
  );
};

export default TextInput;
