// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://b556a213784c36ed659dba403383489d@o4509735854931968.ingest.us.sentry.io/4509735861944320",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,

  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],

  //tracesSampleRate:1.0, 
});
// manually call startProfiler and stopp

Sentry.profiler.startProfiler();
