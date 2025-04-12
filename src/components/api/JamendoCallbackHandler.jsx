import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function JamendoCallbackHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      console.error("No code in URL!");
      return;
    }

    const fetchTokens = async () => {
      const res = await fetch("https://api.jamendo.com/v3.0/oauth/grant", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          client_id: import.meta.env.VITE_JAMENDO_CLIENT_ID,
          client_secret: import.meta.env.VITE_JAMENDO_CLIENT_SECRET,
          redirect_uri: import.meta.env.VITE_JAMENDO_REDIRECT_URI,
        }),
      });

      const data = await res.json();

      if (data.access_token) {
        localStorage.setItem("jamendo_access_token", data.access_token);
        localStorage.setItem("jamendo_refresh_token", data.refresh_token);
        navigate("/"); // back to main app
      } else {
        console.error("Token fetch failed:", data);
      }
    };

    fetchTokens();
  }, [navigate]);

  return <p className="text-center mt-10">🎧 Connecting to Jamendo...</p>;
}
