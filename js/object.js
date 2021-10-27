const table = {
  color: 'white',
  boxes: {
    top: 'pencil',
    bottom: 'pen',
  },

  openBox() {
    return true;
  },
  closeBox: () => false,
}

const t = table.openBox()
const t1 = table.closeBox()

console.log(t,t1)