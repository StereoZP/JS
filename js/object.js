const table = {
  color: 'white',
  boxes: {
    top: 'pencil',
    bottom: 'pen',
  },
  openBox() {
    console.log(this)
    const func = () => {
      console.log(this)
    }
    func()
    return true;
  },

  closeBox: () => {
    console.log(this)
    const func2 = function () {
      console.log(this)
    }
    func2()
    return false
  },
}

const t = table.openBox()
const t1 = table.closeBox()

console.log(t, t1)

// constructor
function Table(color = 'yellow') {
  this.color = color
  this.boxes = {
    test: 1,
    str: '1',
  }
  this.method = () => {
    console.log('test')
  }
}

const table2 = new Table('white');
const table3 = new Table('black');
const table4 = new Table();

console.log(table2, table3, table4)