import SibApiV3Sdk from "@getbrevo/brevo";

const apiInstance = new SibApiV3Sdk.ContactsApi();

apiInstance.setApiKey(
  SibApiV3Sdk.ContactsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY,
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  try {
    await apiInstance.createContact({
      email,
      listIds: [2], // Replace with your Brevo List ID
      updateEnabled: true,
    });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
}
