import {useWindowDimensions} from 'react-native';

const Screen = ({tablet, mobile}) => {
  const window = useWindowDimensions();

  if (window.width > 600 && tablet) {
    return tablet;
  }

  return mobile;
};

export default Screen;
