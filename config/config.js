const config = {
  ApiBaseUrl: 'http://192.168.1.12:3000',
  // GetParticipantsUrl: () => `${config.ApiBaseUrl}/participants`
  GetParticipantsUrl: () => `${config.ApiBaseUrl}/parsed-participants`
}

export default config;