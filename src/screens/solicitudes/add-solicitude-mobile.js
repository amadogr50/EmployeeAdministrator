import React, {useState} from 'react';
import styled from 'styled-components/native';
import {
  Button,
  DateInput,
  HeaderBack,
  Headline,
  TextInput,
} from '../../components';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {addSolicitude} from '../../redux/actions/solicitudes';

const Container = styled.View`
  flex: 1;
`;

const Content = styled.ScrollView`
  flex: 1;
  padding-horizontal: ${({theme}) => theme.spacing.s};
`;

const StyledHeadline = styled(Headline)`
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const StartDateInput = styled(DateInput)`
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const FinishDateInput = styled(DateInput)`
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const ReasonInput = styled(TextInput)`
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const ApproveButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.success};
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const DenyButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.error};
  margin-bottom: ${({theme}) => theme.spacing.s};
`;

const AddSolicitudeMobile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [startDate, setStartDate] = useState();
  const [finishDate, setFinishDate] = useState();
  const [reason, setReason] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!startDate) {
      isValid = false;
      newErrors.startDate = 'Este campo es requerido';
    }

    if (!finishDate) {
      isValid = false;
      newErrors.finishDate = 'Este campo es requerido';
    }

    if (!reason) {
      isValid = false;
      newErrors.reason = 'Este campo es requerido';
    }

    setErrors(newErrors);
    return isValid;
  };

  const onStartDatePress = () => {
    setErrors({
      ...errors,
      startDate: undefined,
    });
  };

  const onFinishDatePress = () => {
    setErrors({
      ...errors,
      finishDate: undefined,
    });
  };

  const onReasonPress = () => {
    setErrors({
      ...errors,
      reason: undefined,
    });
  };

  const onApprovePress = () => {
    if (validate()) {
      dispatch(
        addSolicitude({
          startDate,
          finishDate,
          reason,
        }),
      );
      navigation.goBack();
    }
  };

  const onDenyPress = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <HeaderBack />
      <Content>
        <StyledHeadline title="Crear solicitud" />
        <StartDateInput
          date={startDate}
          label={'Fecha de Inicio'}
          onChangeDate={setStartDate}
          onPress={onStartDatePress}
          error={errors.startDate}
        />
        <FinishDateInput
          date={finishDate}
          label={'Fecha de Fin'}
          onChangeDate={setFinishDate}
          onPress={onFinishDatePress}
          error={errors.finishDate}
        />
        <ReasonInput
          value={reason}
          label="Razón de Solicitud"
          placeholder="Ingrese razón"
          onChangeText={setReason}
          error={errors.reason}
          onPressIn={onReasonPress}
        />
        <ApproveButton title={'Aprobar'} onPress={onApprovePress} />
        <DenyButton title={'Rechazar'} onPress={onDenyPress} />
      </Content>
    </Container>
  );
};

export default AddSolicitudeMobile;
