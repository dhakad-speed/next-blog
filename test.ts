// The URL is formatted with each query parameter on its own line for clarity.
const googleAuthUrl =
  "https://accounts.google.com/v3/signin/accountchooser?" +
  "access_type=offline&" +
  "client_id=733975958425-3g3r05e3q0j7u5j5jv7u50mktgqbbsqo.apps.googleusercontent.com&" +
  "code_challenge=1C5jmFLzuc4uS0__F1eYxBUnj8hUQNZYlcbfP8Z3qCM&" +
  "code_challenge_method=S256&" +
  "prompt=consent&" +
  "redirect_uri=https%3A%2F%2Fnext-blog-rho-wheat.vercel.app%2Fapi%2Fauth%2Fcallback%2Fgoogle&" +
  "response_type=code&" +
  "scope=openid+profile+email&" +
  "dsh=S204731074%3A1763376188881284&" +
  "o2v=2&" +
  "service=lso&" +
  "flowName=GeneralOAuthFlow&" +
  "opparams=%253F&" +
  "continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAOs_lv_1yKUIfpFzB2JfCD1hHa5BogQtxZoaAtqNPwd_ezDDXGnyKlN8esECxqLT_qY0S9zj4Wix3XG-XfHBTg7LheXOowtlIMr5cYOucfkty2VwcRzAmTNhLCZA6qdGvT1AxklFM-a56J88DVX2gRkJ-yS2lXLL2drCBZLjKRM41pDAfFywrH7l-cpW2kj589Biq3ocp2rjRhrY0zZNQvUGaaLh3Gl_UoMQbemzM6LhqIS2kTgOXjQZaS9Jrl7nRsQ411iuuwRd6bfkIUB2zCtspSp87RKEYq4945RrtZF74OGO_bPu8KnpEURd2qePda0xyBLVgON_aRIxT2z3l8I0WalM0CiC53F-K6oudeYpeIT23QA4SPNuF8r6Wfn2gcJ9exoAEP-4hsGG2pImEMRAVOIJpJUNTwaJdJztxTFE3eMqv1g7T1DlOd4DXDxOUfUUoapPhOfb67jM8ra06qQGSU121UgSeNpsadSpM5Frbkc5Zw%26flowName%3DGeneralOAuthFlow%26as%3DS204731074%253A1763376188881284%26client_id%3D733975958425-3g3r05e3q0j7u5j5jv7u50mktgqbbsqo.apps.googleusercontent.com%23&" +
  "app_domain=https%3A%2F%2Fnext-blog-rho-wheat.vercel.app";

console.log("Google Auth URL:\n", googleAuthUrl);
