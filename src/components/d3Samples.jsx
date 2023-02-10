import D3Bar from './d3BarSample';
import D3Line from './d3LineSample';

export default function D3Samples() {

  return (
    <div>
      <h1 className="font-medium">D3 practice with random data</h1> 
      <div className="mt-10"> <D3Bar/> </div>
      <div className="mt-10"> <D3Line/> </div>
    </div>
  );
}
