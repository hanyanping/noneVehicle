export const phone = function (value) {
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if (!myreg.test(value)) {
    return false;
  } else {
    return true;
  }
};
