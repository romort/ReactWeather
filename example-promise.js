function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Error: both parameters must be numbers');
    }

  });
}

addPromise (2,4).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

addPromise ('xyz', 9).then(function (sum) {
  console.log('this should not show up');
}, function(err) {
  console.log('This should appear', err);
});
