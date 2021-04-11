import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dimensions from '../theme/dimensions';
import {TextInput} from 'react-native';
import {Body, Input as InputText} from '../theme/typography';

const Container = styled.View``;

const Label = styled(Body)`
  color: ${({color}) => color};
  margin-bottom: ${({theme}) => theme.spacing.xxs};
`;

const Error = styled(Body)`
  color: ${({theme}) => theme.colors.error};
  margin-top: ${({theme}) => theme.spacing.xxs};
`;

const ContentContainer = styled.View`
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.surfaceAlternative};
  padding: ${({theme}) => theme.spacing.xs};
  border-radius: ${({theme}) => theme.spacing.xxs};
  justify-content: space-between;
`;

const Value = styled(InputText)`
  flex: 1;
  color: ${({theme}) => theme.colors.onSurfaceAlternative};
`;

const Input = ({
  value,
  labelColor,
  label,
  iconName,
  placeholder,
  isTextInput,
  onChangeText,
  textProps,
  error,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <Label color={labelColor}>{label}</Label>
      <ContentContainer>
        {isTextInput ? (
          <TextInput
            style={{
              color: theme.colors.onSurfaceAlternative,
              padding: 0,
              fontFamily: 'Arial',
              fontSize: 14,
              fontWeight: '700',
              flex: 1,
            }}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.onSurfaceAlternative}
            onChangeText={onChangeText}
            {...textProps}
          />
        ) : (
          <Value>{value ? value : placeholder}</Value>
        )}
        {iconName && (
          <Icon
            name={iconName}
            size={dimensions.m}
            color={theme.colors.onSurfaceAlternative}
          />
        )}
      </ContentContainer>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
