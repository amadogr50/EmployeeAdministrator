const SOLICITUDES = {
  ADD_SOLICITUDE: 'ADD_SOLICITUDE',
};

const addSolicitude = solicitude => ({
  type: SOLICITUDES.ADD_SOLICITUDE,
  solicitude,
});

export {SOLICITUDES, addSolicitude};
