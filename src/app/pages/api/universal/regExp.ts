export const regExp = {
  number: /^\d{1,6}$/,

  tel: /^(\+86)?(\s)?(\d{1,4}-)?\d{5,11}$/,

  phone: /^1[34578]\d{9}$/,

  email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,

  text: /^[a-zA-Z\u4e00-\u9fa5]{2,9}/,

  name: /^[a-zA-Z\u4e00-\u9fa5]{2,9}/,

  file: /[2-9]{1,2}/,

  password: /^(?=.*?[A-Za-z]+)(?=.*?[0-9]+)(?=.*?[A-Za-z]).{6,16}$/,

  strongPassword: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,16}$/,  //要求大小写字母数字特殊符号四选三

  approvalStatus: /(2|3)/,
};
