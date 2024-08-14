function info(constructor: Function) {
  console.log(constructor);
}

function log(
  target: object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<any>
) {
  const originalmathode = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method ${String(propertyKey)} was called`);
    console.log(args);
    return originalmathode.apply(this, args);
  };
}

function readonly(target: object, propertyKey: string) {
  let value = target[propertyKey as keyof Object];

  Object.defineProperty(target, propertyKey, {
    configurable: true,
    get() {
      return value;
    },
    set(newValue) {
      if (value === undefined) value = newValue;
      else throw new Error("두번 못넣어");
    },
  });
}

@info
class Test {
  // @readonly
  @log
  sayHello(name: string) {
    console.log(`Hello ${name}`);
  }
}

const test1 = new Test();
test1.sayHello("AWS");
