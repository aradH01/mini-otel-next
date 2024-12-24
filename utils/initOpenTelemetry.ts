import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { OTLPTraceExporter } from '@opentelemetry/exporter-otlp-http';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';

if (typeof window !== 'undefined') {
    // Only initialize OpenTelemetry in the browser
    const provider = new WebTracerProvider();

    // Configure OTLP Exporter
    const exporter = new OTLPTraceExporter({
        url: 'http://52.73.89.220:4318/v1/traces'
    });

    // Add exporter to the provider
    // @ts-ignore
    provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

    // Register provider globally
    provider.register({
        contextManager: new ZoneContextManager(),
    });

    // Register instrumentation
    registerInstrumentations({
        instrumentations: [new DocumentLoadInstrumentation()],
    });

    console.log('OpenTelemetry initialized in the browser');
}
