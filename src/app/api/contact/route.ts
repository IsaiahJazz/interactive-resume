export async function POST(req: Request) {
  try {
    const { name, email, message, company } = await req.json();

    if (company && company.trim() !== "") {
      return new Response(null, { status: 200 }); // Fake success to avoid tipping off bots
    }

    const formspreeRes = await fetch("https://formspree.io/f/mjkylrrb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const formspreeData = await formspreeRes.json();

    if (!formspreeRes.ok) {
      return new Response(
        JSON.stringify({
          error: "Failed to send message",
          details: formspreeData,
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, formspree: formspreeData }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal server error", details: err }),
      { status: 500 }
    );
  }
}
