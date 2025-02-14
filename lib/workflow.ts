import config from "@/lib/config";
import { Client as WorkflowClient } from "@upstash/workflow";
import {
  Client as QstashClient,
  resend as QstashResend,
} from "@upstash/qstash";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qustshUrl,
  token: config.env.upstash.qstashToken,
});

const qstashClient = new QstashClient({
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({email, subject, message}:{email: string, subject: string, message: string}) => {
  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: QstashResend({ token: config.env.resendToken }),
    },
    body: {
      from: "Storm <mail-library-page.stormlycan.in>",
      to: [email],
      subject,
      html: message,
    },
  });
};
