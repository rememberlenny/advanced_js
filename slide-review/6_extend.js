function extend(dest /*, sources*/){
  for (var i = 1; i < arguments.length; i++){
    source = arguments[i];
    for (var attr in source){
      dest[attr] = source[attr];
    }
  }
}
