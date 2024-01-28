const WidgetTypes = {
  BIG: "big",
  SMALL: "small"
};

class BigWidget {}

class SmallWidget {}

// Creator constructor
class WidgetFactory {
  
  // factoryMethod()
  build(type) {
    if (type === WidgetTypes.BIG) return new BigWidget();
    if (type === WidgetTypes.SMALL) return new SmallWidget();
  }

}

// client code
const factory = new WidgetFactory();

const bigWidget = factory.build(WidgetTypes.BIG);
const smallWidget = factory.build(WidgetTypes.SMALL);

console.log(bigWidget.constructor.name);
console.log(smallWidget.constructor.name);