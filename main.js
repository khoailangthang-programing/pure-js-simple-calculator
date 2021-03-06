var caculation = {
    a: undefined,
    b: undefined,
    ope: undefined,
    res: undefined
  }, result;
  const numIds = ['number1', 'number2', 'number3'],
        opeIds = ['ope1', 'ope2'];
  
  const resElem = document.getElementById('result'),
        actionElem = document.getElementById('action'),
        clearElem = document.getElementById('clear'),
        screenElem = document.getElementById('screen');
  
  for (let i = 0; i < numIds.length; i++) {
    document.getElementById(numIds[i]).addEventListener('click', function () {
      // If operator symbol is not undefined.
      // then we add value to b
      // Vice versa, we add value to a
        let val = parseInt(this.dataset.bind);
        if (!isNaN(val)) {
          if (caculation.ope !== undefined &&
              caculation.b === undefined) {
            caculation.b = val;
            screenElem.value = caculation.a + ' ' + caculation.ope + ' ' + caculation.b;
          } else if (caculation.ope === undefined) {
            caculation.a = val;
            screenElem.value = caculation.a + ' ...';
          }
        }
    });
  }
  
  for (let i = 0; i < opeIds.length; i++) {
    document.getElementById(opeIds[i]).addEventListener('click', function () {
      if (caculation.a !== undefined &&
          caculation.b === undefined) {
        caculation.ope = this.dataset.bind;
        screenElem.value = caculation.a + ' ' + caculation.ope + ' ...';
      }
    });
  }
  
  actionElem.addEventListener('click', () => {
    if (caculation.a !== undefined &&
        caculation.b !== undefined &&
        caculation.ope !== undefined &&
        caculation.res === undefined) {
      switch (caculation.ope) {
        case '+':
          result = caculation.a + caculation.b;
          break;
        case '-':
          result = caculation.a - caculation.b;
          break;
      }
      screenElem.value = caculation.a + ' ' + caculation.ope + ' ' + caculation.b + ' = ' + result;
    }
  });
  
  clearElem.addEventListener('click', () => {
    let caculationKeys = Object.keys(caculation);
    let caculationLen = caculationKeys.length;
    for (let i = 0; i < caculationLen; i ++) {
      let keyName = caculationKeys[i];
      caculation[keyName] = undefined;
      screenElem.value = '...';
    }
  });