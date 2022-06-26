export function formatReturnData({ x, y }: { x: any[]; y: any[] }) {
  let returnData = [];
  for (let i = 0; i < x.length; i++) {
    returnData[i] = { x: x[i], y: y[i] };
  }
  return returnData;
}
