class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      this._data = [];
      Singleton.instance = this;
    }
  
    static getInstance() {
      return Singleton.instance || new Singleton();
    }
  
    addData(data) {
      this._data.push(data);
    }
  
    getData() {
      return this._data;
    }
  }
  
  const singletonInstance1 = Singleton.getInstance();
  const singletonInstance2 = Singleton.getInstance();
  
  singletonInstance1.addData("Data 1");
  singletonInstance2.addData("Data 2");
  
  console.log(singletonInstance1.getData());
  console.log(singletonInstance1 === singletonInstance2);