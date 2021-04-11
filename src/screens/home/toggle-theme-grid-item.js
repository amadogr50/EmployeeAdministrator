import React from 'react';
import HomeGridItem from './home-grid-item';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../redux/actions/theme';

const ToggleThemeGridItem = ({style}) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const onPress = () => {
    dispatch(toggleTheme());
  };

  return (
    <HomeGridItem
      style={style}
      onPress={onPress}
      iconName={isDarkMode ? 'lightbulb-on' : 'lightbulb-outline'}
      title="Toggle Theme"
    />
  );
};

export default ToggleThemeGridItem;
