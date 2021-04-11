import React, {useImperativeHandle, useState} from 'react';
import Dialog from 'react-native-dialog';
import styled from 'styled-components/native';

const Content = styled.View``;

const ConfirmationDialog = React.forwardRef(
  ({onCancel, onConfirm, title, children}, ref) => {
    const [visible, setVisible] = useState(false);

    const _onCancel = () => {
      setVisible(false);
      if (onCancel) onCancel();
    };

    const _onConfirm = () => {
      setVisible(false);
      onConfirm();
    };

    const showDialog = () => {
      setVisible(true);
    };

    const hideDialog = () => {
      setVisible(false);
    };

    useImperativeHandle(ref, () => ({
      showDialog: showDialog,
      hideDialog: hideDialog,
    }));

    return (
      <Dialog.Container visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Content>{children}</Content>
        <Dialog.Button label="Cancel" onPress={_onCancel} />
        <Dialog.Button label="Confirm" onPress={_onConfirm} />
      </Dialog.Container>
    );
  },
);

export default ConfirmationDialog;
