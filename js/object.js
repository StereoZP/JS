({
  diagonal: 23, // prop - immutable
  color: 'white', // prop
  manufacturer: 'Asus', // prop
  model: 'VC239', // prop

  isOn: true, // state - mutable

  displayPicture: function () { // method
    if (this.isOn) {
      console.log('display is displaying')
    } else {
      console.log('display is NOT displaying')
    }
  },
}).displayPicture()
