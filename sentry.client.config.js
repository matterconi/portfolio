import * as Sentry from "@sentry/nextjs";
import { Feedback } from "@sentry/integrations"; // Import Feedback integration explicitly

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Add optional integrations for additional features
  integrations: [
    new Feedback({ // Correctly initialize Feedback
      colorScheme: "dark",
    }),
  ],

  // Set Replay sample rates here instead of using the Replay integration
  replaysSessionSampleRate: 0.1, // Sets the sample rate for sessions to be replayed
  replaysOnErrorSampleRate: 1.0, // Sets the sample rate for replaying on errors

  tracesSampleRate: 1.0, // Set how likely traces are sampled

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: process.env.NODE_ENV !== 'production',
});
