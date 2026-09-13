// Server component — renders a JSON-LD <script> tag in the page head.
// Usage: <JsonLd data={websiteSchema()} />

interface JsonLdProps {
  data: Record<string, unknown>
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
