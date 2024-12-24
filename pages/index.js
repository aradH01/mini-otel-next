import { trace } from '@opentelemetry/api';

export default function Home() {
  const sendTestTrace = () => {
    const tracer = trace.getTracer('next-app');
    console.log('Tracer:', tracer);
    const span = tracer.startSpan('TestSpan');
    console.log('Started span:', span);

    // Simulate some work
    setTimeout(() => {
      span.setAttribute('test.attribute', 'value');
      span.addEvent('Test event');
      span.end();
      console.log('Ended span:', span);
    }, 1000);
  };

  return (
      <div>
        <h1>OpenTelemetry Test</h1>
        <button onClick={sendTestTrace}>Send Test Trace</button>
      </div>
  );
}
