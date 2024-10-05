import * as Sentry from "@sentry/nextjs";
import { Replay } from "@sentry/replay"; // Import Replay integration explicitly
import { Feedback } from "@sentry/integrations"; // Import Feedback integration explicitly

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [
    new Replay(), // Use `new Replay()` instead of `Sentry.replayIntegration()`
    new Feedback({ // Use `new Feedback()` instead of `Sentry.feedbackIntegration()`
      colorScheme: "dark",
    }),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: process.env.NODE_ENV !== 'production',
});
