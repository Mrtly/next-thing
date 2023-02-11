import D3Bar from './d3BarSample';
import D3Line from './d3LineSample';
import D3Scatter from './d3ScatterSample';

export default function D3Samples() {

  return (
    <div>
      <h1 className="font-medium">D3 practice samples</h1> 
      <div className="mt-10"> <D3Bar/> </div>
      <div className="mt-10"> <D3Line/> </div>
      <div className="mt-10"> <D3Scatter/> </div>
    </div>
  );
}
