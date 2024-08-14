// closer

interface ICount {
  getCount(): number;
  increment(): number;
}

function setCount(): ICount {
  let count: number = 0;
  return {
    getCount: (): number => count,
    increment: (): number => ++count,
  };
}

// const count: ICount = setCount();
// count.getCount();
// count.increment();

export default setCount() as ICount;
