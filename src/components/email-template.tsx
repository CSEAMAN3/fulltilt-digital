import {
  Html,
  Body,
  Container,
  Text,
  Preview,
  Head,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  phone: string;
  email: string;
  business: string;
  service: string;
  message: string;
  website?: string;
  budget?: string;
  timeline?: string;
}

export default function ContactFormEmail({
  name,
  phone,
  email,
  business,
  service,
  message,
  website,
  budget,
  timeline,
}: ContactFormEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={{ backgroundColor: "#f3f3f3", padding: "20px" }}>
        <Container>
          <Text>You&#39;ve received a new contact form message</Text>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Phone Number:</strong> {phone}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Business Name:</strong> {business}
          </Text>
          <Text>
            <strong>Service:</strong> {service}
          </Text>
          {website ? (
            <Text>
              <strong>Website:</strong> {website}
            </Text>
          ) : null}
          {budget ? (
            <Text>
              <strong>Budget:</strong> {budget}
            </Text>
          ) : null}
          {timeline ? (
            <Text>
              <strong>Timeline:</strong> {timeline}
            </Text>
          ) : null}
          <Text>
            <strong>Message:</strong>
          </Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
